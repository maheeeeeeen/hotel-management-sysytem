import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookingService } from "../../../services/BookingService";
import { Heading2 } from "../../../Components/Typography";

export default function ViewBooking() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const service = new bookingService();

  async function getBookingbyid(id) {
    try {
      const res = await service.getBookingbyId(id);
      console.log(res);
      setBooking(res);
    } catch (error) {
      console.error("Error fetching Booking", error);
    }
  }

  useEffect(() => {
    if (id) getBookingbyid(id);
  }, [id]);

  if (!booking) return <p className="text-center mt-10">Loading booking details...</p>;

  const {
    room,
    checkInDate,
    checkOutDate,
    totalAmount,
    status,
    guest
  } = booking;

  return (
    <div className="w-full mx-auto mt-8 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl space-y-8">
    <div className="flex items-center justify-between mb-2">
      <Heading2 text="Booking Details" className="text-gray-800" />
      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${status === "cancelled" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  
    {/* Room Images Carousel - Enhanced */}
    {room.ImageUrl && room.ImageUrl.length > 0 && (
      <div className="relative group">
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {room.ImageUrl.map((img, index) => (
            <div key={index} className="relative flex-shrink-0">
              <img
                src={img}
                alt={`Room image ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                {index + 1}/{room.ImageUrl.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  
    {/* Two-column layout for room details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Room Information */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100">Room Information</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-semibold">#{room.roomNumber}</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Room Number</p>
                <p className="font-semibold text-gray-800">{room.roomNumber}</p>
              </div>
            </div>
  
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Room Type</p>
                <p className="font-semibold text-gray-800">
                  {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                </p>
              </div>
            </div>
  
            <div>
              <p className="text-sm text-gray-500 mb-2">Description</p>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {room.description}
              </p>
            </div>
          </div>
        </div>
  
        {/* Meal Plan */}
        {room.mealPlan && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-amber-700 font-medium">Meal Plan Included</p>
                <p className="font-semibold text-gray-800">{room.mealPlanDescription || room.mealPlan}</p>
              </div>
            </div>
          </div>
        )}
      </div>
  
      {/* Booking & Guest Information */}
      <div className="space-y-6">
        {/* Booking Timeline */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">Booking Timeline</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Check-in Date</p>
                <p className="font-semibold text-gray-800">{new Date(checkInDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
  
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-500">Check-out Date</p>
                <p className="font-semibold text-gray-800">{new Date(checkOutDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                </svg>
              </div>
            </div>
  
            <div className="bg-gradient-to-r from-blue-500 to-teal-600 p-6 rounded-xl text-white">
              <p className="text-sm opacity-90">Total Amount</p>
              <p className="text-3xl font-bold mt-1">Rs {totalAmount.toLocaleString()}</p>
              <p className="text-sm opacity-90 mt-2">Inclusive of all taxes and charges</p>
            </div>
          </div>
        </div>
  
        {/* Guest Information */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100 flex items-center space-x-2">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span>Guest Information</span>
          </h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-semibold text-gray-800">{guest.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">{guest.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-gray-800">{guest.number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">City</p>
                <p className="font-semibold text-gray-800">{guest.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Amenities Section */}
    {room.amenities && room.amenities.length > 0 && (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-3 border-b border-gray-100 flex items-center space-x-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Amenities</span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {room.amenities.map((a, i) => (
            <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <span className="font-medium text-gray-700">{a}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}
