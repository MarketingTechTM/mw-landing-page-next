import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import amazonIcon from "@/public/brand_logo/amazon_icon.svg";
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
  statusCode: number;
  data: Book;
  message: string;
  success: boolean;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(
    `${process.env.ADMIN_BACKEND_URL}/api/v1/books/slug/${slug}`
  );

  if (!res.ok) return notFound();

  const result: ApiResponse = await res.json();
  if (!result.success || !result.data) return notFound();

  const book = result.data;

  return (
    <div className="flex flex-col items-center relative   bg-[#121212] overflow-hidden py-12">
      <div
        className=" absolute  top-32  w-[1200px] h-full left-[50%] transform -translate-x-[50%]
            rounded-[16px] bg-[#00BFFF33] blur-[200px] backdrop-blur-[200px] p-10 shadow-2xl"
      ></div>

      <div className="container px-12  overflow-hidden z-20 pb-20">
        <h1 className="font-medium  my-4 mx-2 md:mx-16">
          <span className="text-[#FFFFFF] text-xl md:text-3xl">
            Recommended Books/{" "}
          </span>
          <span className="text-base md:text-lg text-[#C7C7C7]">
            {book.title}
          </span>
        </h1>
        <div
          className="flex flex-col md:flex-row md:justify-between
           gap-5 items-center md:items-start mx-auto px-5
        bg-[#1E1E1E] shadow-custom pt-4 pb-8 rounded-lg"
        >
          <div
            className="flex flex-col md:flex-row items-center md:items-start
           gap-6 md:gap-24 py-4 justify-between flex-wrap "
          >
            <div className="w-40 h-60 relative">
              <Image
                src={book.imageUrl}
                alt={book.title}
                fill={true}
                className=" object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-6">
              <h2
                className="text-white text-xl md:text-3xl font-semibold md:font-bold
               md:text-start text-center"
              >
                {book.title}
              </h2>
              <h3 className="text-[#AAAAAA] md:text-base md:font-medium text-center md:text-start">
                {book.subtitle}
              </h3>
              <p className="text-[#CCCCCC] font-medium text-[15px] leading-6 max-w-xl text-start ">
                {book.description}
              </p>
            </div>
          </div>

          <div
            className="bg-[#1E1E1E] flex flex-col gap-10 md:border border-[0px]
             border-[#4E4E4E] py-6 px-6 md:px-12 mx-auto  justify-between"
          >
            <div
              className="hidden md:block font-semibold text-base text-white
             border-b-[0.5px] text-center pb-4 border-[#4E4E4E]"
            >
              Purchase this Book
            </div>
            <div className="flex flex-col gap-2 text-xs md:text-sm">
              <Link
                href={book.amazonUsdUrl}
                className="bg-[#07516A] text-white px-8 py-2  rounded-[20px]
            transition flex gap-1 items-center"
              >
                <span color="#000">
                  <Image
                    src={amazonIcon}
                    alt="ama_icon"
                    width={10}
                    height={10}
                  />
                </span>
                <span>Amazon (USD)</span>
              </Link>

              <Link
                href={book.amazonIndUrl}
                className="bg-[#D9D9D9] text-black px-8 py-2 rounded-[20px]
           hover:bg-gray-400 transition flex gap-1 items-center"
              >
                <span color="#000">
                  <Image
                    src={amazonIcon}
                    alt="ama_icon"
                    width={10}
                    height={10}
                  />
                </span>
                <span>Amazon (INR)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
