import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Hero } from "@/components/hero";
import WorkWithUs from "@/components/work-with-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <WorkWithUs />
      <Testimonials />
    </>
  );
}
