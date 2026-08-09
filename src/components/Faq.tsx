"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site-data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-50 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-700">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
            Common questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-ink-950/8 rounded-2xl border border-ink-950/8 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-display text-sm font-bold text-ink-950 sm:text-base">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-brand-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700 sm:px-6">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
