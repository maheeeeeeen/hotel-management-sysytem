import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/hotelSlider1.jpg";
import slider2 from "../../assets/hotelSlider2.jpg";
import slider3 from "../../assets/hotelSlider3.jpg";

import Testimonials from "../../Components/Testimonials";

import Button from "../../Components/Button";

import { FeedbackModal } from "../../Components/Modal";
import { FiStar } from "react-icons/fi";
import { AboutService } from "../../services/AboutService";

export default function HomePage() {
  const features = [
    { icon: "🏨", title: "200+ Rooms", desc: "Luxury suites & villas" },
    { icon: "⭐", title: "5-Star Rating", desc: "Award-winning service" },
    { icon: "🌍", title: "Prime Location", desc: "City center access" },
    { icon: "💰", title: "Best Price", desc: "Guaranteed lowest rates" },
  ];
  const [openModal, setOpenModal] = useState(false);

  const [images, setimages] = useState([]);
  const service = new AboutService();

  async function getAlImages() {
    try {
      const response = await service.getAllGallery();
      setimages(response);
      console.log("images", response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAlImages();
  }, []);
  return (
    <>
      
    <div className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat" 
     style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'}}>
  
  {/* Optional: Dark overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/30"></div>
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
    {/* Left Content */}
    <div className="space-y-8 text-white">
      {/* Premium Badge */}
      <div className="flex items-center justify-center">
        <div className="inline-flex justify-center mx-auto items-center space-x-3 px-6 py-3 bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/20">
          <div className="h-2 w-2 rounded-full bg-blue-600 animate-ping"></div>
          <span className="text-lg font-semibold">
            🏆 Luxury Hotel & Resort Since 1995
          </span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-center">
        <span className="block text-white bg-clip-text">
          Experience Luxury
        </span>
        <span className="block mt-4">Redefined</span>
      </h1>

      {/* Description */}
      <p className="text-xl text-white leading-relaxed text-center">
        Where impeccable service meets breathtaking design. Discover an
        oasis of tranquility with world-class amenities, gourmet dining,
        and unforgettable experiences.
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <div className="font-bold text-lg">{feature.title}</div>
            <div className="text-sm text-white/70">{feature.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      {/* Image Slider Section */}
      <div className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Luxury Spaces
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning accommodations, amenities, and breathtaking
              views that make every stay memorable.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img
                    src={img.ImageUrl}
                    alt={`Hotel View ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-white/80 mt-2">{img.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Services Section
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-blue-700 font-semibold">✨ Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unmatched <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-600">Hospitality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class services designed to make your stay truly exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-16 w-16 bg-linear-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-blue-600">
                    {service.serviceIcon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.serviceTitle}</h3>
                <p className="text-gray-600 leading-relaxed">{service.serviceDesc}</p>
                <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                  <button className="text-blue-600 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Testimonials Section */}
      <div className="py-20 bg-linear-to-b from-white to-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full mb-1"></div>
              <span className="mx-4 text-blue-600 font-semibold tracking-wide">
                TESTIMONIALS
              </span>
              <div className="w-12 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mb-1"></div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                Guests
              </span>{" "}
              Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our valued guests about their exceptional experiences
              and memorable moments.
            </p>
          </div>

          {/* Testimonials Component */}
          <div className="mb-12">
            <Testimonials />
          </div>

          {/* CTA Button Section */}
          <div className="text-center pt-8">
            <div className="mb-6">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-yellow-400 mx-1"
                    />
                  ))}
                </div>
                <span className="ml-4 text-gray-700 text-lg font-semibold">
                  4.9/5 Average Rating
                </span>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied guests who've shared their stories
              </p>
            </div>

            <div className="relative inline-block group">
              <Button
                text="Add Your Feedback"
                onClick={() => setOpenModal(true)}
              />

              {/* Button decorative effect */}
            </div>

            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                Your experience matters to us
              </p>
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <FeedbackModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}
