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
  title: {
    default: 'SparkCIS - Expert Web Development & Full-Scale eCommerce Solutions',
    template: '%s | SparkCIS'
  },
  description: 'SparkCIS offers cutting-edge web development services using MERN, WordPress, and Next.js. We specialize in building custom eCommerce platforms tailored to your business needs, driving growth and success in the digital world.',
  keywords: ['web development', 'eCommerce development', 'MERN stack', 'WordPress', 'Next.js', 'custom websites', 'online stores', 'SparkCIS'],
  authors: [{ name: 'SparkCIS Team' }],
  creator: 'SparkCIS',
  publisher: 'SparkCIS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'SparkCIS - Building Scalable Web & eCommerce Platforms',
    description: 'From custom web development to eCommerce solutions, SparkCIS helps businesses scale in the digital marketplace using technologies like MERN, WordPress, and Next.js.',
    type: 'website',
    url: 'https://www.sparkcis.com',
    images: [
      {
        url: 'https://www.sparkcis.com/images/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'SparkCIS Web Development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkCIS - Expert Web & eCommerce Development',
    description: 'Build a future-proof eCommerce platform with SparkCIS. Specializing in MERN, WordPress, and Next.js, we bring your business to life online.',
    // image: 'https://www.sparkcis.com/images/twitter-card.jpg',
    site: '@sparkcis'
  },
  robots: {
    index: true,
    follow: true
  },
  // canonical: 'https://www.sparkcis.com',
  // charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryClientProvider>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
