import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-4">
      <div className="max-w-md text-center">
        {/* Error Code */}
        <p className="font-heading text-7xl font-bold text-primary">404</p>

        {/* Heading */}
        <h1 className="mt-4 font-heading text-3xl font-semibold text-stone-900">
          Page not found
        </h1>

        {/* Description */}
        <p className="mt-3 text-stone-600 leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or may have been
          moved.
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="rounded-xl">
            <Link href="/">Back Home</Link>
          </Button>

          <Button variant="outline" className="rounded-xl border-stone-300">
            <Link href="/care-page">Care Guide</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
