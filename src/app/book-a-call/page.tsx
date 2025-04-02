"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/shady-btn";
import { GridBackground } from "@/components/ui/GridBackground";
import bgImage from "@/public/book-a-call/bg_image.png";
import increasingGraphImage from "@/public/increasing_img.png";

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  jobTitle: string;
  budget: number;
  referral: string;
}

export default function BookACall() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <GridBackground>
      <div className="flex min-h-screen items-center justify-center px-0 lg:px-6 py-5 lg:py-10 mt-10">
        <div
          style={{ backgroundImage: `url(${bgImage.src})` }}
          className="max-w-7xl w-full grid md:grid-cols-2 gap-12 border border-gray-300 text-center
         dark:border-gray-700 px-8 py-10 lg:p-10 rounded-3xl shadow-2xl bg-cover bg-center bg-black/80 text-white
          transition-all duration-300"
        >
          <div 
            style={{ backgroundImage: `url(${increasingGraphImage.src})` }}
            className="flex flex-col justify-start bg-center bg-cover"
          >
            <div className="text-[50px] font-semibold leading-[96%] tracking-[13%]
             lg:text-[88px] lg:font-bold lg:leading-tight text-white text-justify"
            >
              Scale Your <br/> SaaS Faster
            </div>

            <p className="text-[18px] md:text-[22px] text-gray-400 mt-5 lg:mt-9 leading-tight text-justify">
              Marketing Wisdom helps early-stage B2C SaaS companies (1-50 employees)
              generate qualified leads, maximize marketing ROI, lower customer acquisition costs, and drive high growth.
            </p>

            <p className="mt-5 text-[#A1A1AA] text-sm text-justify">
              Fill out the form, and our expert will reach out to you.
            </p>
          </div>

          {/* right section */}

          <div className="p-8 rounded-xl border border-[#C5BDBD4D] shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <LabelInputContainer>
                <Label htmlFor="company-email" className="text-left text-white">Email Address *</Label>
                <Input
                  id="company-email"
                  type="email"
                  className="bg-black/60 text-white border-gray-600 border 
                  shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm text-start">{errors.email.message}</p>}
              </LabelInputContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname" className="text-left text-white">First Name *</Label>
                  <Input
                    id="firstname"
                    type="text"
                    className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                    {...register("firstname", { required: "First name is required" })}
                  />
                  {errors.firstname && <p className="text-red-500 text-sm text-start">{errors.firstname.message}</p>}
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" className="text-left text-white">Last Name *</Label>
                  <Input
                    id="lastname"
                    type="text"
                    className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                    {...register("lastname", { required: "Last name is required" })}
                  />
                  {errors.lastname && <p className="text-red-500 text-sm text-start">{errors.lastname.message}</p>}
                </LabelInputContainer>
              </div>

              <LabelInputContainer>
                <Label htmlFor="job-title" className="text-left text-white">Job Title *</Label>
                <Input
                  id="job-title"
                  type="text"
                  className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                  {...register("jobTitle", { required: "Job title is required" })}
                />
                {errors.jobTitle && <p className="text-red-500 text-sm text-start">{errors.jobTitle.message}</p>}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="budget" className="text-left text-white">Estimated Monthly Media Budget *</Label>
                <Input
                  id="budget"
                  type="number"
                  className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                  {...register("budget", {
                    required: "Budget is required",
                    min: { value: 1, message: "Budget must be at least 1" },
                  })}
                />
                {errors.budget && <p className="text-red-500 text-sm text-start">{errors.budget.message}</p>}
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="referral" className="text-left text-white">How did you hear about us ? *</Label>
                <Textarea
                  id="referral"
                  className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
                  {...register("referral", {
                    required: "Referral details required"
                  })}
                />
                 {errors.referral && <p className="text-red-500 text-sm text-start">{errors.referral.message}</p>}
              </LabelInputContainer>

              <Button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-medium text-lg shadow-md transition-all duration-300"
              >
                BOOK A CALL NOW
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