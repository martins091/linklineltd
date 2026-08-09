import { stats, whyUs } from "@/lib/site-data";

export function WhyUs() {
  return (
    <section id="why-us" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-950/8 bg-paper-100/60 px-5 py-6 text-center sm:text-left"
            >
              <p className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-700">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              Why Two-Way Radio
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
              Cellular wasn&rsquo;t built for your operation
            </h2>
            <p className="mt-4 text-ink-700">
              A phone call reaches one person at a time and waits for a free line. A radio
              channel reaches your whole team, instantly, for a flat fee you can budget
              against with certainty.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-ink-950/8 bg-white p-5 shadow-sm shadow-ink-950/[0.03]"
              >
                <h3 className="font-display text-base font-bold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
