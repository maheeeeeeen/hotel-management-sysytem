import React, { useState } from "react";

import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { toast, ToastContainer } from "react-toastify";
import Helper from "../helper/Helper";
import { Input } from "../Components/InputFields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { logInSchema } from "../services/validation/zodSchema";

export function SignInForm() {
  const service = new AuthService();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(logInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const navigate = useNavigate();

  const helper = new Helper();

  async function submit(data) {
    try {
      

      const res = await service.login(data);
      console.log(res.existingUser);
      const token = res.token;
      const role = res.existingUser.role;

      // Call setToken once with both parameters
      helper.setToken(token, role);

      toast("Login Successful!");

      if (role === "guest") {
        navigate("/");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      toast(error.message || "Something went wrong");
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-lg">
      <h2 className="text-center text-2xl font-bold text-neutral-800">
        Sign In
      </h2>

      <p className="mt-2 text-center text-sm text-neutral-600">
        Sign in here to get access to your account
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email Address</label>
        <Input
          register={register}
          name="email"
          placeholder="your@email.com"
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
        <label htmlFor="password">Password</label>
        <Input
          register={register}
          name="password"
          placeholder="••••••••"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="group relative flex h-11 w-full items-center justify-center rounded-md bg-linear-to-br from-black to-neutral-700 font-medium text-white transition hover:brightness-110"
        >
          Sign In →
        </button>

        <div className="h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent" />
      </form>
      <ToastContainer />
    </div>
  );
}
