import { NextResponse } from 'next/server';
import * as Razorpay from 'razorpay'; // Fixed import
import { supabase } from '@/lib/supabaseClient'; // Assuming this is your browser client
import crypto from 'crypto';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('x-razorpay-signature');
  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.error('Razorpay webhook secret or signature not configured.');
    return NextResponse.json({ error: 'Webhook secret or signature not configured.' }, { status: 400 });
  }

  // Verify webhook signature
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(body)
    .digest('hex');

  if (expectedSignature !== signature) {
    console.error('Invalid Razorpay webhook signature.');
    return new NextResponse('Invalid signature', { status: 400 });
  }

  const event = JSON.parse(body);

  try {
    switch (event.event) {
      case 'payment.captured':
      case 'order.paid': {
        const payment = event.payload.payment.entity;
        const order = event.payload.order.entity;
        const userId = order.notes?.userId;
        const planId = order.notes?.planId;

        if (!userId || !planId) {
          throw new Error('Missing metadata: userId or planId on Razorpay order notes');
        }

        // 1. Update user's plan in Supabase
        const { data: plan, error: planError } = await supabase
          .from('plans')
          .select('post_limit')
          .eq('id', planId)
          .single();

        if (planError) throw planError;

        const { error: profileError } = await supabase
          .from('profiles')
          .update({ plan_id: planId, post_quota: plan.post_limit })
          .eq('id', userId);

        if (profileError) throw profileError;

        // 2. Check for referral and apply bonus if applicable
        const { data: userProfile, error: userProfileError } = await supabase
          .from('profiles')
          .select('referred_by')
          .eq('id', userId)
          .single();

        if (userProfileError) throw userProfileError;

        if (userProfile.referred_by) {
          const { error: rpcError } = await supabase.rpc('apply_referral_bonus', {
            p_referrer_id: userProfile.referred_by,
          });
          if (rpcError) {
            console.error('Failed to apply referral bonus:', rpcError);
          }
        }
        break;
      }
      case 'payment.failed': {
        // TODO: Handle failed payments: update user status to 'past_due', notify user, and disable features.
        console.log('Payment failed:', event.payload.payment.entity);
        break;
      }
      default:
        console.log(`Unhandled Razorpay event type: ${event.event}`);
    }
  } catch (error: any) {
    console.error('Razorpay webhook handler failed:', error.message);
    return new NextResponse('Webhook handler failed. View server logs for details.', { status: 500 });
  }

  return NextResponse.json({ received: true });
}