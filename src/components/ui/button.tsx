"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ButtonProps {
  title: string;
  url?: string | null;
  onClick?: () => void;
  className?: string;
  size?: string; // Tailwind size classes for width and height
  textSize?: string; // Tailwind text size classes
}

export function CtaButton({
  title,
  url = null,
  onClick,
  className = "",
  size = "h-12 w-40", // Default size
  textSize = "text-sm", // Default text size
}: ButtonProps) {
  const router = useRouter();

  const buttonContent = (
    <button
      onClick={() => (onClick ? onClick() : url ? router.push(url) : null)}
      className={`relative inline-flex ${size} overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl ${textSize}`}
      >
        {title}
      </span>
    </button>
  );

  return url && !onClick ? <Link href={url}>{buttonContent}</Link> : buttonContent;
}
