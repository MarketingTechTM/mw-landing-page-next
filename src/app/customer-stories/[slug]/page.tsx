import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stories } from "../customerStoriesData";
import { CtaButton } from "@/components/ui/button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((story) => story.slug === slug);
  if (!story) return { title: "Customer Story Not Found" };

  return {
    title: `${story.customerName} | Customer Story`,
    description: story.customerDesc,
  };
}

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

interface Story {
  logo: string;
  slug: string;
  customerName: string;
  customerDesc: string;
  highlight: {
    title: string;
    subtitle: string;
  }[];

  strategy: string[];
  results: string[];
}

const Header = ({ story }: { story: Story }) => {
  return (
    <section
      className="backdrop-blur-[16px] shadow-[inset_0px_4px_10.5px_0px_#EFEFEF40] 
        border border-white/10 rounded-[24px] flex flex-col justify-center items-center mb-6 md:mb-20 md:px-10 py-3 md:py-10"
      style={{
        background:
          "linear-gradient(285.1deg, rgba(255, 255, 255, 0.04) 29.1%, rgba(255, 255, 255, 0.01) 70.9%)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10">
       
        <div className="h-12 mb-5">
          <img
            src={story.logo}
            alt="logo"
            className="h-full w-auto mx-auto object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:gap-7">
          <div className="flex flex-col gap-2 justify-center items-center px-0 max-w-96  md:max-w-2xl">
            <h1 className="text-xl md:text-4xl font-extrabold">
              {story.customerName}
            </h1>
            <p className="text-xs md:text-lg text-gray-300 mt-4 text-center px-2 ">
              {story.customerDesc}
            </p>
          </div>

          <div className="mx-5 mt-6 mb-6 md:mb-20 flex flex-col lg:flex-row gap-4 md:gap-16">
            {story.highlight.map((item, index) => (
              <div
                key={index}
                className="shadow-[0px_4px_4px_0px_#FFFFFF05] 
                rounded-2xl flex flex-col gap-2 justify-center items-center
                 px-2 py-4 md:px-10 md:py-10 md:w-80 w-full md:h-auto md:max-w-80"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(127, 108, 67, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)",
                }}
              >
                <p
                  className="text-base md:text-5xl leading-[120%] font-bold 
                  whitespace-nowrap text-transparent bg-clip-text
                   bg-gradient-to-br from-[#007182] to-[#B0B0B0]"
                >
                  {item.title}
                </p>
                <p className="text-sm p-1 md:text-xl  leading-[120%] font-bold text-white text-center">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StrategyAndExecution = ({ strategy }: { strategy: string[] }) => {
  return (
    <section className="flex flex-col justify-start md:items-start gap-4 md:gap-7 mb-7">
      <h2 className="text-2xl md:text-3xl font-bold text-[#007182BF] text-center md:text-start">
        Strategy & Execution
      </h2>
      <div className=" text-[#BBBBBB] space-y-3 mx-auto md:mx-0 px-1 text-xs md:text-base">
        {strategy.map((point, index) => (
          <div
            className="flex flex-row items-center gap-2 md:gap-3"
            key={index}
          >
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#007182]"></span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Results = ({ results }: { results: string[] }) => {
  return (
    <section className="flex flex-col justify-start md:items-start gap-4 md:gap-7 mb-7">
      <h2 className="text-2xl md:text-3xl font-bold text-[#007182BF] text-center md:text-start">
        Results
      </h2>
      <div className="text-[#BBBBBB] space-y-3 mx-auto md:mx-0 px-1 text-xs md:text-base">
        {results.map((result, index) => (
          <div
            className="flex flex-row items-center gap-2 md:gap-3"
            key={index}
          >
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#007182]"></span>
            <p>{result}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const FooterBanner = () => {
  return (
    <div
      className="relative border border-[#007182]
              shadow-2xl shadow-[#007182] mt-[90px] lg:mt-[143px] mb-[50px] lg:mb-[73px]
                rounded-[20px] overflow-hidden"
    >
      <div
        className="relative flex gap-6 lg:gap-24 justify-between items-center bg-[#181717]
               p-6 rounded-lg border border-transparent"
      >
        <span className="text-white font-extralight text-[8px] sm:text-lg lg:text-3xl">
          Let&apos;s Start your High Growth Journey Now
        </span>
        <div className="">
          <CtaButton
            title="Book a strategy Call"
            url="/book-a-call"
            size=""
            textSize="text-[7px] sm:text-lg"
            className="font-bold "
          />
        </div>
      </div>
    </div>
  );
};

export default async function CustomerStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((story) => story.slug === slug);

  if (!story) return notFound();

  return (
    <main
      className="relative overflow-hidden  flex flex-col items-center justify-center
     min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-40 text-white"
    >
      <div
        className="pointer-events-none absolute w-[761px] h-[761px] rounded-full bg-[#00718280] opacity-10 md:opacity-40 blur-[1000px]"
        style={{ top: "-200px", left: "-200px" }}
      ></div>

      <div
        className="pointer-events-none absolute w-[761px] h-[761px] rounded-full bg-[#007182] opacity-10 md:opacity-40 blur-[1000px]"
        style={{ bottom: "-200px", right: "-200px" }}
      ></div>
      <div className=" max-w-full">
        <Header story={story} />
        <StrategyAndExecution strategy={story.strategy} />
        <Results results={story.results} />
        <FooterBanner />
      </div>
    </main>
  );
}
