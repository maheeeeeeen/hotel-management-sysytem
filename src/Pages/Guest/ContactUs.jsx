import React from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2 } from "../../Components/Typography";
import { Label } from "../../Components/ui/LabelUi";
import { Input } from "../../Components/ui/InputUI.";

import { cn } from "../../lib/utils";


export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <TopHeroSection>
        <Heading1 text="Contact Us" />
      </TopHeroSection>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center space-y-4">
          <Heading2 text="Get in Touch" />
          <p className="text-neutral-600 leading-relaxed">
            Feel free to reach out to us for any questions or feedback. 
            We are always here to help and guide you with the best support possible.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <ContactForm />
        </div>

      </div>
    </div>
  );
}

export  function ContactForm() {
  return (
    <div className="shadow-md mx-auto w-full max-w-md rounded-2xl bg-white p-6 md:p-8">
      <h2 className="text-center text-2xl font-bold text-neutral-800">
        Contact Us
      </h2>

      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              placeholder="John Doe"
              type="text"
              className="h-11"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              name="email"
              placeholder="example@mail.com"
              type="email"
              className="h-11"
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label>Message</Label>
          <textarea
            name="message"
            placeholder="Enter your message..."
            className="h-28 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
          ></textarea>
        </LabelInputContainer>

        <button
          className="group/btn relative flex h-11 w-full items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white transition hover:brightness-110"
          type="submit"
        >
          Submit →
          <BottomGradient />
        </button>

      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
  </>
);
