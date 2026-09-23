import SiteShell from "./site-shell";

export default function Home() {
  return (
    <SiteShell>
      <section className="text-center">
        <h1 className="text-[clamp(2.55rem,12vw,4.75rem)] font-medium leading-none tracking-tighter">
          <span data-entrance="0.12" className="block text-white/90">European Transport</span>

          <span data-entrance="0.32" className="intelligence mt-2 block pb-[0.12em]">
            Intelligence
          </span>
        </h1>

        <p data-entrance="0.56" className="mx-auto mt-6 max-w-72 text-[13px] leading-5 text-white/60 sm:max-w-none sm:text-sm">
          A new perspective on European transport is on its way.
        </p>
      </section>
    </SiteShell>
  );
}
