import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProvider } from "@/providers/query-client-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "SparkCIS - Website and Software Development Agency",
  description: "SparkCIS offers professional website services, including custom websites and responsive designs. Contact us for a free consultation.",
  keywords: "web development, software development, MERN stack, WordPress, Next.js, eCommerce, custom platforms, digital solutions",
  authors: [{ name: "SparkCIS Team" }],
  creator: "SparkCIS",
  publisher: "SparkCIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sparkcis.com/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SparkCIS - Innovative Web and Software Solutions",
    description: "Elevate your online presence with SparkCIS. We create powerful, custom web solutions using cutting-edge technologies to drive your business growth.",
    url: '/',
    siteName: 'SparkCIS',
    images: [
      {
        url: '/slogo.png',
        width: 1200,
        height: 630,
        alt: 'SparkCIS - Web and Software Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SparkCIS - Transforming Ideas into Digital Reality",
    description: "Expert web development and software solutions tailored for your business success. Discover the SparkCIS advantage today!",
    creator: '@sparkcis',
    images: ['/slogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // icons: {
  //   icon: '/slogo.png',
  //   shortcut: '/slogo.png',
//   apple: '/slogo.png',
  // },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // verification: {
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
