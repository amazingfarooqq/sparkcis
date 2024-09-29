import { CaseStudies } from "@/components/landingpage/case-studies";
import WorkWithUs from "@/components/landingpage/work-with-us";
import { NumbersSection } from "@/components/portfolio/numbers-section";
import { Hero } from "@/components/landingpage/hero";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Footer } from "@/components/landingpage/footer";
import { Header } from "@/components/landingpage/header";

export default function HomePage() {
  return (
    <div className="">
      <Header />
      <Hero />

      <NumbersSection />
      <CaseStudies />
      <WorkWithUs />
      <Testimonials />

      <Footer />
      

    </div>
  );
}