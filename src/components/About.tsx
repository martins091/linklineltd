import { about } from "@/lib/site-data";

export function About() {
  return (
    <section id="about" className="bg-paper-100/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
              {about.kicker}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
              {about.heading}
            </h2>
            <p className="mt-4 text-ink-700">{about.intro}</p>
            <p className="mt-4 text-sm font-semibold italic text-brand-700">{about.vision}</p>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink-700">{about.proposition}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.points.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-ink-950/8 bg-white p-5 shadow-sm shadow-ink-950/[0.03]"
                >
                  <h3 className="font-display text-sm font-bold text-ink-950">{p.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-700">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
