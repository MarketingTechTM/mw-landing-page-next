import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Course = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  ctaUrl: string;
  slug: string;
};

type ApiResponse = {
  success: boolean;
  data: Course;
  message?: string;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const start = performance.now();
  const res = await fetch(
    `${process.env.ADMIN_BACKEND_URL}/api/v1/courses/slug/${slug}`
  );

  const end = performance.now();

  console.log(
    `⏱️ API fetch for course slug "${slug}" took ${(end - start).toFixed(2)} ms`
  );
  if (!res.ok) return notFound();

  const result: ApiResponse = await res.json();
  if (!result.success || !result.data) return notFound();

  const course = result.data;

  return (
    <div className="flex flex-col items-center relative bg-[#121212] overflow-hidden py-12">
       <div
        className=" absolute top-32 w-[1200px] h-full left-[50%] transform -translate-x-[50%]
            rounded-[16px] bg-[#00BFFF33] blur-[200px] backdrop-blur-[200px] shadow-2xl"
      ></div>

      <div className="container px-12 flex flex-col z-10">

        <h1 className="font-medium  my-4 md:my-8 mx-2 md:mx-16">
          <span className="text-[#FFFFFF] text-xl md:text-3xl">
            Recommended Courses/{" "}
          </span>
          <span className="text-base md:text-lg text-[#C7C7C7]">
            {course.title}
          </span>
        </h1>

        <div
          className="flex flex-col items-center gap-14 shadow-custom
         bg-[#1E1E1E]  mx-auto"
        >
          <div className="w-full h-48 md:h-60 relative">
            <div
              className="bg-black opacity-70 w-full h-full absolute top-0 left-0 z-10
             flex items-end md:items-center justify-center "
            >
              <span
                className="text-white font-bold text-2xl md:text-3xl
                 mb-5 md:mb-0"
              >
                {course.title}
              </span>
            </div>
            <Image
              src={course.imageUrl}
              alt={course.title}
              fill={true}
              className="w-28 h-40 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          <div
            className="flex flex-col items-center max-w-5xl
           px-7 md:px-32 mx-auto md:items-start md:gap-20 gap-14 "
          >
            <p
              className="whitespace-pre-line text-xs md:text-base
               text-[#AAAAAA] text-justify font-medium"
            >
              {course.description}
            </p>
            <button className="mb-9 md:mb-36">
              <Link
                href={course.ctaUrl || ""}
                className="bg-[#07516A] text-white px-8 py-2  rounded-[10px]
              transition flex gap-1 items-center text-xs md:text-sm font-bold"
              >
                ENROLL NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
