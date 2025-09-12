import React from "react";
import { GridBackground } from "@/components/ui/GridBackground";
import bgImage from "@/public/book-a-call/bg_image.png";
import increasingGraphImage from "@/public/increasing_img.png";
import BookingForm from "./BookingForm";

export default function BookACall() {
  return (
    <GridBackground>
      <div className="flex min-h-[80vh]  items-center justify-center px-0 lg:px-6 py-5 lg:py-10">
        <div
          style={{ backgroundImage: `url(${bgImage.src})` }}
          className="max-w-7xl w-full grid md:grid-cols-2 gap-12 border border-gray-300 text-center
         dark:border-gray-700 px-8 py-10 lg:p-10 rounded-3xl shadow-2xl bg-cover bg-center bg-black/80 text-white
          transition-all duration-300"
        >
          <div
            style={{ backgroundImage: `url(${increasingGraphImage.src})` }}
            className="flex flex-col justify-start bg-center bg-cover"
          >
            <div
              className="text-[50px] font-semibold leading-[96%] tracking-[13%]
             lg:text-[80px] lg:font-bold lg:leading-tight text-white text-justify"
            >
              Scale Your <br /> Company Faster
            </div>

            <p className="text-[18px] md:text-[22px] text-gray-400 mt-5 lg:mt-9 leading-tight text-justify">
              Marketing Wisdom empowers SaaS and D2C e-commerce brands to
              attract qualified leads, maximize ROI, lower acquisition costs,
              and accelerate sustainable growth.
            </p>
            <p className="text-[18px] md:text-[22px] text-gray-400 mt-5 lg:mt-4 leading-tight text-justify">
              We collaborate only with brands that share our vision and are prepared to scale strategically.
            </p>

            <p className="mt-5 text-[#A1A1AA] text-sm text-justify">
              Fill out the form, and our expert will contact you to assess your
              brand&apos;s eligibility for partnership.
            </p>
          </div>

          {/* right section */}

          <BookingForm />
        </div>
      </div>
    </GridBackground>
  );
}
