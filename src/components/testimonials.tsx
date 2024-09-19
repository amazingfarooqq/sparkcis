import { Button } from "@/components/ui/button"

export function Testimonials() {
  return (
    <>
      <section aria-label="A word from our users" className="w-full relative h-full pb-20 bg-black">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#23b5b5] to-[#a0d3d3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div
          className="hidden absolute dark:block placeholder2 h-full w-full"
          data-large="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
        >
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="img-small2 h-full w-full loaded"
            alt="gradient image"
          />
          <img
            src="https://tuk-cdn.s3.amazonaws.com/assets/gradients/faq_bg-gradient.png"
            className="loaded absolute inset-0 w-full h-full max-h-full"
            alt="gradient image"
          />
        </div>
        <h3 className="pb-1.5 pt-[154px] lg:leading-tight md:leading-tight relative z-20 2xl:text-5xl md:text-5xl text-3xl font-extrabold leading-tight text-center wordfromclient t-f-c bg-clip-text text-primary">
          Over 12000+ happy developers
        </h3>
        <div className="relative z-20 mx-auto container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 xl:mt-[82px] mt-16 2xl:px-4 lg:px-10 px-4">
          {[
            {
              text: "Absolutely love this kit guys, you've done an incredible job and it's saved me countless hours in getting my V1 out Keep up the amazing work!",
              name: "Joe Perkins",
              role: "Founder",
              company: "Landscape Ventures",
              commaColor: "orange",
            },
            {
              text: "I use tailwind ui kit almost daily - from quick copy-paste solutions for prototyping, to inspiration in my own designs. The prebuilt components allow for rapid prototyping, saving me hours in pixel perfect design time. Efficient, clean cut, and allround badass!",
              name: "Cas du Plessis",
              role: "Product guy and problem solver",
              commaColor: "purple",
            },
            {
              text: "I've been using tailwind ui kit to completely map out entire layouts, but also as a inspiration and as a building block. Taking the ready made designs and hacking them down into what works for me. Having a template and a building block has radically cut down my time to get to where I want with my layouts!",
              name: "Jonathan Fager",
              role: "IT Product Manager",
              company: "Homebrewer",
              commaColor: "blue",
            },
            {
              text: "When I bought tailwind ui kit Tailwind, I thought I would have to be a sort of beta tester given the pricepoint. However I kid you not it is FLAWLESS and so is their support. EVERYTHING you would ever want is in here and each component is crafted to the highest design-standard - including responsiveness.",
              name: "Linda MacDonald",
              role: "Founder",
              commaColor: "orange",
            },
          ].map((testimonial, index) => (
            <div key={index}>
              <div className="testimonialSectionCard 2xl:h-[482px] border-4 border-gray-500 dark:border-opacity-10 border-opacity-20 rounded-2xl 2xl:p-6 px-4 py-6 h-full">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <img
                      src={`https://tuk.dev/img/testimonials/${testimonial.commaColor}-comma.svg`}
                      alt="tailwind ui kit testimonial"
                    />
                    <p className="2xl:text-lg text-base font-medium leading-7 mt-6 text-gray-400">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="mt-10 flex items-center ">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://tuk.dev/img/profile-pic/CasduPlesis.png"
                      alt="tailwind ui kit customer profile image"
                    />
                    <div className="ml-4">
                      <p className="text-base font-extrabold leading-4 text-gray-400">
                        {testimonial.name}
                      </p>
                      <p className="text-sm font-light leading-none text-gray-300 dark:text-white mt-2">
                        <span>{testimonial.role}</span>{testimonial.company ? ` - ${testimonial.company}` : ''}
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#23b5b5] to-[#a0d3d3] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </section>
      <section aria-label="Get started for free"
        className="py-32 bg-black"
      >
        <h3 className="md:text-5xl text-3xl font-extrabold leading-tight text-center dark:text-white text-primary">
          We ran out of stuff to write, here are <br className="xl:block hidden" />{" "}
          250 components to get you started
        </h3>
        <div className="flex flex-col items-center justify-center mt-16 md:w-auto w-full">
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="text-xl px-40 py-3 h-auto " style={{ borderRadius: "10px" }}>Get Started for free</Button>
          </div>
          <p className="lg:text-base text-xs leading-4 lg:mt-3 mt-2 text-gray-400">
            Fix a free strategy call with our experts
          </p>
        </div>
      </section>
    </>
  )
}