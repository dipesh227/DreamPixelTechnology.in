import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-center px-4">
      <h1 className="text-9xl font-bold text-brand-accent">404</h1>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight flex items-center gap-3">
        <AlertTriangle className="h-8 w-8 text-brand-accent" />
        Page Not Found
      </h2>
      <p className="mt-2 text-lg text-muted-foreground">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="mt-8 bg-brand-accent hover:bg-brand-accent/90 text-primary-foreground">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}