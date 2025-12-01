import { TiTick } from "react-icons/ti";
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

      <div className="mt-30 mb-10">

        <h1 className="text-4xl text-center" >WELCOME TO LUXURY STAR HOTEL</h1>
        <p className="text-center" >this is the about us page</p>

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

      {/* quotes */}
      <div className=" max-w-7xl mx-auto mt-20" >
        <p className="text-xl max-w-4xl mx-auto text-center mb-20" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quibusdam omnis soluta doloremque asperiores, hic est culpa mollitia nihil, natus obcaecati. Cupiditate blanditiis esse quaerat unde voluptates consectetur at tempora ullam, dolore, eligendi, facilis hic. Repudiandae consequatur, ab ducimus voluptates omnis inventore cumque voluptate fuga laboriosam amet ut, illo mollitia.
        </p>

        <div className="flex justify-evenly mb-10" >
        <div>
          <ul style={{listStyleType:'disc'}}>
           <li>this is the point</li>
           <li>this is the point</li>
           <li>this is the point</li>
           <li>this is the point</li>
           <li>this is the point</li>
          </ul>
        </div>

        <div>
          <ul style={{listStyleType:'disc'}}>
          <li>this is the point</li>
          <li>this is the point</li>
          <li>this is the point</li>
          <li>this is the point</li>
          <li>this is the point</li>
          </ul>
        </div>
        </div>

      </div>
    </div>


  );
}


