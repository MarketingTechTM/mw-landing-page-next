import heroImage from "@/public/services/hero_section.webp";
import { servicesHeroSection } from "./pageContent";
import { CtaButton } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="flex justify-center items-center">
          <div
      className="relative w-full min-h-[70vh] lg:min-h-screen   bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-[#121212CC]  z-0"></div>

      {/* Content */}
      <div className="flex flex-col gap-0 z-10 text-center px-4 md:px-0 max-w-5xl ">
        <h1
          className="font-Inter text-[20px] leading-[100%] tracking-normal font-semibold
         text-center lg:font-extrabold lg:text-[48px] lg:mb-[42px] mb-4"
        >
          Accelerate Growth with Proven Marketing
          <span className=""> Strategies & Execution</span>
        </h1>
        <p className="text-sm md:text-base font-normal lg:text-[24px] lg:leading-[100%] text-[#CCCCCC] lg:font-medium
                 lg:mb-[84px] mb-10 ">
          {servicesHeroSection.subtitle}
        </p>
        <div className="mb-0 lg:mb-[127px]">
          <CtaButton
            title="Book a strategy Call"
            url="/book-a-call"
            size="h-16 w-52"
            textSize="text-lg"
            className="font-bold"
          />
        </div>
      </div>
    </div>
    </div>
  );
}
