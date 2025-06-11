import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Toaster } from "react-hot-toast";


const inter = Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Marketing Wisdom | Data-Driven Digital Growth",
  description:
    "Accelerate your business growth with data-driven digital marketing. From performance marketing and growth hacking to high-impact brand storytelling, we maximize your ROI and scale revenue.",
  keywords: [
    "digital marketing",
    "performance marketing",
    "growth hacking",
    "demand generation",
    "SEO",
    "paid media",
    "branding",
    "content marketing",
    "Google Ads",
    "Facebook Ads",
    "LinkedIn Ads",
    "business growth",
    "lead generation",
  ],
  openGraph: {
    title: "Marketing Wisdom | Data-Driven Digital Growth",
    description:
      "Unlock the full potential of your business with our innovative marketing strategies. We offer demand generation, growth hacking, branding, and paid media execution to drive measurable results.",
    url: "https://marketing-wisdom-landing-page.vercel.app",
    type: "website",
    images: [
      {
        url: "https://marketing-wisdom-landing-page.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketing Wisdom - Digital Marketing Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Marketing Wisdom | Data-Driven Digital Growth",
    description:
      "Maximize ROI with our cutting-edge digital marketing strategies. Performance marketing, growth hacking, and demand generation for business success.",
    images: ["https://marketing-wisdom-landing-page.vercel.app/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} dark`}>
      <Head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={` dark:bg-black bg-slate-50`}>
      <Toaster />
        <div className="sticky top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80
         backdrop-blur-md shadow-md border-b border-neutral-700">
          <div className="container mx-auto z-50">
            <Navbar />
           
          </div>
        </div>
        <main>
        {children}
        </main>
        <div className="mx-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
