import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { supabase } from '@/lib/supabaseClient';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const { planId } = await request.json();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!planId) {
    return NextResponse.json({ error: 'Plan ID is required' }, { status: 400 });
  }

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '',
  });

  const { data: plan, error: planError } = await supabase
    .from('plans')
    .select('name, price')
    .eq('id', planId)
    .single();

  if (planError || !plan) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
  }

  try {
    const options = {
      amount: plan.price, // amount in the smallest currency unit (paise for INR)
      currency: 'INR',
      receipt: `receipt_order_${planId}_${user.id}_${Date.now()}`,
      payment_capture: 1 as 0 | 1, // Explicitly cast to 0 | 1
      notes: {
        userId: user.id,
        planId: planId,
      },
    };

    const order = await razorpay.orders.create(options);
    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency });
  } catch (error: any) {
    console.error('Razorpay order creation error:', error.message);
    return new NextResponse('Error creating Razorpay order', { status: 500 });
  }
}