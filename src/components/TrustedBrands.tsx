"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

export const TrustedBrands = ({
  brands,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  brands: { name: string; src: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const speedMap = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
      };
      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      if (scrollerContent.length > brands.length) return; // Prevent infinite duplication

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed, brands.length]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 lg:gap-48 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {brands.map((brand, idx) => (
          <li key={idx} className="shrink-0">
            <Image
              src={brand.src}
              alt={brand.name}
              width={150}
              height={75}
              className="object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Updated Trusted Brands Section
export default function TrustedBrandsSection() {
  const brands = [
    { name: "Sadhana Tablet", src: "/brand_logo/astro_sadhana_logo.png" },
    {name: "Black Lotus", src: "/brand_logo/black_lotus_logo.png"},
    { name: "Astro Sadhana", src: "/brand_logo/sadhana_tablet_logo.png" },
    { name: "AstroAI", src: "/brand_logo/astro_ai_logo.png" },
    { name: "Sadhana App", src: "/brand_logo/sadhana_logo.png" },
  ];

  return (
    <div className="flex justify-center flex-col items-center gap-6 w-full py-10 dark:bg-black bg-white">
      <h2 className="text-lg lg:text-4xl font-bold text-center text-black dark:text-white">
        Trusted by Industry-Leading Brands
      </h2>
      <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 text-xs lg:text-lg">
        Top brands trust Digital Wisdom to accelerate growth, boost engagement, and maximize revenue. Our data-driven 
        strategies and cutting-edge execution help businesses stay ahead in the digital landscape.
      </p>
      <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 text-sm lg:text-lg font-semibold">
        Join the brands that have unlocked their full potential with Digital Wisdom.
      </p>
      <TrustedBrands brands={brands} direction="left" speed="normal" />
    </div>
  );
}
