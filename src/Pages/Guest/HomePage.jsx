import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { IoLocationOutline, IoBedOutline, IoRestaurantOutline, IoCalendarOutline, IoCarOutline, IoBusinessOutline } from "react-icons/io5";
import { FaWifi, FaSwimmingPool, FaSpa, FaConciergeBell, FaShieldAlt } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from "../../assets/hotelSlider1.jpg";
import slider2 from "../../assets/hotelSlider2.jpg";
import slider3 from "../../assets/hotelSlider3.jpg";
import { GridCard } from '../../Components/Cards';
import { GridLayout } from '../../Components/ImageComponent';
import { Testimonials } from '../../Components/Testimonials';
import { BookingForm } from './BookingForm';

export default function HomePage() {
  const services = [
    {
      serviceIcon: <IoBedOutline className="text-3xl" />,
      serviceTitle: "Luxury Accommodation",
      serviceDesc: "Spacious rooms with premium amenities, stunning views, and 24/7 room service for ultimate comfort."
    },
    {
      serviceIcon: <IoRestaurantOutline className="text-3xl" />,
      serviceTitle: "Fine Dining",
      serviceDesc: "Multiple restaurants offering international cuisine, prepared by award-winning chefs using local ingredients."
    },
    {
      serviceIcon: <FaSwimmingPool className="text-3xl" />,
      serviceTitle: "Infinity Pool",
      serviceDesc: "Stunning infinity pool with panoramic views, poolside service, and comfortable lounging areas."
    },
    {
      serviceIcon: <FaSpa className="text-3xl" />,
      serviceTitle: "Wellness Spa",
      serviceDesc: "Revitalizing spa treatments, massage therapy, and wellness programs for complete relaxation."
    },
    {
      serviceIcon: <FaConciergeBell className="text-3xl" />,
      serviceTitle: "Concierge Service",
      serviceDesc: "Personalized assistance for tours, transportation, reservations, and local experiences."
    },
    {
      serviceIcon: <FaWifi className="text-3xl" />,
      serviceTitle: "High-Speed Connectivity",
      serviceDesc: "Complimentary high-speed WiFi throughout the property with dedicated business center access."
    }
  ];

  const features = [
    { icon: "🏨", title: "200+ Rooms", desc: "Luxury suites & villas" },
    { icon: "⭐", title: "5-Star Rating", desc: "Award-winning service" },
    { icon: "🌍", title: "Prime Location", desc: "City center access" },
    { icon: "💰", title: "Best Price", desc: "Guaranteed lowest rates" }
  ];

  return (
    <>
      {/* Hero Section with Booking Form */}
      <div className="relative min-h-screen bg-gray-400 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 text-white">
              {/* Premium Badge */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-white/20">
                <div className="h-2 w-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping"></div>
                <span className="text-lg font-semibold">
                  🏆 Luxury Hotel & Resort Since 1995
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-100">
                  Experience Luxury
                </span>
                <span className="block mt-4">Redefined</span>
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100/90 leading-relaxed">
                Where impeccable service meets breathtaking design. Discover an oasis of tranquility with world-class amenities, gourmet dining, and unforgettable experiences.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <div className="font-bold text-lg">{feature.title}</div>
                    <div className="text-sm text-blue-100/70">{feature.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Booking Form Card */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Book Your Stay</h3>
                <BookingForm />
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-white/80">
                    <div className="flex items-center space-x-2">
                      <FaShieldAlt />
                      <span className="text-sm">Secure Booking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Best Price Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Luxury Spaces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning accommodations, amenities, and breathtaking views that make every stay memorable.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[slider1, slider2, slider3, slider1, slider2, slider3].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={img} 
                    alt={`Hotel View ${index + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold">Luxury Suite {index + 1}</h3>
                      <p className="text-white/80 mt-2">Starting from ${299 + index * 50}/night</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
              <span className="text-blue-700 font-semibold">✨ Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">Hospitality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class services designed to make your stay truly exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
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
      </div>

      {/* Gallery Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white md:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full mb-4">
              <span className="text-purple-700 font-semibold">📸 Visual Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a visual tour through our luxurious spaces and memorable experiences.
            </p>
          </div>
          <GridLayout />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full mb-4">
              <span className="text-orange-700 font-semibold">❤️ Guest Love</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Guests Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our valued guests about their exceptional experiences.
            </p>
          </div>
          <Testimonials />
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Book your stay today and experience luxury redefined. Special offers available for early bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
              Book Now
              <span className="ml-3 group-hover:translate-x-2 transition-transform inline-block">→</span>
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
          <div className="mt-10 text-blue-100/80 text-sm">
            <p>📞 Call us: +1 (800) 123-4567 | ✉️ Email: reservations@luxuryhotel.com</p>
          </div>
        </div>
      </div>
    </>
  );
}