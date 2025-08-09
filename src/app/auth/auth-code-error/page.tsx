import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
      <p className="text-muted-foreground max-w-md">
        There was a problem authenticating your account. This can happen if the link has expired or has already been used.
      </p>
      <Button asChild className="mt-6">
        <Link href="/login">
          Return to Login
        </Link>
      </Button>
    </div>
  );
}