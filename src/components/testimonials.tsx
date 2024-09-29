import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    text: "SparkCIS truly transformed our restaurant’s online presence. We needed a simple, elegant website to showcase our menu and allow online reservations. The team was fast, efficient, and their design was spot on. We've seen a 40% increase in reservations since launching the site! SparkCIS knows how to create functional yet beautiful websites that deliver results ",
    name: "Ahmed Khan",
    role: "Founder",
    company: "Landscape Ventures",
    commaColor: "orange",
    img: "",
  },
  {
    text: "Working with SparkCIS on our e-commerce website was a game changer. From seamless product pages to secure payment gateways, they delivered a platform that’s easy to use for both us and our customers. Our sales have doubled since we launched, and we couldn't be happier. Their team really understands how to build a website that drives conversions",
    name: "Fatima Iqbal",
    role: "Product guy and problem solver",
    commaColor: "purple",
  },
  {
    text: "We approached SparkCIS to create a website that could showcase our clinic's services, doctor profiles, and make it easy for patients to book appointments. The team was amazing—they understood the healthcare industry and delivered a professional, secure website that’s easy to navigate. We’ve received a lot of positive feedback from our patients and now have a reliable digital presence.",
    name: "Dr. Sameer Malik",
    role: "IT Product Manager",
    company: "Homebrewer",
    commaColor: "blue",
  },
  {
    text: "We wanted a website that could act as an online portfolio for our construction projects and allow potential clients to reach out easily. SparkCIS built exactly what we needed, with an impressive design that highlighted our work. The attention to detail was fantastic. We’ve gained several new clients who found us through our new website. It’s been a big success",
    name: " Ali Saeed",
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
        {/* <div
          className="placeholder2 absolute hidden h-full w-full dark:block"
          data-large="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
        >
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="img-small2 loaded h-full w-full"
            alt="gradient image"
            width={30}
            height={30}
          />
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="loaded absolute inset-0 h-full max-h-full w-full"
            alt="gradient image"
            width={30}
            height={30}
          />
        </div> */}
        <h3 className="wordfromclient t-f-c relative z-20 bg-clip-text pb-1.5 text-center text-3xl font-extrabold leading-tight text-primary md:text-5xl md:leading-tight lg:leading-tight 2xl:text-5xl">
          Over 1000+ happy customers
        </h3>
        <div className="container relative z-20 mx-auto mt-16 grid gap-8 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-10 xl:mt-[82px] xl:grid-cols-4 2xl:px-4">
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className=" h-full rounded-2xl border-4 border-gray-500 border-opacity-20 px-4 py-6 dark:border-opacity-10 2xl:p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <Image
                      src={`https://tuk.dev/img/testimonials/${testimonial.commaColor}-comma.svg`}
                      alt="testimonial"
                      width={30}
                      height={30}
                    />
                    <p className="mt-6 text-base font-medium leading-7 text-gray-700 2xl:text-lg">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center">
                    {/* <img
                      className="h-10 w-10 rounded-full"
                      src="https://tuk.dev/img/profile-pic/CasduPlesis.png"
                      alt="customer profile image"
                    /> */}
                    <div className="ml-4">
                      <p className="text-base font-extrabold leading-4 text-gray-600">
                        {testimonial.name}
                      </p>
                      <p className="mt-2 text-sm font-light leading-none text-gray-600 dark:text-white">
                        {/* <span>{testimonial.role}</span> */}
                        {/* {testimonial.company ? ` - ${testimonial.company}` : ""} */}
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

      <div className="py-40 bg-gray-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Schedule Free 30 <br /> minute Strategy Call <br /> with one of our expert.
            </h2>
            {/* <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Take the first step towards a brighter future and supercharge your business with cutting-edge technologies,
              expert guidance, and unparalleled support.
            </p> */}
            <Link href="/contact">
              <button className="bg-primary mt-3 text-white hover:bg-teal-500  font-bold py-4 px-10 rounded-full text-3xl transition duration-300">
                Schedule now »
              </button>

            </Link>
            <p className="mt-2 text-xs leading-4 text-white lg:mt-3 lg:text-base">
            Fix a free strategy call with our experts
          </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Image
              src="/case-study1.png"
              alt="Team working in an office"
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Image
              src="/case-study2.png"
              alt="People collaborating on a project"
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Image
              src="/cover1.avif"
              alt="Developers coding together"
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
