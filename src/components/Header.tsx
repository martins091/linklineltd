"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Layers,
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
import {
  coverage,
  industries,
  nav,
  products,
  services,
  site,
  searchIndex,
  type SearchEntry,
} from "@/lib/site-data";

function searchMatches(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex
    .filter((e) => e.label.toLowerCase().includes(q) || e.group.toLowerCase().includes(q))
    .slice(0, 8);
}

function SearchBox() {
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
    <form onSubmit={handleSubmit} className="relative w-40 xl:w-52">
      <Search
        size={14}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-700/40"
      />
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Search…"
        className="w-full rounded-full border border-ink-950/12 bg-paper-100/60 py-2 pl-8 pr-3 text-xs font-medium text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-400/15"
      />

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

const serviceIcons = [Radio, Package, Layers, ShieldCheck];
const featuredProducts = products.slice(0, 4);
const featuredIndustries = industries.slice(0, 6);
const featuredCoverage = coverage.slice(0, 4);

function ServicesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-[1.1fr_1.1fr_0.9fr]">
      <div className="border-r border-ink-950/8 p-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-700/50">
          What We Do
        </p>
        <div className="mt-4 flex flex-col gap-1">
          {services.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <Link
                key={s.title}
                href="/services#services"
                onClick={onNavigate}
                className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-paper-100"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-700/10 text-brand-700">
                  <Icon size={17} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-950 group-hover:text-brand-700">
                    {s.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-700/70">
                    {s.kicker.replace(/^\d+\s*—\s*/, "")}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="border-r border-ink-950/8 p-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-700/50">
          Popular Products
        </p>
        <div className="mt-4 flex flex-col gap-1">
          {featuredProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-paper-100"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-paper-100">
                <Image src={p.image} alt={p.name} fill className="object-contain p-1.5" />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink-950 group-hover:text-brand-700">
                  {p.name}
                </span>
                <span className="mt-0.5 block text-xs text-gold-600">{p.power}</span>
              </span>
            </Link>
          ))}
          <Link
            href="/services#products"
            onClick={onNavigate}
            className="mt-1 flex items-center gap-1.5 px-2 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-700"
          >
            View all products <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden bg-ink-950 p-6">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/10 blur-2xl" />
        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
            {site.tagline}
          </p>
          <p className="mt-3 font-display text-lg font-extrabold leading-snug text-paper-50">
            No license. No maintenance. No upfront capital.
          </p>
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-4 py-2.5 text-xs font-bold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          Get a Quote <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

function IndustriesMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid grid-cols-[1.3fr_0.9fr_0.9fr]">
      <div className="border-r border-ink-950/8 p-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-700/50">
          Industries We Serve
        </p>
        <div className="mt-4 grid grid-cols-2 gap-1">
          {featuredIndustries.map((ind) => (
            <Link
              key={ind.name}
              href="/industries#industries"
              onClick={onNavigate}
              className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-paper-100"
            >
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-paper-100">
                <Image src={ind.image} alt={ind.name} fill className="object-cover" />
              </span>
              <span className="text-sm font-bold text-ink-950 group-hover:text-brand-700">
                {ind.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-r border-ink-950/8 p-6">
        <p className="text-[11px] font-bold uppercase tracking-widest text-ink-700/50">
          Coverage Corridors
        </p>
        <div className="mt-4 flex flex-col gap-2.5">
          {featuredCoverage.map((c) => (
            <Link
              key={c.route}
              href="/industries#coverage"
              onClick={onNavigate}
              className="group block rounded-xl px-2 py-1 transition-colors hover:bg-paper-100"
            >
              <span className="block text-sm font-bold text-ink-950 group-hover:text-brand-700">
                {c.route.replace("Lagos – ", "")}
              </span>
              <span className="block text-xs text-ink-700/70">{c.extent}</span>
            </Link>
          ))}
          <Link
            href="/industries#coverage"
            onClick={onNavigate}
            className="mt-1 flex items-center gap-1.5 px-2 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-700"
          >
            View full coverage map <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden bg-paper-100 p-6">
        <div>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700/10 text-brand-700">
            <Building2 size={18} />
          </span>
          <p className="mt-3 font-display text-lg font-extrabold leading-snug text-ink-950">
            20+ industries, one network
          </p>
          <p className="mt-2 text-xs leading-relaxed text-ink-700/70">
            From offshore platforms to airside ground crews — see the full list.
          </p>
        </div>
        <Link
          href="/industries"
          onClick={onNavigate}
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-2.5 text-xs font-bold text-paper-50 transition-transform hover:scale-[1.03]"
        >
          <MapPinned size={14} /> See All Industries
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const closeMobile = () => setMobileOpen(false);
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-ink-950/8 bg-paper-50/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo variant="dark" />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const mega = "mega" in item ? item.mega : undefined;
            return (
              <div key={item.label} className="relative">
                {mega ? (
                  <button
                    onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive(item.href) ? "text-brand-700" : "text-ink-800 hover:text-brand-700"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2.5}
                      className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive(item.href) ? "text-brand-700" : "text-ink-800 hover:text-brand-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {mega && openDropdown === item.label && (
                  <div className="absolute left-0 top-[calc(100%+10px)] z-50 w-[720px] overflow-hidden rounded-2xl border border-ink-950/8 bg-white shadow-2xl shadow-ink-950/15">
                    {mega === "services" ? (
                      <ServicesMega onNavigate={closeDropdown} />
                    ) : (
                      <IndustriesMega onNavigate={closeDropdown} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <SearchBox />
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-800 xl:flex"
          >
            <Phone size={15} /> {site.phonePrimary}
          </a>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-bold text-paper-50 shadow-lg shadow-brand-700/25 transition-transform hover:scale-[1.03]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="text-ink-950 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-80px)] overflow-y-auto bg-paper-50 px-6 py-6 lg:hidden">
          <SearchBox />

          <div className="mt-5 flex flex-col gap-1">
            {nav.map((item) => {
              const mega = "mega" in item ? item.mega : undefined;
              const megaItems =
                mega === "services"
                  ? services.map((s) => ({ label: s.title, href: "/services#services" }))
                  : mega === "industries"
                    ? featuredIndustries.map((ind) => ({ label: ind.name, href: "/industries#industries" }))
                    : [];
              return (
                <div key={item.label} className="border-b border-ink-950/6">
                  {mega ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="flex w-full items-center justify-between py-4 font-display text-lg font-bold text-ink-950"
                      >
                        {item.label}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="mb-3 flex flex-col gap-1 pl-2">
                          {megaItems.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMobile}
                              className="rounded-lg py-2 text-sm font-medium text-ink-700"
                            >
                              {child.label}
                            </Link>
                          ))}
                          <Link
                            href={item.href}
                            onClick={closeMobile}
                            className="rounded-lg py-2 text-sm font-bold text-brand-700"
                          >
                            View all →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobile}
                      className="block py-4 font-display text-lg font-bold text-ink-950"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={closeMobile}
            className="mt-6 block rounded-full bg-brand-700 px-5 py-3.5 text-center text-sm font-bold text-paper-50"
          >
            Get a Quote
          </Link>
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink-800"
          >
            <Phone size={15} /> {site.phonePrimary}
          </a>
        </div>
      )}
    </header>
  );
}
