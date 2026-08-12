import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with a Linkline communication representative and get a quotation built around your team size, coverage area and budget.",
};

export default function ContactPage() {
  return (
    <>
      <Contact />

      <section className="bg-ink-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-2xl border border-paper-50/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Send us a message
            </p>
            <h2 className="mt-2 font-display text-xl font-extrabold text-paper-50 sm:text-2xl">
              Can&rsquo;t call right now? Write to us.
            </h2>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
