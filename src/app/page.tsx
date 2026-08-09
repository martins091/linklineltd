import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { About } from "@/components/About";
import { ServicesScroll } from "@/components/ServicesScroll";
import { Products } from "@/components/Products";
import { Industries } from "@/components/Industries";
import { Coverage } from "@/components/Coverage";
import { WhyUs } from "@/components/WhyUs";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="lg:pl-72 lg:pt-[118px]">
        <main className="flex-1">
          <Hero />
          <TrustMarquee />
          <About />
          <ServicesScroll />
          <Products />
          <Industries />
          <Coverage />
          <WhyUs />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
