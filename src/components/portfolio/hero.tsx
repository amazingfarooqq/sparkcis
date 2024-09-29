"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Hero() {
  return (
    <>
      <div className="pb-10 ">
        
        <main className="container mx-auto px-4 pt-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bolder text-gray-900">
            Become a Market Leader <br /> In your Industry.
          </h2>
          {/* <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight bolder text-gray-900">
            Creating Websites That <br /> Make You Stand Out
          </h1> */}
          <p className="text-md md:text-xl text-gray-600 mb-12 xl:px-56">
            Experienced Web Developer, actively contributing to the tech community through open-source projects, content creation, public speaking, and mentorship.
          </p>
          <div className="flex justify-center space-x-4">
            {/* <Button size="xl" className="bg-primary  text-white t ">
              Work with me →
            </Button>
            <Button variant="outline" size="xl" className="bg-white hover:bg-gray-100 text-gray-900 hover:text-black ">
              Learn more ↓
            </Button> */}
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <a className="relative" href="#">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                <span className="fold-bold relative  h-full w-full rounded border-2 border-black bg-primary px-8 py-5 font-bold text-white transition duration-100 hover:bg-teal-500 hover:text-white text-xl flex items-center gap-2">
                  
                  Work with me  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>

                </span>
              </a>

              <a className="relative" href="#">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-"></span>
                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border- bg-white px-7 py-5 text-xl font-bold text-black transition duration-100 hover:bg-gray-100 hover:text-black">Learn more</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      <Component />

      <div className="h-[100px] md:h-[150px] lg:h-[400px] bg-gray-900  -mt-36 md:-mt-48 lg:-mt-96"></div>



    </>
  )
}




const images = [
  "/case-study1.png",
  "/case-study2.png",
  "/demo1.png",
  "/demo2.png",
  "/demo3.png",
]

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-10 flex items-center justify-center mx-2">

      <div className="relative w-full max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl ">

        <div className="absolute inset-0 bg-primary rounded-lg transform -rotate-2 scale-100 z-0  lg:block"></div>

        <div className="relative bg-gray-800 rounded-lg shadow-xl overflow-hidden z-10 rotate-1">
          <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="relative h-[300px]  md:h-[400px] lg:h-[600px]">
            {images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Case study ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}