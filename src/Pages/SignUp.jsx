"use client";
import React, { useState } from "react";
import { Label } from "../Components/ui/LabelUi";
import { Input } from "../Components/ui/InputUI.";
import { cn } from "../lib/utils";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export function SignUpForm() {
  const service = new AuthService();
  const navigate = useNavigate();
  const [ formdata, setformdata ] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });
  function handleChange(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await service.SignUp(formdata);
      console.log(res);
      toast("Register Successfully!");
      navigate("/signin");
    } catch (error) {
      toast(error.response?.data?.message || "Something went wrong");
    }
  }
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 ">
      <h2 className="text-center text-xl font-bold text-neutral-800 ">
        Sign Up{" "}
      </h2>
      <p className="text-center mt-2 max-w-sm text-sm text-neutral-600">
        sign up to register your account
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            placeholder="projectmayhem@fc.com"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            placeholder="••••••••"
            type="password"
            onChange={handleChange}
          />
        </LabelInputContainer>
           <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Role</Label>
          <Input
            name="role"
            placeholder="role"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent " />
      </form>
      <ToastContainer />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
