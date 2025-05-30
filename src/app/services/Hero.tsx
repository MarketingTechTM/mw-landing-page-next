"use client";
import heroImage from "@/public/services/hero_section.webp";
import { servicesHeroSection } from "./pageContent";
import { CtaButton } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative w-full h-fit pt-10 pb-10 md:pt-16  md:pb-20  bg-cover bg-center
       bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-[#121212CC]  z-0"></div>

        <div className="flex flex-col items-center gap-4 lg:gap-8 z-10">

          <div className="flex flex-col gap-2 lg:gap-4 px-1">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-black text-neutral-700
               dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
            >
              Accelerate Growth with Proven Marketing
              <span className=""> Strategies & Execution</span>
            </motion.h1>
            <p
              className=" text-black dark:text-white dark:opacity-80 
             text-base text-center lg:text-xl max-w-6xl px-2 mt-2"
            >
              {servicesHeroSection.subtitle}
            </p>
          </div>

          <div className="mt-10 mb-5 md:mb-10">
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
