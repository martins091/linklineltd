import type { Metadata } from "next";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Linkline Nigeria Limited is a licensed Public Access Mobile Radio operator delivering fully managed two-way radio networks across commercial Lagos.",
};

export default function AboutPage() {
  return (
    <div className="pt-14">
      <About />
      <WhyUs />
    </div>
  );
}
