"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import amazonIcon from "@/public/brand_logo/amazon_icon.svg";

// --------------------
// Types
// --------------------
type Book = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  amazonIndUrl: string;
  amazonUsdUrl: string;
};

type ApiResponse = {
  success: boolean;
  data: Book[];
  message?: string;
};

// --------------------
// Shimmer Loader Card
// --------------------
const ShimmerCard = () => (
  <div
    className="flex bg-neutral-800 text-white rounded-xl shadow-md p-4 gap-4 w-full animate-pulse"
    style={{ width: "1000px", height: "200px" }}
  >
    <div className="w-28 h-40 bg-neutral-700 rounded-md" />
    <div className="flex flex-col justify-between flex-1 space-y-2">
      <div className="space-y-2">
        <div className="h-5 w-2/3 bg-neutral-700 rounded" />
        <div className="h-4 w-1/2 bg-neutral-700 rounded" />
        <div className="h-4 w-full bg-neutral-700 rounded" />
        <div className="h-4 w-5/6 bg-neutral-700 rounded" />
      </div>
      <div className="flex gap-2 mt-4">
        <div className="h-8 w-28 bg-neutral-700 rounded-full" />
        <div className="h-8 w-28 bg-neutral-700 rounded-full" />
      </div>
    </div>
  </div>
);

// --------------------
// Book Card Component
// --------------------

const BookCard = ({
  title,
  subtitle,
  description,
  imageUrl,
  amazonIndUrl,
  amazonUsdUrl,
}: Book) => {
  return (
    <div
      className="flex bg-[#1E1E1E] text-white rounded-xl shadow-custom px-5 
      md:py-4 py-7 gap-7 md:gap-10 w-full hover:shadow-blue-500/50 transition-shadow duration-300
      flex-col items-center md:items-start md:flex-row
      
      "
    >
      <div className="w-28 h-40 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          className="w-28 h-40 object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col items-center md:items-start gap-2 md:gap-5">
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-xs md:text-base text-[#AAAAAA] font-medium">
                {subtitle}
              </h3>
            )}
          </div>

          <p className="text-xs md:text-sm font-medium text-center md:text-start  text-[#CCCCCC]">
            <span className="line-clamp-3"> {description}</span>
            <span>
              <Link
                href={`/books/${title}`}
                className=" text-[#00BFFF] hover:underline"
              >
                Read More
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs md:text-sm">
        <Link
          href={amazonUsdUrl}
          className="bg-[#07516A] text-white px-8 py-2  rounded-[20px]
            transition flex gap-1 items-center"
        >
          <span color="#000">
            <Image src={amazonIcon} alt="ama_icon" width={10} height={10} />
          </span>
          <span>Amazon (USD)</span>
        </Link>

        <Link
          href={amazonIndUrl}
          className="bg-[#D9D9D9] text-black px-8 py-2 rounded-[20px]
           hover:bg-gray-400 transition flex gap-1 items-center"
        >
          <span color="#000">
            <Image src={amazonIcon} alt="ama_icon" width={10} height={10} />
          </span>
          <span>Amazon (INR)</span>
        </Link>
      </div>
    </div>
  );
};

// --------------------
// Main Page Component
// --------------------
export default function Page() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (data.success) {
          setBooks(data.data);
        } else {
          setError(data.message || "Failed to load books");
        }
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="flex flex-col items-center min-h-[70vh] 
    bg-[#121212] px-4 py-10 relative overflow-hidden"
    >
       <div className="absolute w-screen h-[500px] top-[20%] lg:w-[1000px] md:h-[1000px] lg:top-[200px] 
            rounded-[16px] bg-[#00BFFF33] blur-[200px]">

            </div>

      <h1 className="text-3xl font-extralight leading-none text-white mb-8">
        Recommended Books
      </h1>

      {loading ? (
        <div className="flex flex-col gap-6 w-full max-w-4xl items-center">
          <ShimmerCard />
          <ShimmerCard />
        </div>
      ) : error ? (
        <div className="text-red-500 text-sm">{error}</div>
      ) : books.length === 0 ? (
        <div className="text-gray-400 text-base mt-4">
          📭 No recommended books available at the moment.
        </div>
      ) : (
        <div className="flex flex-col relative  gap-6 w-full max-w-5xl items-center">
          {/* <div
            className="pointer-events-none absolute w-[761px] h-[761px] rounded-full bg-[#007182] opacity-20 md:opacity-20 blur-[200px]"
            style={{ bottom: "-200px", right: "300px" }}
          ></div> */}
            
         
          
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
        
        </div>
      )}
    </div>
  );
}
