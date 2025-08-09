import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  // apiVersion is optional; the library will use its default version.
  // This avoids the specific version mismatch from the type definitions.
  typescript: true,
});