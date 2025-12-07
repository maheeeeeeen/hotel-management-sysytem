import React from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2 } from "../../Components/Typography";
import { Input } from "../../Components/InputFields";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      <TopHeroSection>
        <div className="text-center">
          <Heading1 text="Contact Us" className="mb-4" />
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you every step of the way.
          </p>
        </div>
      </TopHeroSection>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email Us"
            description="Drop us a line anytime"
            contact="hello@company.com"
            color="from-blue-500 to-cyan-500"
          />
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Call Us"
            description="Mon-Fri from 9am to 6pm"
            contact="+1 (555) 123-4567"
            color="from-green-500 to-emerald-500"
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Visit Us"
            description="Come say hello"
            contact="123 Business Ave, Suite 100"
            color="from-purple-500 to-pink-500"
          />
          <ContactCard
            icon={<Clock className="w-6 h-6" />}
            title="Office Hours"
            description="We're available"
            contact="Mon-Fri: 9am-6pm"
            color="from-orange-500 to-red-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT SECTION - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-neutral-100">
              <Heading2 text="Get in Touch" className="mb-6" />
              <p className="text-neutral-600 leading-relaxed mb-8">
                Feel free to reach out to us for any questions or feedback. 
                We are always here to help and guide you with the best support possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Email</h3>
                    <p className="text-neutral-600">support@company.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Phone</h3>
                    <p className="text-neutral-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Address</h3>
                    <p className="text-neutral-600">123 Business Ave, Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-neutral-800 mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {[
                  "24/7 Customer Support",
                  "Quick Response Time",
                  "Expert Team Assistance",
                  "Secure & Confidential",
                  "Satisfaction Guaranteed"
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
                  Fill out the form below and we'll get back to you as soon as possible.
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

function ContactCard({ icon, title, description, contact, color }) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-neutral-100 hover:scale-[1.02]">
      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color} text-white mb-4`}>
        {icon}
      </div>
      <h3 className="font-bold text-neutral-800 mb-1">{title}</h3>
      <p className="text-neutral-500 text-sm mb-2">{description}</p>
      <p className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
        {contact}
      </p>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700" htmlFor="name">
            Name *
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            className="h-12 border-neutral-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-neutral-700" htmlFor="email">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            placeholder="example@mail.com"
            type="email"
            className="h-12 border-neutral-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700" htmlFor="subject">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="What is this regarding?"
          type="text"
          className="h-12 border-neutral-300 focus:border-blue-500 focus:ring-blue-500 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Please provide details about your inquiry..."
          className="w-full h-40 rounded-xl border border-neutral-300 px-4 py-3 text-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all resize-none"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="group w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
      >
        <span>Send Message</span>
        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
      
      <p className="text-center text-neutral-500 text-sm mt-4">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  );
}