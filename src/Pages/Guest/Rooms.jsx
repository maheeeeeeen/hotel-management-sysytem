import React, { useEffect, useState } from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1 } from "../../Components/Typography";
import { RoomCard } from "../../Components/Cards";

import img1 from "../../assets/hotelSlider1.jpg";
import img2 from "../../assets/hotelSlider2.jpg";
import img3 from "../../assets/hotelSlider3.jpg";
import { RoomService } from "../../services/RoomService";

export default function Rooms() {
  const data = [
    {
      title: "Room 1",
      img: img1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "available",
    },
    {
      title: "Room 2",
      img: img2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "occupied",
    },
    {
      title: "Room 3",
      img: img3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "available",
    },
    {
      title: "Room 3",
      img: img2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "maintenance",
    },
    {
      title: "Room 3",
      img: img3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "available",
    },
    {
      title: "Room 3",
      img: img1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris, bibendum eget sapien ac, ultrices rhoncus ipsum.",
      price: "Rs 30000",
      space: "occupied",
    },
  ];
  const [rooms , setRooms]= useState([])
  const service = new RoomService();

  async function AllRooms(){
    try {
      const res = await service.AllRooms()
      console.log(res)
      setRooms(res)
     
      
    } catch (error) {
      console.log("Error fetching rooms" , error)
    }
  }

  useEffect(()=>{
    AllRooms()
   
  },[])

  return (
    <div>
      <TopHeroSection>
        <Heading1 text="Rooms" />
      </TopHeroSection>
      <div className="space-y-8 mb-8 mt-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center">
          {rooms.map((r) => (
            
            <RoomCard
              title={r.type}
              type={r.roomNumber}
              ameneties={r.amenities.join(", ")} 
              img={r.ImageUrl}
              space={r.status}
              price={r.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
