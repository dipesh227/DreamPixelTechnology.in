import { supabase } from '@/lib/supabaseClient';
import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Explicitly set runtime to Node.js

export async function POST(request: Request) {
  const { planId } = await request.json();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!planId) {
    return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
  }

  const { data: plan, error: planError } = await supabase
    .from('plans')
    .select('name, price')
    .eq('id', planId)
    .single();

  if (planError || !plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
  }

  const origin = request.headers.get('origin') || 'http://localhost:3000';

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: plan.name,
            },
            unit_amount: plan.price, // Price in paise
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/dashboard?payment_success=true`,
      cancel_url: `${origin}/#pricing?payment_canceled=true`,
      metadata: {
        userId: user.id,
        planId: planId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe session creation error:', err.message);
    return new NextResponse('Error creating checkout session', { status: 500 });
  }
}