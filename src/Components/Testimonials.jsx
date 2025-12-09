/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FiStar,
  FiMessageSquare,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FeedbackService } from "../services/FeedbackService";
import { Heading2 } from "./Typography";
import { FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const services = new FeedbackService();
  async function getAllTestimonials() {
    try {
      const response = await services.getllFeedback();
      console.log(response);
      setTestimonials(response);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  }

  useEffect(() => {
    getAllTestimonials();
  }, []);

  return (
    <motion.section
      className=" b relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <Heading2>What Our Customers Say</Heading2>

        {/* Swiper */}
        <div className="p-5 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={{
              nextEl: ".testimonials-next",
              prevEl: ".testimonials-prev",
            }}
            pagination={{
              clickable: true,
              el: ".testimonials-pagination",
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide className="p-3 " key={testimonial.id}>
                <motion.div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8  relative transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Avatar + Name */}
                  <div className="flex items-center mb-5">
                    <div className="text-4xl mr-4">
                      <FaUserCircle />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 text-lg">
                        {testimonial.guest.name}
                      </h4>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <FiMessageSquare className="absolute -top-3 -left-3 w-9 h-9 text-blue-100" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">
                      "{testimonial.comment}"
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10 relative">
          <div className="testimonials-prev cursor-pointer bg-white/80 hover:bg-white shadow-md p-3 rounded-full transition-all">
            <FiChevronLeft className="w-6 h-6 text-blue-700" />
          </div>
          <div className="testimonials-pagination flex gap-2" />
          <div className="testimonials-next cursor-pointer bg-white/80 hover:bg-white shadow-md p-3 rounded-full transition-all">
            <FiChevronRight className="w-6 h-6 text-blue-700" />
          </div>
        </div>
      </div>
      
    </motion.section>
  );
}
