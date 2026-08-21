import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { coverage, industries, services, site } from "@/lib/site-data";

const footerNav = [
  {
    title: "Solutions",
    links: services.map((s) => ({ label: s.title, href: "/services#services" })),
  },
  {
    title: "Industries",
    links: industries.map((i) => ({ label: i.name, href: "/industries#industries" })),
  },
  {
    title: "Coverage",
    links: coverage.map((c) => ({ label: c.route, href: "/industries#coverage" })),
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services & Products", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[auto_repeat(4,1fr)] lg:gap-8">
          <Logo variant="light" />

          {footerNav.map((group) => (
            <div key={group.title}>
              <p className="text-base font-bold text-gold-400">{group.title}</p>
              <ul className="mt-5 space-y-4">
                {group.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-paper-50/70 transition-colors hover:text-paper-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-paper-50/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs text-paper-50/50">Headquarters</p>
              <p className="mt-1.5 text-base text-paper-50">
                {site.address.street}, {site.address.city}
              </p>
            </div>
            <div>
              <p className="text-xs text-paper-50/50">Tel</p>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="mt-1.5 block text-base text-paper-50 hover:text-gold-400"
              >
                {site.phonePrimary}
              </a>
            </div>
            <div>
              <p className="text-xs text-paper-50/50">Email</p>
              <a
                href={`mailto:${site.emailPrimary}`}
                className="mt-1.5 block text-base text-paper-50 hover:text-gold-400"
              >
                {site.emailPrimary}
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-paper-50/30 px-6 py-2.5 text-sm text-paper-50 transition-colors hover:border-paper-50 hover:text-white"
          >
            Get in touch
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-paper-50/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-xs text-paper-50/50 transition-colors hover:text-paper-50">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="text-xs text-paper-50/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
