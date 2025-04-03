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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "0ae0a9d7-e121-48cd-bd5c-dc1355f7d7c4");
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
        toast.success("Your booking request has been submitted successfully!");
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
        <input type="hidden" name="access_key" value="0ae0a9d7-e121-48cd-bd5c-dc1355f7d7c4" />

        <LabelInputContainer>
          <Label htmlFor="company-email" className="text-left text-white">Email Address *</Label>
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
          {errors.email && <p className="text-red-500 text-sm text-start">{errors.email.message}</p>}
        </LabelInputContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-left text-white">First Name *</Label>
            <Input id="firstname" type="text"
              className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
              {...register("firstname", { required: "First name is required" })} 
            />
            {errors.firstname && <p className="text-red-500 text-sm text-start">{errors.firstname.message}</p>}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-left text-white">Last Name *</Label>
            <Input id="lastname" type="text"
              className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
              {...register("lastname", { required: "Last name is required" })} 
            />
            {errors.lastname && <p className="text-red-500 text-sm text-start">{errors.lastname.message}</p>}
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="job-title" className="text-left text-white">Job Title *</Label>
          <Input id="job-title" type="text"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("jobTitle", { required: "Job title is required" })} 
          />
          {errors.jobTitle && <p className="text-red-500 text-sm text-start">{errors.jobTitle.message}</p>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="budget" className="text-left text-white">Estimated Monthly Media Budget *</Label>
          <Input id="budget" type="number"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("budget", {
              required: "Budget is required",
              min: { value: 1, message: "Budget must be at least 1" },
            })}
          />
          {errors.budget && <p className="text-red-500 text-sm text-start">{errors.budget.message}</p>}
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="referral" className="text-left text-white">How did you hear about us? *</Label>
          <Textarea id="referral"
            className="bg-black/60 text-white border-gray-600 border shadow-[inset_0px_4px_20px_0px_#FFFFFF40]"
            {...register("referral", { required: "Referral details required" })} 
          />
          {errors.referral && <p className="text-red-500 text-sm text-start">{errors.referral.message}</p>}
        </LabelInputContainer>

        <Button type="submit" className="w-full bg-white text-black py-3 rounded-lg font-medium text-lg shadow-md transition-all duration-300" disabled={loading}>
          {loading ? "Submitting..." : "BOOK A CALL NOW"}
        </Button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col space-y-2">{children}</div>;
};
