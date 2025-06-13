import Image from "next/image";
import Link from "next/link";

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
  data: Course[];
  message?: string;
};

const CourseCard = ({
  ctaUrl,
  description,
  imageUrl,
  slug,
  title,
}: Course) => {
  return (
    <div
      className="flex bg-[#1E1E1E]  text-white rounded-xl shadow-custom px-12 md:px-10 
        md:py-4 py-7 gap-7 md:gap-10 w-full hover:shadow-blue-500/50 transition-shadow duration-300
        flex-col items-center md:items-start md:flex-row"
    >
      <div className="w-56 h-40 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          className="w-28 h-40 object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>
      <div
        className="flex flex-col items-center md:items-start
             justify-between gap-8 flex-1"
      >
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-bold text-xl md:text-2xl text-white text-center md:text-start">{title}</div>
          <p className="font-medium text-sm md:text-base text-center md:text-start text-[#AAAAAA]">
            <span className=" line-clamp-2">{description}</span>
            <span>
              <Link
                href={`/courses/${slug}`}
                className=" text-[#00BFFF] hover:underline"
              >
                Read More
              </Link>
            </span>
          </p>
        </div>

        <button>
          <Link
            href={ctaUrl || ""}
            className="bg-[#07516A] text-white px-8 py-2  rounded-[10px]
              transition flex gap-1 items-center text-xs md:text-sm font-bold"
          >
            ENROLL NOW
          </Link>
        </button>
      </div>
    </div>
  );
};

export default async function Page() {
  const res = await fetch(
    `${process.env.ADMIN_BACKEND_URL}/api/v1/courses/get-all`
  );

  if (!res.ok) {
    return (
      <div
        className="flex flex-col items-center min-h-[70vh] 
      bg-[#121212] px-4 py-10 relative overflow-hidden"
      >
        <div className="text-gray-400 text-base mt-4">
          📭 No recommended Courses available at the moment.
        </div>
      </div>
    );
  }

  const result: ApiResponse = await res.json();
  if (!result.success || !result.data)
    return (
      <div
        className="flex flex-col items-center min-h-[70vh] 
      bg-[#121212] px-4 py-10 relative overflow-hidden"
      >
        <div className="text-gray-400 text-base mt-4">
          Something Went Wrong!!
        </div>
      </div>
    );

  const courses: Course[] = result.data;

  return (
    <div
      className="flex flex-col items-center min-h-[70vh] 
      bg-[#121212] px-4 py-10 relative overflow-hidden "
    >

           <div
        className="absolute w-screen h-[500px] top-[20%] lg:w-[1000px] md:h-[1000px] lg:top-[200px] 
              rounded-[16px] bg-[#00BFFF] blur-[200px] opacity-20"
      ></div>
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-extralight leading-none text-center text-white mb-8">
          Recommended Courses
        </h1>

        <div className="flex flex-col relative  gap-6 w-full max-w-5xl items-center px-10">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
