import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/site-data";

const featured = [products[0], products[2], products[4]];

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-paper-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-light tracking-tight text-ink-950 sm:text-4xl">
            Featured products
          </h2>
          <Link
            href="/services#products"
            className="inline-flex items-center gap-2 rounded-full bg-paper-100 px-5 py-2.5 text-sm font-bold text-ink-900 transition-colors hover:bg-paper-200"
          >
            See all products
          </Link>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.slug} href={`/products/${p.slug}`} className="group block">
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-700/50">
                {p.category} · {p.power}
              </p>
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink-950">
                {p.name}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-700/80">{p.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-700">
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
