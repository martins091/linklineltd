"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  ChevronDown,
  Clock,
  Home,
  Info,
  Mail,
  MapPinned,
  Menu,
  Package,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import { Logo } from "./Logo";
import { services, industries, site, searchIndex, type SearchEntry } from "@/lib/site-data";

const navIcons = {
  about: Info,
  products: Package,
  coverage: MapPinned,
  whyUs: ShieldCheck,
  contact: Mail,
};

function FacebookIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 13} height={props.size ?? 13} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8A21.8 21.8 0 0 0 14.3 3.7c-2.42 0-4.08 1.48-4.08 4.19v2.13H7.55v3.08h2.67V21z" />
    </svg>
  );
}
function InstagramIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 13} height={props.size ?? 13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function XIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 13} height={props.size ?? 13} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2H21.5l-7.51 8.59L22.8 22h-6.91l-5.41-7.07L4.24 22H1l8.03-9.18L1.5 2h7.08l4.9 6.47zm-1.21 18h1.83L7.06 4H5.1z" />
    </svg>
  );
}
function LinkedinIcon(props: { size?: number }) {
  return (
    <svg width={props.size ?? 13} height={props.size ?? 13} viewBox="0 0 24 24" fill="currentColor">
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

function searchMatches(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .filter((e) => e.label.toLowerCase().includes(q) || e.group.toLowerCase().includes(q))
    .slice(0, 8);
}

function SearchBox({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const results = searchMatches(query);

  const go = (href: string) => {
    router.push(href);
    setQuery("");
    setOpen(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (results[0]) go(results[0].href);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <Search
        size={compact ? 17 : 18}
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-ink-700/40 ${
          compact ? "left-8" : "left-5"
        }`}
      />
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Search services, products, coverage…"
        className={`w-full rounded-full border-2 border-gold-400/60 bg-paper-100/50 text-sm font-medium text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-gold-500 focus:outline-none focus:ring-4 focus:ring-gold-400/15 ${
          compact ? "py-3 pl-11 pr-4" : "py-3.5 pl-12 pr-32"
        }`}
      />
      {!compact && (
        <button
          type="submit"
          className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-brand-700 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-paper-50 transition-colors hover:bg-brand-600"
        >
          Search
        </button>
      )}

      {open && query.trim() && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-ink-950/8 bg-white shadow-xl shadow-ink-950/10">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-2">
              {results.map((r) => (
                <li key={`${r.group}-${r.label}`}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => go(r.href)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm text-ink-900 transition-colors hover:bg-paper-100"
                  >
                    <span className="font-medium">{r.label}</span>
                    <span className="shrink-0 text-[11px] font-bold uppercase tracking-wide text-ink-700/40">
                      {r.group}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-4 text-sm text-ink-700/60">
              No matches for &ldquo;{query}&rdquo;.
            </p>
          )}
        </div>
      )}
    </form>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggle = (key: string) => setExpanded((v) => (v === key ? null : key));

  const sidebarNav = (
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4">
      <a
        href="#top"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <Home size={18} strokeWidth={2.2} /> Home
      </a>

      <a
        href="#about"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <navIcons.about size={18} strokeWidth={2.2} /> About
      </a>

      <div>
        <button
          onClick={() => toggle("services")}
          className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
        >
          <span className="flex items-center gap-3">
            <Radio size={18} strokeWidth={2.2} /> Services
          </span>
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform ${expanded === "services" ? "rotate-180" : ""}`}
          />
        </button>
        {expanded === "services" && (
          <div className="ml-[1.4rem] mt-1 flex flex-col gap-0.5 border-l border-ink-950/8 pl-4">
            {services.map((s) => (
              <a
                key={s.title}
                href="#services"
                className="rounded-lg px-2 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {s.title}
              </a>
            ))}
          </div>
        )}
      </div>

      <a
        href="#products"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <navIcons.products size={18} strokeWidth={2.2} /> Products
      </a>

      <div>
        <button
          onClick={() => toggle("industries")}
          className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
        >
          <span className="flex items-center gap-3">
            <Building2 size={18} strokeWidth={2.2} /> Industries
          </span>
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform ${expanded === "industries" ? "rotate-180" : ""}`}
          />
        </button>
        {expanded === "industries" && (
          <div className="ml-[1.4rem] mt-1 flex flex-col gap-0.5 border-l border-ink-950/8 pl-4">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href="#industries"
                className="rounded-lg px-2 py-1.5 text-xs font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {ind.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <a
        href="#coverage"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <navIcons.coverage size={18} strokeWidth={2.2} /> Coverage
      </a>
      <a
        href="#why-us"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <navIcons.whyUs size={18} strokeWidth={2.2} /> Why Linkline
      </a>
      <a
        href="#contact"
        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-ink-950/5"
      >
        <navIcons.contact size={18} strokeWidth={2.2} /> Contact
      </a>
    </nav>
  );

  return (
    <>
      {/* Top utility bar */}
      <div className="fixed inset-x-0 top-0 z-50 hidden h-10 items-center justify-between border-b border-ink-950/10 bg-ink-950 px-6 text-paper-50/80 lg:flex">
        <div className="flex items-center gap-3.5">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="transition-colors hover:text-gold-400"
            >
              <Icon size={13} />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 text-xs font-medium">
          <span className="flex items-center gap-1.5">
            <Phone size={12} /> {site.phonePrimary}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} /> {site.hours}
          </span>
        </div>
      </div>

      {/* Prominent search row */}
      <div className="fixed inset-x-0 top-10 z-50 hidden h-[78px] items-center justify-center border-b border-ink-950/8 bg-paper-50 px-6 lg:flex">
        <div className="w-full max-w-xl">
          <SearchBox />
        </div>
      </div>

      {/* Desktop left sidebar */}
      <aside className="fixed bottom-0 left-0 top-[118px] z-40 hidden w-72 flex-col border-r border-ink-950/8 bg-paper-50 lg:flex">
        <a href="#top" className="flex items-center gap-2.5 px-6 py-7">
          <Logo variant="dark" />
        </a>

        {sidebarNav}

        <div className="border-t border-ink-950/8 px-4 py-5">
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="flex items-center gap-2 px-2 text-sm font-semibold text-ink-900"
          >
            <Phone size={15} /> {site.phonePrimary}
          </a>
          <a
            href="#contact"
            className="mt-3 block rounded-full bg-brand-700 px-4 py-3 text-center text-sm font-bold text-paper-50 shadow-lg shadow-brand-700/25 transition-transform hover:scale-[1.02]"
          >
            Get a Quote
          </a>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex flex-col border-b border-ink-950/8 bg-paper-50/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#top">
            <Logo variant="dark" />
          </a>
          <button
            className="text-ink-950"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        <div className="border-t border-ink-950/6 px-5 pb-4 pt-1">
          <SearchBox compact />
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-[148px] z-40 h-[calc(100dvh-148px)] overflow-y-auto bg-paper-50 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {[
              { label: "Home", href: "#top" },
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Products", href: "#products" },
              { label: "Industries", href: "#industries" },
              { label: "Coverage", href: "#coverage" },
              { label: "Why Linkline", href: "#why-us" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-ink-950/6 py-4 font-display text-lg font-bold text-ink-950"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 block rounded-full bg-brand-700 px-5 py-3.5 text-center text-sm font-bold text-paper-50"
          >
            Get a Quote
          </a>
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink-800"
          >
            <Phone size={15} /> {site.phonePrimary}
          </a>
        </div>
      )}
    </>
  );
}
