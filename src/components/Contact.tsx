import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

const cards = [
  {
    icon: Phone,
    title: "Call us",
    lines: [site.phonePrimary, site.phoneSecondary],
    hrefs: [`tel:${site.phonePrimaryRaw}`, `tel:${site.phoneSecondaryRaw}`],
  },
  {
    icon: Mail,
    title: "Email us",
    lines: [site.emailPrimary, site.emailSecondary],
    hrefs: [`mailto:${site.emailPrimary}`, `mailto:${site.emailSecondary}`],
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: [site.address.street, site.address.city],
    hrefs: [],
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-700 py-24 sm:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-ink-950/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-paper-50 sm:text-4xl lg:text-5xl">
            Ready to put your team on one channel?
          </h2>
          <p className="mt-4 text-paper-50 sm:text-lg">
            Speak with a communication representative and get a quotation built around your
            team size, coverage area and budget.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-paper-50 px-6 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition-transform hover:scale-[1.03]"
          >
            <Phone size={16} /> Call {site.phonePrimary}
          </a>
          <a
            href={`mailto:${site.emailPrimary}`}
            className="inline-flex items-center gap-2 rounded-full border border-paper-50/40 bg-white/5 px-6 py-3.5 text-sm font-bold text-paper-50 backdrop-blur transition-colors hover:bg-white/15"
          >
            <Mail size={16} /> Email us
          </a>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-paper-50/15 bg-white/5 p-5 backdrop-blur-sm"
            >
              <c.icon size={20} className="text-gold-300" />
              <h3 className="mt-3 font-display text-sm font-bold text-paper-50">{c.title}</h3>
              <div className="mt-1.5 space-y-0.5">
                {c.lines.map((line, i) =>
                  c.hrefs[i] ? (
                    <a
                      key={line}
                      href={c.hrefs[i]}
                      className="block text-sm text-paper-50/75 hover:text-paper-50"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-sm text-paper-50/75">
                      {line}
                    </p>
                  )
                )}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-paper-50/15 bg-white/5 p-5 backdrop-blur-sm sm:col-span-3">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold-300" />
              <p className="text-sm font-semibold text-paper-50">{site.hours}</p>
              <span className="text-paper-50/40">·</span>
              <p className="text-sm text-paper-50/75">{site.address.postal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
