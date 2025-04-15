"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0B0B0B] px-6 text-center text-white">
      {/* Illustration or Emoji */}
      <div className="text-[64px] mb-4">🚧</div>

      {/* Big Heading */}
      <h1 className="text-[36px] md:text-[48px] font-bold mb-2">
        Oops! Page not found.
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-[#B0B0B0] max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      {/* Action Button */}
      <Link
        href="/"
        className="flex items-center gap-2 bg-[#007182] hover:bg-[#2e5f67] text-black font-medium px-5 py-2 rounded-full transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        Go back home
      </Link>
    </div>
  );
}
