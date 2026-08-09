"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, PhoneCall } from "lucide-react";
import { heroSlides, site } from "@/lib/site-data";

const SLIDE_MS = 6500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[index];

  return (
    <section id="top" className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden bg-ink-950">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className={`absolute inset-0 ${
              index % 2 === 0 ? "animate-[kenburns-in_9s_ease-out_forwards]" : "animate-[kenburns-out_9s_ease-out_forwards]"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={index === 0}
              className={`object-cover ${slide.focal}`}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 pt-32 lg:px-8 lg:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
              {slide.eyebrow}
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-paper-50 sm:text-5xl lg:text-6xl">
              {slide.heading}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper-100/85 sm:text-lg">
              {slide.body}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-bold text-paper-50 shadow-xl shadow-brand-900/40 transition-transform hover:scale-[1.03]"
          >
            Request a Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-paper-50/30 bg-paper-50/5 px-6 py-3.5 text-sm font-bold text-paper-50 backdrop-blur transition-colors hover:bg-paper-50/15"
          >
            <PhoneCall size={16} /> {site.phonePrimary}
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6">
          <div className="flex gap-2">
            {heroSlides.map((s, i) => (
              <button
                key={s.heading}
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold-400" : "w-3 bg-paper-50/30"
                }`}
              />
            ))}
          </div>
          <div className="hidden items-center gap-2 text-xs font-medium uppercase tracking-widest text-paper-50/50 sm:flex">
            <ChevronDown size={14} className="animate-bounce" />
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
