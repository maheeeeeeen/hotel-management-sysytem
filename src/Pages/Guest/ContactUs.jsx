import React, { useEffect, useState } from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2 } from "../../Components/Typography";
import { Input } from "../../Components/InputFields";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { InfoCard, InfoCard2 } from "../../Components/Cards";
import { InfoService } from "../../services/infoService";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { contactSchema } from "../../services/validation/zodSchema";
import { ContactService } from "../../services/ContactService";
import { toast, ToastContainer } from "react-toastify";

export default function ContactUs() {
  const [info, setInfo] = useState([]);
  const service = new InfoService();

  async function GetallInfo() {
    try {
      const res = await service.AllInfo();
      setInfo(res);
    } catch (error) {
      console.log("Info errorr", error);
    }
  }
  useEffect(() => {
    GetallInfo();
  }, []);

  const iconMap = {
    Mail: {
      icon: Mail,
      color: "from-blue-600 to-blue-700", // Trust & communication
    },
    Phone: {
      icon: Phone,
      color: "from-green-600 to-emerald-700", // Growth & connection
    },
    Location: {
      icon: MapPin,
      color: "from-purple-600 to-violet-700", // Creativity & uniqueness
    },
    Clock: {
      icon: Clock,
      color: "from-amber-600 to-orange-700", // Energy & urgency
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-neutral-50">
      <TopHeroSection>
        <div className="text-center">
          <Heading1 text="Contact Us" className="mb-4" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you every step
            of the way.
          </p>
        </div>
      </TopHeroSection>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {info.map((m) => {
            const iconData = iconMap[m.icon];

            if (!iconData) return null; // prevents crash if api sends invalid icon

            const IconComponent = iconData.icon;
            const linearColor = iconData.color;

            return (
              <InfoCard
                key={m._id}
                icon={<IconComponent className="w-6 h-6" />}
                title={m.title}
                description={m.description}
                contact={m.value}
                color={linearColor}
              />
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT SECTION - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
              <Heading2 text="Get in Touch" className="mb-6" />
              <p className="text-neutral-600 leading-relaxed mb-8">
                Feel free to reach out to us for any questions or feedback. We
                are always here to help and guide you with the best support
                possible.
              </p>

              <div className="space-y-6">
                {info.map((m) => {
                  const iconData = iconMap[m.icon];

                  if (!iconData) return null; // prevents crash if api sends invalid icon

                  const IconComponent = iconData.icon;
                  const linearColor = iconData.color;
                  return (
                    <InfoCard2
                      icon={<IconComponent className="w-6 h-6" />}
                      title={m.title}
                      description={m.description}
                      color={linearColor}
                    />
                  );
                })}
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-neutral-800 mb-6">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {[
                  "24/7 Customer Support",
                  "Quick Response Time",
                  "Expert Team Assistance",
                  "Secure & Confidential",
                  "Satisfaction Guaranteed",
                ].map((point, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-neutral-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SECTION - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-neutral-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-neutral-900 mb-3">
                  Send us a Message
                </h2>
                <p className="text-neutral-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* FAQ Section */}
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const contactService = new ContactService();
  const onSubmit = async (data) => {
    try {
      await contactService.createContact(data);
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send message");
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              Name *
            </label>
            <Input
              register={register}
              name={"name"}
              placeholder="John Doe"
              className="h-12"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-neutral-700">
              Email Address *
            </label>
            <Input
              register={register}
              name={"email"}
              placeholder="example@mail.com"
              type="email"
              className="h-12"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700">
            Subject
          </label>
          <Input
            register={register}
            name={"subject"}
            placeholder="What is this regarding?"
            className="h-12"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700">
            Message *
          </label>
          <textarea
            {...register("message")}
            placeholder="Please provide details about your inquiry..."
            className="w-full h-40 rounded-xl border px-4 py-3 resize-none"
          />
          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl flex justify-center items-center gap-2 disabled:opacity-60"
        >
          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-center text-neutral-500 text-sm">
          By submitting this form, you agree to our privacy policy.
        </p>
      </form>
    </>
  );
}
