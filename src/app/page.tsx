import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Materials from "@/components/home/Materials";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ArmeniaBenefits from "@/components/home/ArmeniaBenefits";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Materials />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <ArmeniaBenefits />
      <FAQ />
      <Contact />
    </>
  );
}
