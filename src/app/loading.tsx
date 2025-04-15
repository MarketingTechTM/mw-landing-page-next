import React from "react";

export default function Loading() {
  return (
   <div className="flex justify-center items-center min-h-screen">

<div className="relative w-32 mx-auto">
      <div className="absolute bottom-8 left-[50px] w-[30px] h-[30px] bg-teal-500 rounded-full animate-bounce"></div>
      <div
        className="absolute top-0 right-0 h-[7px] w-[45px] rounded-md 
        shadow-[0_5px_0_#f2f2f2,-35px_50px_0_#f2f2f2,-70px_95px_0_#f2f2f2] 
        animate-loading-step"
      ></div>
      <style>{`
        @keyframes loading-bounce {
          0% {
            transform: scale(1, 0.7);
          }
          40% {
            transform: scale(0.8, 1.2);
          }
          60% {
            transform: scale(1, 1);
          }
          100% {
            transform: translateY(-110px);
          }
        }

        @keyframes loading-step {
          0% {
            box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
                        0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2;
          }
          100% {
            box-shadow: 0 10px 0 #f2f2f2,
                        -35px 50px 0 #f2f2f2,
                        -70px 90px 0 #f2f2f2,
                        -70px 90px 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </div>
   </div>
  );
};

