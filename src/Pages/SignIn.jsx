import React, { useState } from "react";
import { Label } from "../Components/ui/LabelUi";
import { Input } from "../Components/ui/InputUI.";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import { toast, ToastContainer } from "react-toastify";

export function SignInForm() {
  const service = new AuthService();
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
  e.preventDefault();
  try {
    const res = await service.login(formdata);
    console.log(res.existingUser);

    localStorage.setItem("token", res.token);
    toast("Login Successful!");

    const role = res.existingUser.role; 

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

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            onChange={handleChange}
            name="email"
            placeholder="your@email.com"
            type="email"
            className="h-11 rounded-md border-gray-300 text-sm"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={handleChange}
            name="password"
            placeholder="••••••••"
            type="password"
            className="h-11 rounded-md border-gray-300 text-sm"
          />
        </LabelInputContainer>

        <button
          type="submit"
          className="group relative flex h-11 w-full items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white transition hover:brightness-110"
        >
          Sign In →
          <BottomGradient />
        </button>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      </form>
      <ToastContainer />
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
