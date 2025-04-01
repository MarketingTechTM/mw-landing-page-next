"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/shady-btn";
import { GridBackground } from "@/components/ui/GridBackground";

export default function BookACall() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <GridBackground>
      <div className="min-h-screen flex items-center justify-center px-6 py-10 mt-10">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 border border-gray-300 dark:border-gray-700 p-10 rounded-3xl shadow-2xl bg-white dark:bg-neutral-950 transition-all duration-300">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold leading-tight bg-gradient-to-r from-gray-400 to-slate-900 dark:from-gray-100 dark:to-gray-800 text-transparent bg-clip-text">
              Let&apos;s Accelerate Your Growth 
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              We help <span className="text-black dark:text-white font-semibold">B2C SaaS companies</span> 
              drive predictable revenue, lower acquisition costs, and maximize ROI.  
              <br />
              If you &apos;re serious about scaling, let&apo;s talk.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              <strong className="text-black dark:text-white">$2,000+</strong> budget? Our marketing strategists will 
              craft a <span className="font-semibold">tailored growth plan</span> for you. <br />
              **No fluff, just results.**
            </p>
            <p className="mt-6 text-gray-500 text-sm">
              Fill out the form below, and we&apos;ll reach out.
            </p>
          </div>

          {/* Right Side - Booking Form */}
          <div className="bg-gray-100 dark:bg-zinc-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Book Your Free Strategy Call
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <LabelInputContainer>
                <Label htmlFor="company-email">Company Email Address*</Label>
                <Input id="company-email" type="email" required className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
              </LabelInputContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First Name*</Label>
                  <Input id="firstname" type="text" required className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last Name*</Label>
                  <Input id="lastname" type="text" required className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="job-title">Job Title*</Label>
                <Input id="job-title" type="text" required className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="budget">Estimated Monthly Media Budget*</Label>
                <Input id="budget" type="number" required className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="referral">How did you hear about us?</Label>
                <Textarea id="referral" className="bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-700" />
              </LabelInputContainer>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r bg-neutral-950 dark:bg-white  text-white dark:text-neutral-950 py-3 rounded-lg font-medium text-lg shadow-md  transition-all duration-300"
              >
                Schedule My Free Call →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </GridBackground>
  );
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};
