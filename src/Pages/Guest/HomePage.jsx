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

export default function HomePage() {
  return (
    <>
      {/* slider */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className='position-relative'>
          <SwiperSlide><img src={slider1} className='w-full  ' /></SwiperSlide>
          <SwiperSlide><img src={slider2} className='  ' /></SwiperSlide>
          <SwiperSlide><img src={slider3} className='  ' /></SwiperSlide>
          <div className='position-absolute' >
            <SignInForm />
          </div>
        </div>
      </Swiper>

        {/* 2nd component */}
      <div className='w-full mt-10 mb-10'>
        <div className='w-full flex' >
          <div>huidhuiwedhodhow3yh</div>
          <div className='flex' >
            <div><img src={slider1} alt="" /></div>
            <div><img src={slider2} alt="" /></div>
          </div>
        </div>
      </div>



    </>
  );
}