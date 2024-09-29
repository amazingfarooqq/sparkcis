
export function CaseStudiesCard({category, title, desc, img}:{category:string, title:string, desc:string, img: string}) {
  return (
    <div className="overflow-hidden  py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">{category}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {desc}
              </p>
              {/* <button className="btn mt-5 text-lg">read more »</button> */}
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={img}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
