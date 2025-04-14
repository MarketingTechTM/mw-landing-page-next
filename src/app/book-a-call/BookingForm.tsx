"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/shady-btn";

interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  jobTitle: string;
  budget: number;
  referral: string;
}

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "761708e4-22eb-42cd-897c-c345687a11d3");
    formData.append("email", data.email);
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("jobTitle", data.jobTitle);
    formData.append("budget", data.budget.toString());
    formData.append("referral", data.referral);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        // toast.success("Your booking request has been submitted successfully!", {duration: 18000});
        toast.custom(
          (t) => (
            <div
              className={`relative w-[90%] sm:w-auto max-w-xs sm:max-w-sm md:max-w-md p-4 sm:p-5 rounded-xl shadow-lg border 
              flex items-center space-x-3 sm:space-x-4 transition-all duration-300 text-sm sm:text-base
              ${
                document.documentElement.classList.contains("dark")
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              {/* Animated Tick */}
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white animate-checkmark"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Message */}
              <div className="flex-1 text-left">
                <p className="leading-tight">
                  <span className="font-semibold">
                    Thank you for showing your interest.
                  </span>
                  <br />
                  Our team will reach out to you shortly.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => toast.dismiss(t.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
          ),
          {
            duration: 180000, // 3 minutes
            id: "success-popup",
          }
        );
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 rounded-xl border border-[#C5BDBD4D] shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <input
          type="hidden"
          name="access_key"
          value="761708e4-22eb-42cd-897c-c345687a11d3"
        />

        <LabelInputContainer>
          <Label htmlFor="company-email" className="text-left text-white">
            Email Address *
          </Label>
          <Input
            id="company-email"
            type="email"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm text-start">
              {errors.email.message}
            </p>
          )}
        </LabelInputContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-left text-white">
              First Name *
            </Label>
            <Input
              id="firstname"
              type="text"
              className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
              {...register("firstname", { required: "First name is required" })}
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm text-start">
                {errors.firstname.message}
              </p>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-left text-white">
              Last Name *
            </Label>
            <Input
              id="lastname"
              type="text"
              className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
              {...register("lastname", { required: "Last name is required" })}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm text-start">
                {errors.lastname.message}
              </p>
            )}
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="job-title" className="text-left text-white">
            Job Title *
          </Label>
          <Input
            id="job-title"
            type="text"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("jobTitle", { required: "Job title is required" })}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm text-start">
              {errors.jobTitle.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="budget" className="text-left text-white">
            Estimated Monthly Media Budget (in Lakhs) *
          </Label>
          <Input
            id="budget"
            type="number"
            step="any" // <-- allow decimals
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("budget", {
              required: "Budget is required",
              min: { value: 0.01, message: "Budget must be at least 0.01" },
              valueAsNumber: true, // optional: converts input to number automatically
            })}
          />
          {errors.budget && (
            <p className="text-red-500 text-sm text-start">
              {errors.budget.message}
            </p>
          )}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="referral" className="text-left text-white">
            How did you hear about us? *
          </Label>
          <Textarea
            id="referral"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("referral", { required: "Referral details required" })}
          />
          {errors.referral && (
            <p className="text-red-500 text-sm text-start">
              {errors.referral.message}
            </p>
          )}
        </LabelInputContainer>

        <Button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-medium text-lg shadow-md transition-all duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "BOOK A CALL NOW"}
        </Button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};
