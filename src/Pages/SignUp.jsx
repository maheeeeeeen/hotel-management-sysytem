"use client";
import React, { useState } from "react";

import { cn } from "../lib/utils";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../Components/InputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { SignInSchema } from "../services/validation/zodSchema";
import Button from "../Components/Button";

export function SignUpForm() {
  const service = new AuthService();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      city: "",
      number: "",
    },
    mode: "onChange",
  });
  async function Submit(formData) {
    try {
      const res = await service.SignUp(formData);
      console.log(res);
      setloading(true)
      toast("Register Successfully!");
      navigate("/signin");
    } catch (error) {
      toast(error.response?.data?.message || "Something went wrong");
    }
  }
  return (
    <div className="mx-auto w-full max-w-xl bg-white/90 rounded-2xl mt-5 mb-7">
      <h2 className="text-center text-3xl font-bold text-neutral-900">
        Create Your Account
      </h2>

      <p className="text-center mt-2 max-w-sm mx-auto text-sm text-neutral-600">
        Sign up to access your dashboard and explore premium features.
      </p>

      <form
        className="mt-10 space-y-6 backdrop-blur-xl shadow-lg border border-neutral-200 p-8 "
        onSubmit={handleSubmit(Submit)}
      >
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-neutral-700 mb-1">
            Full Name
          </label>
          <Input
            register={register}
            name="name"
            placeholder="John Doe"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email + Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Email Address
            </label>
            <Input
              register={register}
              name="email"
              placeholder="example@email.com"
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Password
            </label>
            <Input
              name="password"
              placeholder="••••••••"
              type="password"
              register={register}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </div>

        {/* Number + City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              Contact Number
            </label>
            <Input
              name="number"
              placeholder="03xxxxxxxxx"
              type="number"
              register={register}
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-1">
              City
            </label>
            <Input
              name="city"
              placeholder="Enter your city"
              type="text"
              register={register}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          className="w-full h-12 rounded-xl bg-linear-to-br from-black to-neutral-700 text-white text-[16px] font-semibold shadow-lg hover:opacity-90 transition-all"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating your account..." : "Create account"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}
