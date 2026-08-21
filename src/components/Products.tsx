import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Radio } from "lucide-react";
import { products } from "@/lib/site-data";

export function Products() {
  return (
    <section id="products" className="bg-ink-950 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
              Equipment
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-paper-50 sm:text-4xl">
              Sales, lease & rental — handheld to base station
            </h2>
          </div>
          <p className="max-w-sm text-sm text-paper-50/60">
            A wide range of manufacturers, buyout options on leased terminals, and scrambler
            options for secure channels.
          </p>
        </div>

        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:mx-0 lg:grid-cols-3 lg:gap-6 lg:px-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden">
          {products.map((p) => (
            <Link
              key={p.name}
              href={`/products/${p.slug}`}
              className="group w-[300px] shrink-0 snap-start rounded-2xl bg-paper-50 p-5 transition-transform duration-300 hover:-translate-y-1.5 sm:w-auto"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 45vw, 24vw"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-brand-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-paper-50">
                  <Radio size={12} /> {p.category}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink-950">
                {p.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold-600">{p.power}</p>
              <ul className="mt-3 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="text-[13px] leading-snug text-ink-700">
                    · {f}
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700">
                View details
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
