"use client";
import headerIcon from "@/public/vercel.svg";
// import { GridBackground } from "@/components/ui/GridBackground";
import { servicesData } from "./pageContent";
import Image from "next/image";
import { CtaButton } from "@/components/ui/button";

export default function OurServices() {
  return (
    <div className=" max-w-7xl mx-auto pl-10 pr-5 py-10 relative ">
      <div
        className="hidden md:block absolute top-[300px] right-0 w-[500px] h-[600px] 
      rounded-full bg-[#007182]/20 dark:bg-[#D9D9D9]/20 blur-[200px] shadow-lg shadow-[#D9D9D9/20] "
      ></div>

      <div
        className="hidden md:block absolute top-[900px] -left-24 w-[500px] h-[600px] 
      rounded-full bg-[#007182]/20 dark:bg-[#D9D9D9]/20 blur-[200px] shadow-lg shadow-[#D9D9D9/20]"
      ></div>

      <div
        className="hidden md:block absolute top-[1700px] right-0 w-[199px] h-[194px] 
      rounded-full bg-[#007182]/60 dark:bg-[#D9D9D9]/20  blur-[100px] shadow-lg shadow-[#D9D9D9/60]"
      ></div>

      {/* Header */}
      <h1
        style={{
          borderImageSource:
            "linear-gradient(90deg, #000000 0%, #FFFFFF 52.4%, #000000 100%)",
          borderImageSlice: 1,
        }}
        className="font-bold text-2xl md:text-4xl lg:text-5xl text-center text-gray-800 dark:text-[#A9A9A9] border-b-[1px] w-fit mx-auto pb-2"
      >
        Our Services
      </h1>

      {/* Section Loop */}
      {servicesData.sections.map((section, sectionIdx) => (
        <div
          key={sectionIdx}
          className="mt-20 flex flex-col md:flex-row gap-10"
        >
          {/* Left Column - Section Title */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <h2 className="text-gray-900 dark:text-white font-bold text-xl md:text-2xl text-center md:text-left whitespace-pre-line">
              {section.title}
            </h2>
          </div>

          {/* Right Column - Section Content */}
          <div className="md:w-3/4 flex flex-col gap-12">
            {section.items.map((item, itemIdx) => (
              <div key={itemIdx} className="flex gap-4 items-start">
                <div className="flex items-start gap-4">
                  <Image
                    src={headerIcon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="mt-1 object-contain"
                  />

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="text-[#007182] font-semibold text-base md:text-[20px]">
                      {item.title}
                    </h3>
                    <div className="space-y-2 text-xs font-normal md:text-lg text-black dark:text-[#BBBBBB]">
                      {item.points.map((point, i) => (
                        <p key={i} className="leading-relaxed">
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer banner */}

      <div className="relative border border-[#007182]
      shadow-2xl shadow-[#007182] mt-[90px] lg:mt-[143px] mb-[50px] lg:mb-[73px]
        rounded-[20px] overflow-hidden">
          
      <div className="relative flex justify-between items-center bg-[#181717]
       p-6 rounded-lg border border-transparent">
        <span className="text-white font-extralight text-[8px] sm:text-lg lg:text-3xl">
          Let&apos;s Start your High Growth Journey Now
        </span>
       <div className="">
                 <CtaButton
                   title="Book a strategy Call"
                   url="/book-a-call"
                   size=""
                   textSize="text-[7px] sm:text-lg"
                   className="font-bold "
                 />
               </div>
      </div>
    </div>
    </div>
  );
}
