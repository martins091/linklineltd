import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroVideoBackground } from "./HeroVideoBackground";

export function Hero() {
  return (
    <section id="top" className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-ink-950">
      <HeroVideoBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/15 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-light leading-[1.08] tracking-tight text-paper-50 sm:text-6xl lg:text-[4.25rem]">
            Every voice on site, one channel away.
          </h1>
        </div>

        <div className="mt-9">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-ink-950 shadow-xl shadow-ink-950/40 transition-transform hover:scale-[1.03]"
          >
            Request a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
