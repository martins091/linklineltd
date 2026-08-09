"use client";

import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";

export function ServicesScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(services.length - 1) * 100}%`]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(services.length - 1, Math.floor(v * services.length)));
  });

  return (
    <section
      id="services"
      ref={targetRef}
      className="relative bg-ink-950"
      style={{ height: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between px-5 pt-28 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              What We Do
            </p>
            <h2 className="mt-2 max-w-xl font-display text-3xl font-extrabold leading-tight text-paper-50 sm:text-4xl">
              Everything you need to get your team on channel
            </h2>
          </div>
          <div className="hidden shrink-0 items-baseline gap-1 font-display sm:flex">
            <span className="text-2xl font-extrabold text-gold-400">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold text-paper-50/40">
              /{String(services.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div style={{ x }} className="flex h-full items-center will-change-transform">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="relative flex h-full w-full shrink-0 items-center px-5 lg:px-8"
              >
                <span className="pointer-events-none absolute -top-6 right-4 select-none font-display text-[13rem] font-black leading-none text-paper-50/[0.03] sm:right-12 sm:text-[18rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                      {s.kicker}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-paper-50 sm:text-3xl lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-100/70 sm:text-base">
                      {s.body}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                    {s.points.map((p) => (
                      <div
                        key={p}
                        className="flex items-start gap-2.5 rounded-xl border border-paper-50/10 bg-paper-50/[0.04] p-3.5 backdrop-blur-sm"
                      >
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-400" />
                        <span className="text-sm leading-snug text-paper-50/85">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 lg:px-8">
          <div className="flex items-center gap-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="h-1 flex-1 overflow-hidden rounded-full bg-paper-50/10"
              >
                <div
                  className="h-full bg-gold-400 transition-all duration-300"
                  style={{ width: i < active ? "100%" : i === active ? "50%" : "0%" }}
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] font-semibold uppercase tracking-widest text-paper-50/35">
            Keep scrolling
          </p>
        </div>
      </div>
    </section>
  );
}
