import { SVGLogo } from '@/svg/logo'
import Link from 'next/link'

export function Footer() {
  const footerLinks = [
    { id: 'f1', href: '/components', text: 'Components' },
    { id: 'f2', href: '/templates', text: 'Templates' },
    { id: 'f3', href: '/pricing', text: 'Pricing' },
    { id: 'f4', href: '/pricing#faq', text: 'FAQ' },
    { id: 'f5', href: '/docs', text: 'Documentation' },
    { id: 'f6', href: 'mailto:howdy@tuk.dev', text: 'Contact us' },
    { id: 'f7', href: '/blog', text: 'Blog' },
    { id: 'f8', href: '/changelog', text: 'Changelog' },
    { id: 'f9', href: '/terms-and-conditions#privacyPolicy', text: 'Privacy policy' },
    { id: 'f10', href: '/terms-and-conditions', text: 'Terms of service' },
    { id: 'f11', href: 'https://forms.gle/A2LoQ7AyxuG61UXm8', text: 'Become an Affiliate' },
  ]

  return (
    <footer id="footer" className="relative z-40 bg-black pt-24">
      <section className="border-t border-b border-gray-700 dark:border-gray-700 py-8">
        <div className="lg:mx-auto lg:container px-4 xl:px-12 2xl:px-4">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div className="w-full lg:w-1/2 px-6 lg:flex items-end justify-end">
                <ul>
                  {footerLinks.slice(0, 5).map((link) => (
                    <li key={link.id} id={link.id} className={link.id !== 'f1' ? 'mt-6' : ''}>
                      <Link href={link.href} className="text-sm md:text-base leading-none hover:text-brand dark:hover:text-brand text-gray-200 dark:text-gray-50">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6 lg:flex items-start justify-center">
                <ul>
                  {footerLinks.slice(5, 8).map((link) => (
                    <li key={link.id} id={link.id} className={link.id !== 'f6' ? 'mt-6' : ''}>
                      <Link href={link.href} className="text-sm md:text-base leading-none hover:text-brand dark:hover:text-brand text-gray-200 dark:text-gray-50">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex">
              <div className="w-full lg:w-1/2 px-6 flex flex-col lg:items-center justify-between">
                <ul>
                  {footerLinks.slice(8).map((link) => (
                    <li key={link.id} id={link.id} className={link.id !== 'f9' ? 'mt-6' : ''}>
                      <Link href={link.href} className="text-sm md:text-base leading-none hover:text-brand dark:hover:text-brand text-gray-200 dark:text-gray-50">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6 flex flex-col lg:items-start justify-between">
                <div>
                  <div className="flex items-start mb-6 w-36">
                    <a
                      href="https://github.com/AlphaSquadTech"
                      aria-label="github link"
                      className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
                    >
                      <svg
                        className="footer-icon feather feather-github"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/tailwinduikit"
                      aria-label="Twitter link"
                      className="pl-4 text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
                    >
                      <svg
                        className="footer-icon feather feather-twitter"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-48 sm:pb-40 md:pb-36 xl:pb-24 flex flex-col justify-center items-center dark:text-white">
        <Link href="/" aria-label="Home page">
          <SVGLogo />
        </Link>
        <p className="mt-6 text-sm md:text-base leading-none text-gray-900 dark:text-gray-50">
          2021 TUK. All Rights Reserved.
        </p>
      </section>
    </footer>
  )
}