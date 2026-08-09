import { Logo } from "./Logo";
import { FooterContactForm } from "./FooterContactForm";
import { nav, site, trustStrip } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-2xl border border-paper-50/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Send us a message
          </p>
          <h3 className="mt-2 font-display text-xl font-extrabold text-paper-50 sm:text-2xl">
            Can&rsquo;t call right now? Write to us.
          </h3>
          <div className="mt-5">
            <FooterContactForm />
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-50/60">
              {site.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-paper-50/70 transition-colors hover:text-paper-50"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Industries
            </p>
            <ul className="mt-4 space-y-2.5">
              {trustStrip.slice(0, 6).map((item) => (
                <li key={item} className="text-sm text-paper-50/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper-50/70">
              <li>{site.phonePrimary}</li>
              <li>{site.emailPrimary}</li>
              <li>{site.address.street}</li>
              <li>{site.address.city}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper-50/10 py-6 sm:flex-row">
          <p className="text-xs text-paper-50/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-paper-50/45">Public Access Mobile Radio · Lagos State</p>
        </div>
      </div>
    </footer>
  );
}
