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
  title: "SparkCIS - Expert Web Development & Full-Scale eCommerce Solutions",
  description:
    "SparkCIS offers cutting-edge web development services using MERN, WordPress, and Next.js. We specialize in building custom eCommerce platforms tailored to your business needs, driving growth and success in the digital world.",
};

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
