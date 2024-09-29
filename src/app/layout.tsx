import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/landingpage/footer";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { QueryClientProvider } from "@/providers/query-client-provider";
import Loading from "@/components/Loading";

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
  title: 'Farooq Dad - Web Developer',
  description: "Experienced Web Developer, actively contributing to the tech community through open-source projects, content creation, public speaking, and mentorship.",
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcuticon" href="/profile.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-pink-100 via-white to-pink-100`}>
        <QueryClientProvider>
          {/* <Loading /> */}
          {children}
          {/* <Footer /> */}
        </QueryClientProvider>
      </body>
    </html>
  );
}
