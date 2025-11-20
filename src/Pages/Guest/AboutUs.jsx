import React from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1, Heading2, ParagraphText } from "../../Components/Typography";
import img1 from '../../assets/hotelSlider1.jpg'
import img2 from '../../assets/hotelSlider2.jpg'
import img3 from '../../assets/hotelSlider3.jpg'
export default function AboutUs() {
    const img = [
        img1,
        img2, 
        img3,
        img1, 
        img2, 
        img3
    ]
  return (
  <div>
  <TopHeroSection>
    <Heading1 text="About Us" />
  </TopHeroSection>

  <div className="max-w-6xl grid md:grid-cols-2 gap-12 px-6 lg:px-12 py-16 items-start mx-auto">

  {/* LEFT SIDE TEXT */}
  <div className="space-y-4 ">
    <Heading2 text="Welcome to Luxury Stay Hospitality" />

    <ParagraphText
      text="Built in 1910 during the Belle Epoque period, this hotel is located in the center of Paris, with easy access to the city's tourist attractions. It offers tastefully decorated rooms."
    />
  </div>

  {/* RIGHT SIDE LIST */}
  <div>
    <ul className="space-y-3">
      {[
        "20% Off On Accommodation",
        "Complimentary Daily Breakfast",
        "3 Pcs Laundry Per Day",
        "Free Wifi",
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-neutral-700 text-lg"
        >
          <span className="h-3 w-3 mt-2 bg-black rounded-full"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>

</div>

 {/* RIGHT SIDE IMAGES */}
    <div className="max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-3 gap-4">
       {img.map((m, i) => (
    <img
      key={i}
      src={m}
      alt=""
      className="rounded-xl object-cover h-40 w-full hover:scale-105 transition duration-300"
    />
  ))}
       
      </div>
    </div>
</div>

  );
}


   