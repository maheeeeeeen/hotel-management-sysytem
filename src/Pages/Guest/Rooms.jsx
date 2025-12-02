import React, { useEffect, useState } from "react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1 } from "../../Components/Typography";
import { RoomCard } from "../../Components/Cards";

import { RoomService } from "../../services/RoomService";

export default function Rooms() {
 
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
              ameneties={r.amenities} 
              img={r.ImageUrl[0]}
              space={r.status}
              price={r.price}
              link={`/room/${r._id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
