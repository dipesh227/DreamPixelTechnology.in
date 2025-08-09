import { supabase } from '@/lib/supabaseClient';
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

const relevantEvents = new Set([
  'checkout.session.completed',
  'invoice.payment_succeeded',
  'invoice.payment_failed',
]);

export async function POST(request: Request) {
  const body = await request.text();
  const sig = request.headers.get('Stripe-Signature') as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    console.error('Stripe webhook secret not configured.');
    return NextResponse.json({ error: 'Webhook secret not configured.' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Stripe Webhook Error: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (relevantEvents.has(event.type)) {
    try {
      switch (event.type) {
        case 'checkout.session.completed': {
          const session = event.data.object as Stripe.Checkout.Session;
          const userId = session.metadata?.userId;
          const planId = session.metadata?.planId;

          if (!userId || !planId) {
            throw new Error('Missing metadata: userId or planId on checkout session');
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
            // This logic assumes the first 'checkout.session.completed' event is the first payment.
            // More robust logic could check if the user had a previous plan.
            const { error: rpcError } = await supabase.rpc('apply_referral_bonus', {
              p_referrer_id: userProfile.referred_by,
            });
            if (rpcError) {
              console.error('Failed to apply referral bonus:', rpcError);
            }
          }
          break;
        }
        case 'invoice.payment_succeeded': {
          // TODO: Handle subscription renewals: reset monthly quotas, apply wallet balance etc.
          break;
        }
        case 'invoice.payment_failed': {
          // TODO: Handle failed payments: update user status to 'past_due', notify user, and disable features.
          break;
        }
        default:
          console.log(`Unhandled relevant event type: ${event.type}`);
      }
    } catch (error) {
      console.error('Webhook handler failed:', error);
      return new NextResponse('Webhook handler failed. View server logs for details.', { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}