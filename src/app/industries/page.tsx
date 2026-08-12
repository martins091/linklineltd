import type { Metadata } from "next";
import { Industries } from "@/components/Industries";
import { Coverage } from "@/components/Coverage";

export const metadata: Metadata = {
  title: "Industries & Coverage",
  description:
    "See which industries rely on Linkline's Public Access Mobile Radio network, and the six corridors of coverage across greater commercial Lagos.",
};

export default function IndustriesPage() {
  return (
    <>
      <h1 className="sr-only">Industries & Coverage</h1>
      <Industries />
      <Coverage />
    </>
  );
}
