import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Contact } from "@/components/Contact";
import { stats } from "@/lib/site-data";

const teasers = [
  {
    title: "What We Do",
    body: "A fully managed two-way radio network across commercial Lagos — no license, no infrastructure to own.",
    href: "/services",
  },
  {
    title: "Industries We Serve",
    body: "From oil & gas to aviation, security and logistics — see who relies on Linkline every day.",
    href: "/industries",
  },
  {
    title: "About Linkline",
    body: "Lagos's dedicated Public Access Mobile Radio operator, built for greater commercial Lagos.",
    href: "/about",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Products />

      <section className="bg-paper-50 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:grid-cols-4 sm:gap-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-extrabold text-brand-700 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-700">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper-100/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-3">
            {teasers.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="group rounded-2xl border border-ink-950/8 bg-white p-6 shadow-sm shadow-ink-950/[0.03] transition-transform hover:-translate-y-1"
              >
                <h3 className="font-display text-lg font-bold text-ink-950">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{t.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700">
                  Learn more
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
