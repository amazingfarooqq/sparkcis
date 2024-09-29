import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Hero } from "@/components/hero";
import WorkWithUs from "@/components/work-with-us";
import { NumbersSection } from "@/components/numbers-section";
import WebDevService from "@/components/web-dev-service";

export default function HomePage() {
  return (
    <div className="">
      <Hero />

      <NumbersSection />
      <WebDevService />
      <CaseStudies />
      <WorkWithUs />
      <Testimonials />
      

    </div>
  );
}
