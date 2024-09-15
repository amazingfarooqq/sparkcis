import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <Testimonials />
    </>
  );
}
