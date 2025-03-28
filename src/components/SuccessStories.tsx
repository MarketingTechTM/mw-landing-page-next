"use client";
import { GridBackground } from "./ui/GridBackground";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";

const successStories = [
  {
    title: "Increased Conversion by 150%",
    desc: "Helping a SaaS company optimize their marketing funnel for better conversions.",
  },
  {
    title: "3x ROI on Ad Spend",
    desc: "Optimized ad campaigns driving better returns for an e-commerce brand.",
  },
  {
    title: "Lead Generation Breakthrough",
    desc: "B2B strategies that generated highly qualified leads and boosted revenue.",
  },
  {
    title: "Scaling to 7-Figure Revenue",
    desc: "Transforming a startup into a multi-million dollar enterprise with data-driven growth strategies.",
  },
  {
    title: "Scaling to 7-Figure Revenue",
    desc: "Transforming a startup into a multi-million dollar enterprise with data-driven growth strategies.",
  },
  {
    title: "Scaling to 7-Figure Revenue",
    desc: "Transforming a startup into a multi-million dollar enterprise with data-driven growth strategies.",
  },
];

export default function SuccessStories() {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <GridBackground>
      <section className="py-16 px-6 md:px-16 relative">
        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-bold text-center text-white tracking-wide">
          Success Stories
        </h2>

        {/* Success Stories Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide px-4 md:px-0 mt-10 snap-x snap-mandatory"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="w-80 flex-shrink-0  flex flex-col items-center justify-center rounded-xl p-6 shadow-xl transition-all duration-300 snap-center bg-gradient-to-b from-[#1A1A2E] to-[#16213E] border border-[#2E2E48] hover:scale-105 hover:border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="h-44 w-full bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-lg font-medium text-gray-400">
                📈 {/* Use an icon here for a premium look */}
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 text-xl font-semibold text-white">{story.title}</h3>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{story.desc}</p>

              {/* Read Case Study Link */}
              <Link
               href={'/'}
               className="text-blue-400 no-underline text-xl font-semibold mt-4 flex transition-all hover:text-blue-300 hover:underline items-center gap-2"
               >
                  Read More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="h-1 bg-blue-500 mt-6 w-full rounded-lg"
          style={{ scaleX: scrollXProgress }}
        />

        {/* View All Button */}
        <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-gray-500 rounded-lg text-white bg-transparent hover:bg-blue-500 transition-all duration-300 shadow-md text-xl">
            View all success stories →
          </button>
        </div>
      </section>
    </GridBackground>
  );
}
