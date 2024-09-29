"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "Why me", href: "/" },
  { name: "Work", href: "/" },
  { name: "Process", href: "#" },
  { name: "FAQs", href: "/" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="pb-">
      <header className=" inset-x-0 top-0 z-50 mx-auto max-w-7xl">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <Link href="/" className="flex flex-col">
            <div className="flex items-center gap-4 p-4">
              <Image src="/profile.png" alt="Profile" width={50} height={50} className="rounded-full border border-gray-400" />
              <div className="flex flex-col">
                <strong className="text-slate-900 font-semibold dark:text-slate-200">
                  Farooq Dad
                </strong>
                <div className="flex gap-2 items-center text-slate-500 font-medium dark:text-slate-400 -my-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  available for hire
                </div>
              </div>
            </div>
          </Link>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex justify-end space-x-8 text-gray-700">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="leading-6 text-gray-900 hover:text-primary text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-primary font-semibold text-lg">
                  Work with me
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 transition-opacity lg:hidden"
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 p-4">
                      <Image src="/profile.png" alt="Profile" width={50} height={50} className="rounded-full border border-gray-400" />
                      <div className="flex flex-col">
                        <strong className="text-slate-900 font-semibold dark:text-slate-200">
                          Farooq Dad
                        </strong>
                        <div className="flex gap-2 items-center text-slate-500 font-medium dark:text-slate-400 -my-1">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          available for hire
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: navigation.length * 0.1 }}
                      >
                        <Link
                          href="/"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          <div className="flex items-center gap-2 text-primary">
                            Work with me
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </section>
  )
}