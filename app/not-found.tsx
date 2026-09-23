import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "./site-shell";

export const metadata: Metadata = {
  title: "Page not found — qath",
  description: "This page could not be found. Return to the qath homepage.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="text-center">
        <h1 className="text-[clamp(2.55rem,12vw,4.75rem)] font-medium leading-none tracking-tighter">
          <span data-entrance="0.12" className="block text-white/90">Page not found</span>
          <span data-entrance="0.32" className="intelligence mt-2 block pb-[0.12em]">404</span>
        </h1>

        <p data-entrance="0.56" className="mx-auto mt-6 max-w-72 text-[13px] leading-5 text-white/60 sm:max-w-none sm:text-sm">
          The page you are looking for does not exist or has moved.
        </p>

        <Link
          data-entrance="0.76"
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:border-white/40"
        >
          Back to home
        </Link>
      </section>
    </SiteShell>
  );
}
