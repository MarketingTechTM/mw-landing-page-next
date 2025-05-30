import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Marketing Wisdom – Full-Funnel Digital Growth",
  description:
    "Explore our services: demand generation, growth hacking, performance marketing, and branding execution. Boost your business with data-driven marketing.",
  keywords: [
    "digital marketing services",
    "performance marketing",
    "growth hacking services",
    "SEO and paid media",
    "demand generation",
    "brand storytelling",
    "Google Ads experts",
    "LinkedIn Ads",
    "Facebook marketing",
    "business revenue growth",
  ],
  openGraph: {
    title: "Services | Marketing Wisdom",
    description:
      "Unlock the full potential of your business with our full-funnel marketing services: strategy, execution, and revenue growth.",
    url: "https://www.marketingwisdom.in/services",
    type: "website",
    images: [
      {
        url: "https://www.marketingwisdom.in/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketing Wisdom - Digital Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Services | Marketing Wisdom",
    description:
      "Explore data-driven marketing services: growth hacking, paid media, content marketing, and strategy execution.",
    images: ["https://www.marketingwisdom.in/logo.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` bg-slate-50 dark:bg-black`}>  
      <main className="">{children}</main> 
    </div>
  );
}
