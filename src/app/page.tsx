import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { Solutions } from "@/components/Solutions";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturedProducts />

      <PromoBanner
        heading="No license. No maintenance. No upfront capital."
        body="Just Plug & Play — outsource your two-way radio infrastructure to the operator who's run Lagos-wide PAMR since day one."
        ctaLabel="Read more"
        ctaHref="/services"
      />

      <Solutions />

      <PromoBanner
        heading="Already a Linkline customer?"
        body="Reach your account manager directly for support, invoices, or to add terminals to your existing network access plan."
        ctaLabel="Contact Support"
        ctaHref="/contact"
      />

      <FeatureGrid />

      <Contact />
    </>
  );
}
