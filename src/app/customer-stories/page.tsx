"use client";

import { GridBackground } from "@/components/ui/GridBackground";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";


const successStories = [
  {
    title: "250%",
    desc: "Increase in Revenue Growth",
    url: "/customer-stories/sadhanatablet",
    logo: "/brand_logo/sadhana_tab.svg",
  },
  {
    title: "90%",
    desc: "Conversion rate in lead gen campaign",
    url: "/customer-stories/astroai",
    logo: "/brand_logo/astro_ai_logo.png",
  },
  {
    title: "75%",
    desc: "Reduction in Customer Acquisition Cost (CAC)",
    url: "/customer-stories/sadhanaapp",
    logo: "/brand_logo/logos/6.png",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);
 

  return (
    <GridBackground>
      <section className="py-32 px-4 md:px-20 flex flex-col items-center text-white w-full">
        {/* Section Header */}
        <div className="text-center max-w-4xl mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-tight leading-tight">
            Success Stories with Marketing Wisdom
            
          </h2>
          <p className="mt-4 text-[#B0B0B0] text-base md:text-xl font-inter leading-relaxed">
            Explore real-world results from businesses that have leveraged Marketing Wisdom expertise for growth and transformation.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl px-2 md:px-0 overflow-x-auto md:overflow-visible"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-between bg-[#0A0A0ACC] rounded-2xl border border-[#2C2C2C] p-6 shadow-[0_0_20px_#2D2D2D] text-center min-w-[280px] md:min-w-0 hover:shadow-[0_0_30px_#393939] transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-12 mb-5">
                <img
                  src={story.logo}
                  alt="logo"
                 
                  className="h-full w-auto mx-auto object-contain"
                />
              </div>

              <h3 className="text-[32px] font-bold text-[#007182] mb-2">
                {story.title}
              </h3>
              <p className="text-sm md:text-base text-white leading-[140%] mb-6">
                {story.desc}
              </p>

              <Link
                href={story.url}
                className="bg-[#007182AA] hover:bg-[#007182] 
                transition-colors text-white text-base px-8 py-3 rounded-3xl font-semibold"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>

       
      </section>
    </GridBackground>
  );
}
