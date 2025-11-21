import React from "react";
import { Label } from "../../Components/ui/LabelUi";
import { Input } from "../../Components/ui/InputUI";
import { cn } from "../../lib/utils";

export function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white px-6 py-8 shadow-lg">
      <h2 className="text-center text-2xl font-bold text-neutral-800">
    Booking Form
      </h2>

      <p className="mt-2 text-center text-sm text-neutral-600">
        Sign in here to get access to your account
      </p>

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            placeholder="your@email.com"
            type="email"
            className="h-11 rounded-md border-gray-300 text-sm"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
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
