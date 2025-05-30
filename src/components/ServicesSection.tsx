import { HoverEffect } from "./ui/card-hover-effect";

const servicesSection = {
  title: "What We Offer",
  description:
    "We provide cutting-edge digital solutions to accelerate your business growth. From data-driven marketing to high-impact design, our services are tailored to maximize your ROI and brand visibility.",
  services: [
    {
      title: "Digital Marketing Strategy",
      description:
        "End-to-end digital marketing execution, covering demand generation, capture, and conversion to ensure maximum brand visibility and customer acquisition.",
    },
    {
      title: "Data-Driven Analytics",
      description:
        "Setting up analytics tools, tracking user behavior, and optimizing marketing efforts with precise attribution to drive performance.",
    },
    {
      title: "Content & Brand Messaging",
      description:
        "Creating compelling content, high-quality designs, and storytelling-driven videos to enhance brand presence and user engagement.",
    },
    {
      title: "Revenue Growth & Monetization",
      description:
        "Implementing high-impact marketing strategies to drive revenue growth and enhance business monetization.",
    },
    {
      title: "Performance Marketing",
      description:
        "Optimized digital advertising campaigns on Google Ads, Meta Ads, LinkedIn Ads, and more, ensuring high ROI and user acquisition.",
    },
    {
      title: "Growth Hacking",
      description:
        "Auditing paid and organic channels, analyzing data-driven insights, and identifying high-leverage opportunities to scale your business.",
    },
  ],
};

export function ServicesSection() {
  return (
    <>
      <div className="flex bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 justify-center flex-col items-center gap-6 w-full py-10 dark:bg-black bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black dark:text-white">
          {servicesSection.title}
        </h2>

        <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 text-xs md:text-lg px-1">
          {servicesSection.description}
        </p>

        <div className="container mx-auto px-8">
        <HoverEffect className="cursor-default" items={servicesSection.services} />
        </div>
      </div>
    </>
  );
}
