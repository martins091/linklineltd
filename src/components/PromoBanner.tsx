import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type PromoBannerProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  icon?: LucideIcon;
};

export function PromoBanner({ heading, body, ctaLabel, ctaHref, icon: Icon }: PromoBannerProps) {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex min-h-[280px] flex-col justify-center bg-gold-300/60 px-6 py-16 sm:min-h-[340px] sm:px-10 sm:py-20 lg:min-h-[400px] lg:px-14 lg:py-24">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-light tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-800/80 sm:text-base lg:text-lg">{body}</p>
            </div>
            <Link
              href={ctaHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              {Icon && <Icon size={15} />}
              {ctaLabel}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
