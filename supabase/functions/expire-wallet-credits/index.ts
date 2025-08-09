import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
import { serve } from 'https://deno.land/std@0.190.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Use the Service Role Key for admin-level access.
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // 1. Find all expired, non-processed wallet credits of type 'referral_bonus'
    const { data: expiredCredits, error: fetchError } = await supabaseAdmin
      .from('wallet_transactions')
      .select('id, user_id, amount')
      .eq('type', 'referral_bonus')
      .eq('status', 'completed') // Only act on credits that are currently active
      .lt('expires_at', new Date().toISOString());

    if (fetchError) throw fetchError;

    if (!expiredCredits || expiredCredits.length === 0) {
      return new Response(JSON.stringify({ message: 'No credits to expire.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      });
    }

    // 2. Process each expired credit by calling the RPC function
    for (const credit of expiredCredits) {
      const { error: rpcError } = await supabaseAdmin.rpc('process_credit_expiry', {
        p_user_id: credit.user_id,
        p_amount: credit.amount,
        p_transaction_id: credit.id,
      });

      if (rpcError) {
        console.error(`Failed to expire credit ${credit.id} for user ${credit.user_id}:`, rpcError);
        // Log error and continue to the next credit
      }
    }

    return new Response(JSON.stringify({ message: `Processed ${expiredCredits.length} expired credits.` }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Wallet expiry function error:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});