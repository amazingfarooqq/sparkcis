import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Hero } from "@/components/hero";
import WorkWithUs from "@/components/work-with-us";

export default function HomePage() {
  return (
    <div className="">
      <Hero />

      <div className="h-[200px] bg-[#21b7b7]  mb-10"></div>
      <CaseStudies />
      <WorkWithUs />
      <Testimonials />
    </div>
  );
}
