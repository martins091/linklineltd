import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site-data";

function FacebookIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.8 21.8 0 0 0 14.3 3.7c-2.42 0-4.08 1.48-4.08 4.19v2.13H7.55v3.08h2.67V21z" />
    </svg>
  );
}
function InstagramIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2H21.5l-7.51 8.59L22.8 22h-6.91l-5.41-7.07L4.24 22H1l8.03-9.18L1.5 2h7.08l4.9 6.47zm-1.21 18h1.83L7.06 4H5.1z" />
    </svg>
  );
}
function LinkedinIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 14} height={props.size ?? 14} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.72c0-1.37-.02-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03V21H9z" />
    </svg>
  );
}

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-50/60">
              {site.description}
            </p>
            <div className="mt-5 flex items-center gap-3.5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-paper-50/60 transition-colors hover:text-gold-400"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-paper-50/10 pt-6 sm:flex-row">
          <p className="text-xs text-paper-50/45">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-paper-50/45">Public Access Mobile Radio · Lagos State</p>
        </div>
      </div>
    </footer>
  );
}
