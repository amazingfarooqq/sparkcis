import { Testimonials } from "@/components/portfolio/testimonials";
import { Hero } from "@/components/portfolio/hero";
import { NumbersSection } from "@/components/portfolio/numbers-section";
import { Header } from "@/components/portfolio/header";
import { Sectiona } from "@/components/portfolio/sectiona";
import { Whyme } from "@/components/portfolio/why-me";

export default function HomePage() {
  return (
    <div className=" ">
      <Header />
      <Hero />

      <NumbersSection />
      <Whyme />
      {/* <CaseStudies />
      <WorkWithUs /> */}
      <Testimonials />
      <Sectiona />



    </div>
  );
}
