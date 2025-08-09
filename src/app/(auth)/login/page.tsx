"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@/lib/supabase/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import type { AuthChangeEvent, Session } from '@supabase/supabase-js';

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event === 'SIGNED_IN') {
          router.push('/dashboard');
          router.refresh();
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-112px)] bg-background px-4">
      <div className="w-full max-w-md p-8 space-y-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Welcome to DreamPixel
          </h2>
           <p className="mt-2 text-center text-sm text-muted-foreground">
            Sign in or create an account to continue
          </p>
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
          theme={resolvedTheme === 'dark' ? 'dark' : 'default'}
          redirectTo={typeof window !== 'undefined' ? `${window.location.origin}/api/auth/callback` : undefined}
        />
      </div>
    </div>
  );
}