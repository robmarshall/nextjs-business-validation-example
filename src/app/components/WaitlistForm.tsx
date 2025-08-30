"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  website?: string;
};

interface WaitlistFormProps {
  formId: string;
  secureToken: string;
  enableHoneypot?: boolean;
  className?: string;
  variant?: "inline" | "centered" | "card";
}

export default function WaitlistForm({
  formId,
  secureToken,
  enableHoneypot = true,
  className = "",
  variant = "centered",
}: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (enableHoneypot && data.website) {
      setSubmitStatus("success");
      reset();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("secure_token", secureToken);

      const response = await fetch(`https://formbear.io/f/${formId}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormStyles = () => {
    switch (variant) {
      case "inline":
        return "flex flex-col sm:flex-row gap-4";
      case "card":
        return "bg-white rounded-2xl shadow-xl p-8";
      case "centered":
      default:
        return "max-w-md mx-auto";
    }
  };

  return (
    <div className={`${getFormStyles()} ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <input type="hidden" name="secure_token" value={secureToken} />

        {variant === "card" && (
          <div className="mb-6">
            <h3 className="text-3xl font-serif text-gray-900 mb-2">Join Our Waitlist</h3>
            <p className="text-gray-600">
              Be the first to experience our meal delivery service
            </p>
          </div>
        )}

        <div
          className={
            variant === "inline"
              ? "flex flex-col sm:flex-row gap-4"
              : "space-y-4"
          }
        >
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`
                w-full px-6 py-4 rounded-lg border-2 text-gray-900 placeholder-gray-500
                ${errors.email ? "border-red-500" : "border-gray-300"}
                ${variant === "inline" ? "bg-white/90 backdrop-blur" : "bg-gray-50"}
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                transition-all duration-200
              `}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {enableHoneypot && (
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                {...register("website")}
                type="text"
                id="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              ${variant === "inline" ? "sm:w-auto" : "w-full"}
              px-8 py-4 bg-green-500 text-white font-semibold rounded-lg
              hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-200 transform hover:scale-105
            `}
          >
            {isSubmitting ? "Submitting..." : "I am interested"}
          </button>
        </div>

        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              Welcome aboard! Check your email for confirmation.
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 font-medium">
              Something went wrong. Please try again later.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}