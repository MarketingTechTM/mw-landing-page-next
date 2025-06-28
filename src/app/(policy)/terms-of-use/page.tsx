"use client";

import { termsOfUseData } from "./termsOfUseData";

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-[#121212] text-[#C0C0C0]">
      {/* Header Section */}
      <section className="w-full flex flex-col items-center justify-center bg-[#00718233] py-12 px-4 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-white">
          Terms of Use
        </h1>
        <p className="text-lg sm:text-2xl">
          <span className="font-medium text-white">Effective Date:</span>{" "}
          {termsOfUseData.effectiveDate}
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
        <p className="text-lg sm:text-2xl whitespace-pre-line">
          Welcome to Marketing Wisdom {`("we," "our," or "us")`}. By accessing
          or using our website located at{" "}
          <span>
            {" "}
            <a
              href="https://www.marketingwisdom.in "
              className="underline text-[#007182]"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.marketingwisdom.in
            </a>{" "}
          </span>{" "}
          {`("Website")`}, you agree to comply with and be bound by the
          following Terms of Use. Please read them carefully.
        </p>
        <p className="text-lg sm:text-2xl whitespace-pre-line">
          If you do not agree to these Terms, please do not use the Website.
        </p>

        {/* Terms Sections */}
        <div className="space-y-12">
          {termsOfUseData.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold underline text-[#007182]">
                {section.title}
              </h2>
              <p className="text-lg sm:text-2xl whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
