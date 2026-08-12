import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CircleCheck, Mail, Phone, Radio } from "lucide-react";
import { products, site } from "@/lib/site-data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${site.name}`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const specs = [
    { label: "Category", value: product.category },
    { label: "Power Output", value: product.power },
    { label: "Availability", value: "Sale · Lease · Rental" },
    { label: "Network", value: "Combinable with Linkline PAMR airtime" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <nav className="flex items-center gap-1.5 text-xs font-medium text-ink-700/70">
        <Link href="/" className="hover:text-brand-700">
          Home
        </Link>
        <ChevronRight size={13} />
        <Link href="/services" className="hover:text-brand-700">
          Services & Products
        </Link>
        <ChevronRight size={13} />
        <span className="text-ink-950">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-paper-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-contain p-10"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-brand-700 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-paper-50">
            <Radio size={12} /> {product.category}
          </span>
        </div>

        <div>
          <h1 className="font-display text-3xl font-extrabold leading-tight text-ink-950 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-base font-semibold text-gold-600">{product.power}</p>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-700">
            {product.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-800">
                <CircleCheck size={17} className="mt-0.5 shrink-0 text-brand-700" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-sm font-bold text-paper-50 shadow-lg shadow-brand-700/25 transition-transform hover:scale-[1.03]"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${site.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-6 py-3.5 text-sm font-bold text-ink-900 transition-colors hover:bg-ink-950/5"
            >
              <Phone size={16} /> {site.phonePrimary}
            </a>
            <a
              href={`mailto:${site.emailPrimary}?subject=${encodeURIComponent(
                `Enquiry: ${product.name}`
              )}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-6 py-3.5 text-sm font-bold text-ink-900 transition-colors hover:bg-ink-950/5"
            >
              <Mail size={16} /> Email enquiry
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-ink-950/8 bg-paper-100/60 p-6">
            {specs.map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] font-bold uppercase tracking-wide text-ink-700/60">
                  {s.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-ink-950">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-xl font-extrabold text-ink-950 sm:text-2xl">
            More {product.category.toLowerCase()} radios
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-2xl border border-ink-950/8 bg-white p-5 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-paper-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 22vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-tight text-ink-950">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-gold-600">{p.power}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
