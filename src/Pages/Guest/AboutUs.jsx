import React from "react";
import { TiTick } from "react-icons/ti";
import { FaStar, FaAward, FaUsers, FaHotel } from "react-icons/fa";
import { MdOutlineHotelClass } from "react-icons/md";
import { GiWorld } from "react-icons/gi";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2, ParagraphText } from "../../Components/Typography";
import img1 from '../../assets/hotelSlider1.jpg';
import img2 from '../../assets/hotelSlider2.jpg';
import img3 from '../../assets/hotelSlider3.jpg';

export default function AboutUs() {
  const images = [
    { src: img1, alt: "Luxury Lobby" },
    { src: img2, alt: "Premium Suite" },
    { src: img3, alt: "Fine Dining" },
    { src: img1, alt: "Spa Facility" },
    { src: img2, alt: "Conference Hall" },
    { src: img3, alt: "Swimming Pool" }
  ];

  const features = [
    "Luxurious rooms with panoramic views",
    "24/7 concierge service",
    "World-class spa and wellness center",
    "Multiple fine dining restaurants",
    "State-of-the-art conference facilities",
    "Indoor and outdoor swimming pools",
    "Fitness center with personal trainers",
    "Airport transfer service"
  ];

  const stats = [
    { icon: <FaStar className="text-yellow-500" />, value: "5 Star", label: "Rating" },
    { icon: <FaHotel className="text-blue-500" />, value: "250+", label: "Rooms" },
    { icon: <FaUsers className="text-green-500" />, value: "50+", label: "Staff" },
    { icon: <FaAward className="text-purple-500" />, value: "15+", label: "Awards" },
    { icon: <GiWorld className="text-red-500" />, value: "25+", label: "Countries" },
    { icon: <MdOutlineHotelClass className="text-indigo-500" />, value: "10+", label: "Years" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "Committed to delivering exceptional service and creating memorable experiences for every guest."
    },
    {
      title: "Integrity",
      description: "Operating with honesty and transparency in all our business practices."
    },
    {
      title: "Sustainability",
      description: "Implementing eco-friendly practices to protect our environment for future generations."
    },
    {
      title: "Innovation",
      description: "Continuously improving our services and facilities with the latest technology and trends."
    }
  ];

  return (
    <div className="bg-gray-50">
      <TopHeroSection backgroundImage={img1}>
        <div className="text-center">
          <Heading1 text="About Luxury Star Hotel" className="text-white drop-shadow-lg" />
          <p className="text-white text-lg mt-4 max-w-2xl mx-auto drop-shadow-md">
            Where luxury meets comfort, and every moment becomes a cherished memory
          </p>
        </div>
      </TopHeroSection>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Luxury Star Hotel
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nestled in the heart of the city, Luxury Star Hotel has been synonymous with 
              unparalleled hospitality and sophistication since 2013. Our commitment to 
              excellence has made us the preferred choice for discerning travelers worldwide.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Premier Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <TiTick className="text-green-500 text-xl flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

       

      
        </div>
      </section>


    </div>
  );
}