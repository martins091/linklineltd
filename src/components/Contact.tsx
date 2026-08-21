import { Mail, Phone } from "lucide-react";
import { socialLinks } from "./SocialIcons";
import { site } from "@/lib/site-data";

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

        <div className="mt-14 flex flex-col items-start gap-4 border-t border-paper-50/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-wide text-paper-50/80">
            Stay connected
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-50/25 text-paper-50/80 transition-colors hover:border-paper-50/60 hover:text-paper-50"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
