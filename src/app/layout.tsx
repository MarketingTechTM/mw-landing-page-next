import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import  { NavbarDemo } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    url: "marketing-wisdom-landing-page.vercel.app",
    type: "website",
    images: [
      {
        url: "marketing-wisdom-landing-page.vercel.app/logo.png",
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
    images: ["marketing-wisdom-landing-page.vercel.app/logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark:bg-black bg-slate-50`}>
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-neutral-700">
          <div className="container mx-auto">
            <NavbarDemo />
          </div>
        </div>
        {children}

      </body>
    </html>
  );
}
