import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="pb-10 ">

      <main className="container mx-auto px-4 pt-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bolder text-gray-900 px-20">
          Sparkcis provides <br /> expertise in different areas.
        </h2>
        {/* <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bolder text-gray-900">
            Creating Websites That <br /> Make You Stand Out
          </h1> */}
        <p className="text-md md:text-xl text-gray-600 mb-12 xl:px-56">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi placeat maxime nam dolores nemo dignissimos temporibus laborum culpa blanditiis amet? Veritatis repellendus omnis dignissimos necessitatibus odit molestias architecto ipsa eos!
        </p>
        <div className="flex justify-center space-x-4">


          <>
            {/* Card */}
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {/* {[
                { name: "Farooq", image: "/profile.png", description: "Farooq is a web developer" },
                { name: "Sarah", image: "/case-study2.png", description: "Sarah is a web developer" },
              ].map((item) => {
                return (
                  <div className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>

                    <div className="relative max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
                      <div className="rounded-t-lg h-32 overflow-hidden">
                        <img
                          className="object-cover object-top w-full"
                          src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                          alt="Mountain"
                        />
                      </div>
                      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img
                          className="object-cover object-center h-32"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                          alt="Woman looking front"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h2 className="font-semibold text-xl">Farooq dad </h2>
                        <p className="text-gray-500">Freelance Web Designer</p>
                      </div>
                      <div className="p-4 border-t mx-8 mt-2">
                        <button className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                          Check portfolio
                        </button>
                      </div>
                    </div>


                  </div>

                )
              }} */}

              {[{ name: "Farooq", image: "/profile.png", cover: "case-study1.png", description: "Farooq is a web developer" , link: "/farooqdad"}, 
              { name: "Hasnat", image: "/profile.png", cover: "case-study2.png", description: "Sarah is a web developer" , link: "/"},
              { name: "Hasnat", image: "/profile.png", cover: "case-study2.png", description: "Sarah is a web developer" , link: "/"},
              { name: "Hasnat", image: "/profile.png", cover: "case-study2.png", description: "Sarah is a web developer" , link: "/"},
              { name: "Hasnat", image: "/profile.png", cover: "case-study2.png", description: "Sarah is a web developer" , link: "/"},
              { name: "Hasnat", image: "/profile.png", cover: "case-study2.png", description: "Sarah is a web developer" , link: "/"},
              ].map(item => {
                return (
                  <div className="relative">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>

                    <div className="relative max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto  bg-white shadow-xl rounded-lg text-gray-900">
                      <div className="rounded-t-lg h-32 overflow-hidden">
                        <img
                          className="object-cover object-top w-full"
                          src={item.cover}
                          alt="Mountain"
                        />
                      </div>
                      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img
                          className="object-cover object-center h-32"
                          src={item.image}
                          alt="Woman looking front"
                        />
                      </div>
                      <div className="text-center mt-2">
                        <h2 className="font-semibold text-xl">{item.name}</h2>
                        <p className="text-gray-500">Freelance Web Designer</p>
                      </div>
                      <div className="p-4 border-t mx-8 mt-2 py-10">
                        <Link href={item.link} className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                          Check portfolio
                        </Link>
                      </div>
                    </div>


                  </div>
                );
              })}
            </div>
            {/* /Card */}
          </>
        </div>
      </main>
    </div>
  );
}
