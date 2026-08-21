import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { coverage } from "@/lib/site-data";

export function FeatureGrid() {
  return (
    <section className="bg-paper-100/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-700/50">
              Compliance
            </p>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink-950">
              Licensed PAMR Operator
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-700/80">
              Linkline holds the Public Access Mobile Radio license so your organisation never
              needs a spectrum license of its own.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700"
            >
              Learn more
              <ArrowRight size={13} />
            </Link>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-ink-700/50">
              Coverage
            </p>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug text-ink-950">
              Six Corridors Across Lagos
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-700/80">
              From the CBD on Lagos Island out to Epe, Ikorodu, Otta, Sagamu and Badagry — see the
              full coverage map.
            </p>
            <Link
              href="/industries#coverage"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700"
            >
              Find out more
              <ArrowRight size={13} />
            </Link>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold leading-snug text-ink-950">
              Find Your Corridor
            </h3>
            <Link
              href="/industries#coverage"
              className="mt-4 flex items-center gap-3 rounded-full border border-ink-950/10 bg-white px-4 py-3 text-sm text-ink-700/60 transition-colors hover:border-ink-950/20"
            >
              <Search size={15} />
              {coverage[0].route.replace("Lagos – ", "")}
            </Link>
            <Link
              href="/industries#coverage"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700"
            >
              Discover our coverage corridors
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
