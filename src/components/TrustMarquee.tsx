import { trustStrip } from "@/lib/site-data";

export function TrustMarquee() {
  const loop = [...trustStrip, ...trustStrip];

  return (
    <div className="relative overflow-hidden border-y border-gold-500/20 bg-ink-950 py-4">
      <div className="group flex w-max items-center">
        <div className="flex animate-marquee items-center group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <div key={`${item}-${i}`} className="flex shrink-0 items-center">
              <span className="whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.2em] text-paper-50/70">
                {item}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500/70" />
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
    </div>
  );
}
