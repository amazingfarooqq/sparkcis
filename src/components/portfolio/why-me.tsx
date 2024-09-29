"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { LucideQuote, LucideTextQuote, MessageSquareQuote, Quote, QuoteIcon, TextQuote } from 'lucide-react';



export const Whyme = () => {

    return (
        <>
            <div className=" bg-gray-900">
                <main className="container mx-auto px-4 relative w-full max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
                    <div className='text-primary font-semibold mb-2'>WHY ME</div>
                    <h2 className="text-4xl lg:text-5xl font-bold pb-6 leading-tight bolder text-white">
                        Results driven design,
                        <br /> with a personal touch
                    </h2>

                    <div className='my-4 '>
                        <ul className="flex space-x-3 text-white py-4">
                            {[
                                { title: "Custom deisgn 1", link: "wm1" },
                                { title: "Custom deisgn 2", link: "wm2" },
                                { title: "Custom deisgn 3", link: "wm3" },
                                { title: "Custom deisgn 4", link: "wm4" },
                                { title: "Custom deisgn 5", link: "wm5" },
                            ].map(item => {
                                return (
                                    <a href={`#${item.link}`} className="relative">
                                        <span className="absolute top-0 left-0 mt-0.5 ml-0.5 h-full w-full rounded bg-gray-500"></span>
                                        <span className="fold-bold relative  h-full w-full rounded border-2 border-black bg-primary hover:bg-gray-500 px-4 py-2 font-bold text-white transition duration-100 hover:bg-black-500 hover:text-white text-sm flex items-center gap-2">
                                            {item.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </ul>
                    </div>
                </main>

                <main className="container mx-auto px-4 pb-20 relative w-full max-w-xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
                    {[
                        "/case-study1.png",
                        "/case-study2.png",
                        "/demo1.png",
                        "/demo2.png",
                        "/demo3.png",
                    ].map((item, index) => {
                        return (
                            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-32" id={`wm${index+1}`}>
                                <div>
                                    <div className='text-primary font-semibold mb-2'>CUSTOM DESIGN {index+1}</div>
                                    <h2 className="text-3xl lg:text-4xl font-bold pb-6 leading-tight bolder text-white">
                                        {index+1} Results driven design,
                                        <br /> with a personal touch
                                    </h2>
                                    <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem animi provident repellendus quibusdam, hic sunt nam harum tenetur eaque enim eum porro officia vero quas eius optio rerum corrupti at?</p>
                                </div>
                                <div className='items-center'>
                                    <ImgComponent img={item} />
                                </div>
                            </div>

                        )
                    })}
                </main>


                <main className="container mx-auto px-4 pt-16 text-center max-w-7xl">
                    <LucideQuote className='text-white  mx-auto ' />
                    <h2 className="text-4xl md:text-5xl lg:text-7xl pb-10 font-bold mb-6 leading-tight bolder text-white">
                        I have had the best Experience of my life building a website with Farooq dad.
                    </h2>

                    <div className="flex flex-col mx-auto items-center pb-20 ">
                        <Image src="/profile.png" alt="Profile" width={80} height={80} className="rounded-full border border-gray-400" />
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex flex-col text-start">
                                <strong className="text-white font-semibold text-2xl dark:text-slate-200">
                                    Farooq Dad
                                </strong>
                            </div>
                        </div>
                    </div>
                </main>

            </div>


        </>
    );
};

export default function ImgComponent({ img }: { img: string }) {

    return (
        <div className="py-10 flex items-center justify-center mx-2">

            <div className="relative w-full lg:max-w-5xl xl:max-w-7xl ">

                <div className="absolute inset-0 bg-gray-500 rounded-lg transform -rotate-2 scale-100 z-0  lg:block"></div>

                <div className="relative bg-gray-800 rounded-lg shadow-xl border-[2px] border-gray-600 overflow-hidden z-10 rotate-2">
                    <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="relative h-[300px]">
                        <Image
                            src={img}
                            alt={`Case study image`}
                            fill
                            style={{ objectFit: 'cover' }}
                            className={`absolute inset-0 transition-opacity duration-1000`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}