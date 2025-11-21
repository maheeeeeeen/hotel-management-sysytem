import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// importing images
import slider1 from "../../assets/hotelSlider1.jpg"
import slider2 from "../../assets/hotelSlider2.jpg"
import slider3 from "../../assets/hotelSlider3.jpg"

// import required modules
import { Pagination } from 'swiper/modules';
import { SignInForm } from '../SignIn';
import { GridCard } from '../../Components/Cards';


import { IoLocationOutline } from "react-icons/io5";
import { GridLayout } from '../../Components/ImageComponent';
import { Testimonials } from '../../Components/Testimonials';
import { Heading1, Heading2, ParagraphText } from '../../Components/Typography';
import { BookingForm } from './BookingForm';

export default function HomePage() {
  const services = [
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      serviceIcon: <IoLocationOutline />,
      serviceTitle: "Travel Plan",
      serviceDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
    }

  ]

  return (
    <>
      {/* slider */}
      <div className="relative">
        {/* Swiper Component */}
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full"
        >
          <div className="">
            <SwiperSlide className="opacity-80 flex items-center justify-center bg-[#444] text-center text-lg relative">
              <img src={slider1} className="w-full h-full object-cover" />
              <div className='absolute top-50 left-0 w-1/2 p-10'>
                <h1 className='text-9xl' >First Heading</h1>
                <p className='text-xl mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam labore consequuntur, magnam non voluptatem saepe repellendus tempora laborum earum laboriosam rem. Veniam magnam nostrum nihil libero eius saepe in.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="opacity-80 flex items-center justify-center bg-[#444] text-center text-lg relative">
              <img src={slider2} className="w-full h-full object-cover" />
              <div className='absolute top-50 left-0 w-1/2 p-10'>
                <h1 className='text-9xl text-white' >First Heading</h1>
                <p className='text-xl mt-5 text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam labore consequuntur, magnam non voluptatem saepe repellendus tempora laborum earum laboriosam rem. Veniam magnam nostrum nihil libero eius saepe in.</p>
              </div>

            </SwiperSlide>
            <SwiperSlide className="opacity-80 flex items-center justify-center bg-[#444] text-center text-lg relative">
              <img src={slider3} className="w-full h-full object-cover" />
              <div className='absolute top-50 left-0 w-1/2 p-10'>
                <h1 className='text-9xl' >First Heading</h1>
                <p className='text-xl mt-5' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam labore consequuntur, magnam non voluptatem saepe repellendus tempora laborum earum laboriosam rem. Veniam magnam nostrum nihil libero eius saepe in.</p>
              </div>
            </SwiperSlide>
          </div>

          {/* Form on the Right Side */}
          <div className="absolute top-35 right-30 p-6 bg-white rounded-lg shadow-lg w-full sm:w-auto max-w-md z-10">
            <BookingForm />
          </div>
        </Swiper>
      </div>


      {/* 2nd component */}
      {/* <div className='w-full mt-10 mb-10'>
        <div className='w-full flex' >
          <div>huidhuiwedhodhow3yh</div>
          <div className='flex' >
            <div className='w-90 h-90'><img src={slider1} alt="" /></div>
            <div className='w-90 h-90'><img src={slider2} alt="" /></div>
          </div>
        </div>
      </div> */}


      {/* 3rd component */}
      <div className="max-w-6xl mx-auto mt-20 text-center ">
        <h1 className='text-4xl' >OUR SERVICES</h1>
        <p  >these are our services</p>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 mt-10">
          {services.map((s) => (
            <GridCard key={s.serviceTitle} icon={s.serviceIcon} title={s.serviceTitle} desc={s.serviceDesc} />
          ))}
        </div>
      </div>


      <div>
        <GridLayout />
      </div>



      {/* 4rth component */}
      <div>
        <h1 className='text-4xl text-center' >TESTIMONIALS</h1>
        <p>these are our testimonials</p>
        <Testimonials />
      </div>

    </>
  );
}