import type { Metadata } from "next";
import { Services } from "@/components/Services";
import { Products } from "@/components/Products";

export const metadata: Metadata = {
  title: "Services & Products",
  description:
    "Fully managed two-way radio network access plus handheld, mobile and base-station radio sales, lease and rental across commercial Lagos.",
};

export default function ServicesPage() {
  return (
    <>
      <h1 className="sr-only">Services & Products</h1>
      <Services />
      <Products />
    </>
  );
}
