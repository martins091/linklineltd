"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";

const panels = [
  {
    tab: "Network",
    category: "Managed Service",
    title: "Managed Radio Network",
    image: "/images/hero-coverage.jpg",
    href: "/services#services",
  },
  {
    tab: "Equipment",
    category: "Hardware",
    title: "Sales, Lease & Rental",
    image: "/images/product-mobile.jpg",
    href: "/services#products",
  },
  {
    tab: "Airtime",
    category: "Billing",
    title: "Bundled Network Access",
    image: "/images/product-base-station.jpg",
    href: "/services#services",
  },
  {
    tab: "Plug & Play",
    category: "Peace of Mind",
    title: "Just Plug & Play",
    image: "/images/hero-construction.png",
    href: "/services#services",
  },
] as const;

export function Solutions() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const panel = panels[active];

  const go = (dir: 1 | -1) => {
    setActive((i) => (i + dir + panels.length) % panels.length);
  };

  return (
    <section id="solutions" className="bg-paper-100/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-light tracking-tight text-ink-950 sm:text-4xl">
            Our Solutions
          </h2>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {panels.map((p, i) => (
              <button
                key={p.tab}
                onClick={() => setActive(i)}
                className={`border-b-2 pb-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                  i === active
                    ? "border-brand-700 text-ink-950"
                    : "border-transparent text-ink-700/60 hover:text-ink-950"
                }`}
              >
                {p.tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="relative mt-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-[0.62fr_0.95fr]"
            >
              <div className="flex flex-col justify-center p-8 sm:p-12 sm:pl-20">
                <p className="text-xs font-bold uppercase tracking-widest text-ink-700/50">
                  {panel.category}
                </p>
                <h3 className="mt-3 font-display text-3xl font-light leading-tight text-ink-950 sm:text-4xl">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-700/80 sm:text-base">
                  {service.body}
                </p>
                <Link
                  href={panel.href}
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold-300/70 px-6 py-3 text-sm font-bold text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  Learn more
                </Link>
              </div>

              <div className="relative min-h-[280px]">
                <Image src={panel.image} alt={panel.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            aria-label="Previous solution"
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg backdrop-blur transition-transform hover:scale-105 sm:flex"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            aria-label="Next solution"
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg backdrop-blur transition-transform hover:scale-105 sm:flex"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
