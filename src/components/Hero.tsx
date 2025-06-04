"use client";
import { CtaButton } from "./ui/button";
import { HeroHighlight } from "./ui/hero-highlight";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="flex flex-col h-fit items-center justify-center bg-gray-800 ">
      <HeroHighlight className="flex flex-col justify-between">
        <div className="flex  flex-col items-center gap-4">
          <div className="flex flex-col gap-1 px-1">
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
               dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              Maximize Your Marketing ROI, Skyrocket Revenue, and Achieve High
              Growth
            </motion.h1>
            <div
              className="text-black dark:text-white dark:opacity-80 
             text-base text-center lg:text-xl max-w-6xl px-2 mt-2"
            >
              We help B2C SaaS and e-commerce brands with everything from paid
              ads to social media, digital analytics to conversion rate
              optimization, go-to-market strategy to growth hacking, and content
              strategy to brand storytelling. Our cutting-edge digital marketing
              solutions deliver measurable results and drive sustainable growth.
            </div>
          </div>
        </div>
        <div className="mt-10 mb-5 md:mb-10">
          <CtaButton
            title="Book a strategy Call"
            url="/book-a-call"
            size="h-16 w-auto"
            textSize="text-lg lg:text-xl"
            className="font-bold"
          />
        </div>
      </HeroHighlight>
    </div>
  );
}
