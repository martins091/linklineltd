"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { industries, industriesExtended } from "@/lib/site-data";

export function Industries() {
  const [open, setOpen] = useState(false);

  return (
    <section id="industries" className="bg-paper-100 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">
            Industries
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
            Built for Lagos&rsquo;s busiest operations
          </h2>
          <p className="mt-4 text-ink-700">
            From offshore platforms to airside ground crews, if your team moves and needs to
            stay in sync, there&rsquo;s a Linkline channel for it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-ink-900 sm:aspect-[4/3]"
            >
              <Image
                src={ind.image}
                alt={ind.name}
                fill
                className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-90"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <h3 className="font-display text-sm font-bold text-paper-50 sm:text-base">
                  {ind.name}
                </h3>
                <p className="mt-1 hidden text-xs leading-snug text-paper-50/70 sm:block">
                  {ind.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-2xl border border-ink-950/10 bg-paper-50 px-5 py-4 text-left transition-colors hover:border-brand-700/30 sm:w-auto sm:min-w-[420px]"
          >
            <span className="font-display text-sm font-bold text-ink-950">
              +{industriesExtended.length} more industries we serve
            </span>
            <ChevronDown
              size={18}
              className={`shrink-0 text-brand-700 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          <div
            className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0">
              <div className="flex flex-wrap gap-2">
                {industriesExtended.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink-950/10 bg-paper-50 px-3.5 py-2 text-xs font-semibold text-ink-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
