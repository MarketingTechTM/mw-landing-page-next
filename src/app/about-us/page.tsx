"use client";

import Image from "next/image";
import aboutUsImg from "@/public/about-us.webp"; // Replace with your actual image path
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-[#121212] text-white w-full flex flex-col items-center">
      {/* Header */}
      <div className="w-full text-center  py-10 md:py-12 relative overflow-hidden">
        <div
          className=" absolute top-10 w-full h-full left-[50%] transform -translate-x-[50%]
            rounded-[16px] bg-[#00BFFF33] blur-lg opacity-70"
        ></div>
        <h1 className="text-4xl md:text-5xl font-bold">About US</h1>
      </div>

      {/* Quote Section */}
      <div className="container max-w-5xl px-4 py-10 flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl text-[#AFAFAF] md:text-4xl font-light">
          As they say,{" "}
          <span className="text-[#007182] font-semibold italic">
            “Success leaves clues.”
          </span>
        </h2>
        <p className="text-[#AFAFAF] text-lg md:text-xl">
          That&apos;s the heart of our mission.
        </p>
      </div>

      {/* Content Section */}
      <div className="container max-w-6xl px-4 py-6 flex flex-col md:flex-row
       gap-10 md:gap-8 items-stretch">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-stretch">
          <div
            className="relative w-[220px] h-[300px] md:w-[330px] md:h-auto
            shadow-md border-t-4 border-[#007182]"
          >
            {/* <div className="w-full h-full z-10 opacity-70 top-0 left-0 absolute bg-[#12121299]" /> */}
            <Image
              src={aboutUsImg}
              alt="About Us"
              fill
              className="object-cover rounded-sm "
              
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left
         text-lg md:text-xl text-[#CCCCCC]">
          <p>
            <span className="font-semibold text-white">
              At Marketing Wisdom,
            </span>{" "}
            every brand we partner with gets our relentless focus, proven
            strategies, and deep commitment to results. We don&apos;t just offer
            services — we deliver real, measurable growth.
          </p>

          <div>
            <h3 className="font-semibold text-white mb-4">Still unsure?</h3>{" "}
            
            <p className="text-[#C3C3C3]">
              Explore our {" "} 
              <span className="text-[#1a8393] underline hover:text-[#007182]">
                <Link href={"/customer-stories"}>
                Success Stories
                </Link>
                </span> and see the results for yourself.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white text-xl md:text-2xl mb-4">
              Who are we?
            </h3>
            <p className="text-[#C3C3C3]">
              We&apos;re a team of{" "}
              <span className="font-semibold text-white">Top 1% marketers</span>{" "}
              — battle-tested, data-driven, and obsessed with impact. We work
              with{" "}
              <span className="font-semibold text-white">selective brands</span>{" "}
              that are ready to scale, lead, and win.
            </p>
            <p className="mt-2">Are you one of them?</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="py-8 px-2 mb-10 md:mb-20">
        <Link
          href={"/book-a-call"}
          className="inline-flex text-base md:text-xl  py-4 text-center animate-shimmer items-center justify-center rounded-md
                 border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]
                  bg-[length:200%_100%] px-6 font-medium text-slate-300 
                  transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400
                 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Book your strategy call now and let&apos;s grow, wisely
        </Link>
      </div>
    </div>
  );
}
