import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  return (
    <section id="services" className="bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-paper-50 sm:text-4xl">
            Everything you need to get your team on channel
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-paper-50/10 bg-paper-50/[0.03] p-6 sm:p-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                {s.kicker}
              </p>
              <h3 className="mt-3 font-display text-xl font-extrabold leading-tight text-paper-50 sm:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-100/70">{s.body}</p>

              <div className="mt-5 grid gap-2">
                {s.points.map((p) => (
                  <div key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-400" />
                    <span className="text-sm leading-snug text-paper-50/85">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
