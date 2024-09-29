import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    text: "Absolutely love this kit guys, you've done an incredible job and it's saved me countless hours in getting my V1 out Keep up the amazing work! ",
    name: "Joe Perkins",
    role: "Founder",
    company: "Landscape Ventures",
    commaColor: "orange",
    img: "",
  },
  {
    text: "I use almost daily - from quick copy-paste solutions for prototyping, to inspiration in my own designs. The prebuilt components allow for rapid prototyping, saving me hours in pixel perfect design time. Efficient, clean cut, and allround badass!",
    name: "Cas du Plessis",
    role: "Product guy and problem solver",
    commaColor: "purple",
  },
  {
    text: "I've been using to completely map out entire layouts, but also as a inspiration and as a building block. Taking the ready made designs and hacking them down into what works for me. Having a template and a building block has radically cut down my time to get to where I want with my layouts!",
    name: "Jonathan Fager",
    role: "IT Product Manager",
    company: "Homebrewer",
    commaColor: "blue",
  },
  {
    text: "When I bought Tailwind, I thought I would have to be a sort of beta tester given the pricepoint. However I kid you not it is FLAWLESS and so is their support. EVERYTHING you would ever want is in here and each component is crafted to the highest design-standard - including responsiveness.",
    name: "Linda MacDonald",
    role: "Founder",
    commaColor: "orange",
  },
];
export function Testimonials() {
  return (
    <>
      <section
        aria-label="A word from our users"
        className="relative h-full w-full py-32"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#23b5b5] to-[#a0d3d3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          className="placeholder2 absolute hidden h-full w-full dark:block"
          data-large="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="img-small2 loaded h-full w-full"
            alt="gradient image"
          />
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="loaded absolute inset-0 h-full max-h-full w-full"
            alt="gradient image"
          />
        </div>
        <h3 className="wordfromclient t-f-c relative z-20 bg-clip-text pb-1.5 text-center text-3xl font-extrabold leading-tight text-primary md:text-5xl md:leading-tight lg:leading-tight 2xl:text-5xl">
          Over 1000+ happy customers
        </h3>
        <div className="container relative z-20 mx-auto mt-16 grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-10 xl:mt-[82px] xl:grid-cols-4 2xl:px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonialSectionCard h-full rounded-2xl border-4 border-gray-500 border-opacity-20 px-4 py-6 dark:border-opacity-10 2xl:h-[482px] 2xl:p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <img
                      src={`https://tuk.dev/img/testimonials/${testimonial.commaColor}-comma.svg`}
                      alt="testimonial"
                    />
                    <p className="mt-6 text-base font-medium leading-7 text-gray-700 2xl:text-lg">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://tuk.dev/img/profile-pic/CasduPlesis.png"
                      alt="customer profile image"
                    />
                    <div className="ml-4">
                      <p className="text-base font-extrabold leading-4 text-gray-600">
                        {testimonial.name}
                      </p>
                      <p className="mt-2 text-sm font-light leading-none text-gray-600 dark:text-white">
                        <span>{testimonial.role}</span>
                        {testimonial.company ? ` - ${testimonial.company}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(10%+3rem)] aspect-[1155/678] w-[66.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#23b5b5] to-[#a0d3d3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>

      <section aria-label="Get started for free" className="bg-primary py-32">
        <h3 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
          Schedule a free{" "}
          <span className="">
            consultation <br /> with one{" "}
          </span>
          of our experts.
        </h3>
        <div className="mt-7 flex w-full flex-col items-center justify-center md:w-auto">
          <Link href="/contact">
            <Button
              className="h-auto bg-white px-10 py-3 text-xl text-black hover:bg-slate-200 hover:text-black"
              style={{ borderRadius: "10px" }}
            >
              Schedule now »
            </Button>
          </Link>
          <p className="mt-2 text-xs leading-4 text-white lg:mt-3 lg:text-base">
            Fix a free strategy call with our experts
          </p>
        </div>
      </section>
    </>
  );
}
