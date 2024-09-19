import { CaseStudiesCard } from "./case-studies-card";
import { Button } from "./ui/button";

export function CaseStudies() {
  return (
    <section className="my-24">
      <div className="mx-auto mb-10 max-w-2xl sm:text-center">
        <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Succesful Work History
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We have worked on a wide range of projects and have a proven track record of delivering high-quality work. Here are some of our successful case studies.
        </p>
      </div>

      <CaseStudiesCard title="Winter Sell E-commerce Website" desc="
        Winter Sell is a e-commerce website that sells winter clothes. It is a fully functional e-commerce website with a user-friendly interface. It has a wide range of winter clothes for 
      " category="E Commerce Website"  img="/case-study1.png"/>
      <CaseStudiesCard title="SparkTalk Language Exchange Community" desc="
        SparkTalk Language Exchange Community is a language exchange platform that connects people from different countries to learn new languages. It is a fully functional platform with a user-friendly interface. It has a wide range of languages to learn and practice with native speakers.
      " category="Real-time Socket connections" img="/case-study2.png"/>
      <CaseStudiesCard  title="Expesh Learning Community" desc="
        Expesh Learning Community provides online courses for students and professionals. It is a fully functional platform with a user-friendly interface. It has a wide range of courses to choose from and learn. Expesh Learning Community is a one-stop solution for all your learning needs.
      " category="Learning Community"img="/case-study1.png"/>
      <CaseStudiesCard  title="Test" desc="test" category="E Commerce Website" img="/case-study2.png"/>

      <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="text-xl px-40 py-3 h-auto " style={{borderRadius: "10px"}}>Show more</Button>
          </div>
    </section>
  );
}
