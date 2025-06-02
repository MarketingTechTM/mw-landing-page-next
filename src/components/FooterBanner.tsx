import { CtaButton } from "@/components/ui/button";

export default function FooterBanner() {
  return (
   <div  className="flex items-center flex-col justify-center px-4  ">  
     <div
      className="relative border border-[#007182]
              shadow-2xl shadow-[#007182] mt-[90px] lg:mt-[143px] mb-[50px] lg:mb-[73px]
                rounded-[20px] overflow-hidden container max-w-7xl"
    >
      <div
        className="relative flex flex-col md:flex-row py-4 px-4 lg:px-10 gap-4 lg:py-6 justify-between items-center bg-[#181717]
                rounded-lg border border-transparent"
      >
        <span className="text-white font-extralight text-center text-sm md:text-lg lg:text-2xl">
          Let&apos;s Start your High Growth Journey Now
        </span>
        <div className="">
          <CtaButton
            title="Book a strategy Call"
            url="/book-a-call"
            size="h-10 sm:h-12"
            textSize="text-sm md:text-lg lg:text-xl"
            className="font-bold "
          />
        </div>
      </div>
    </div>

   </div>
  );
}
