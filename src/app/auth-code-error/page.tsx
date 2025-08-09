import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function AuthErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-center px-4">
      <AlertTriangle className="h-16 w-16 text-destructive" />
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Authentication Error</h1>
      <p className="mt-2 max-w-md text-lg text-muted-foreground">
        There was a problem authenticating your account. This can happen if the link has expired or has already been used.
      </p>
      <Button asChild className="mt-8">
        <Link href="/login">Return to Login</Link>
      </Button>
    </div>
  )
}