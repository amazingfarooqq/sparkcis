import { Testimonials } from "@/components/testimonials";
import { CaseStudies } from "@/components/case-studies";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <CaseStudies />
      <Testimonials />
    </>
  );
}
