import React, { useEffect, useState } from "react";
import { RoomService } from "../../services/RoomService";
import { useParams } from "react-router-dom";
import {
  Star,
  Wifi,
  Tv,
  Coffee,
  Wind,
  Dumbbell,
  Utensils,
  MapPin,
  Bed,
  Users,
  Shield,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { BookingModal } from "../../Components/Modal";
import Button from "../../Components/Button";
import Loader from "../../Components/Loader";

// If you don't want to use Lucide icons, you can remove them and use text instead

export default function RoomDetails() {
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const service = new RoomService();
  const { id } = useParams();
  const [openBooking, setOpenBooking] = useState(false);

  async function getRoomByid(id) {
    try {
      setLoading(true);
      setError(null);
      const res = await service.getRoomById(id);
      setRoom(res);
    } catch (error) {
      console.error("Error fetching room", error);
      setError("Failed to load room details. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRoomByid(id);
  }, [id]);

  const nextImage = () => {
    if (room?.ImageUrl?.length) {
      setActiveImageIndex((prev) =>
        prev === room.ImageUrl.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (room?.ImageUrl?.length) {
      setActiveImageIndex((prev) =>
        prev === 0 ? room.ImageUrl.length - 1 : prev - 1
      );
    }
  };
if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center ">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
            <p>{error}</p>
          </div>
          <button
            onClick={() => getRoomByid(id)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No room found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image Section */}
      <div className="relative h-96 md:h-[500px] w-5/6 mx-auto bg-red-900">
        {room.ImageUrl?.length > 0 ? (
          <>
            <img
              src={room.ImageUrl[activeImageIndex]}
              alt={`Room ${activeImageIndex + 1}`}
              className="w-full h-full "
            />
            {room.ImageUrl.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {room.ImageUrl.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === activeImageIndex ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center">
            <Bed className="w-24 h-24 text-white/30" />
          </div>
        )}

        {/* Room Status Badge */}
        <div className="absolute top-6 left-6">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              room.status === "available"
                ? "bg-green-100 text-green-800"
                : room.status === "occupied"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {room.status?.charAt(0).toUpperCase() + room.status?.slice(1)}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left Column - Room Details */}
          <div className="lg:col-span-2">
            {/* Room Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Room {room.roomNumber}
                </h1>
                <div className="text-right">
                  <p className="text-3xl font-bold text-blue-600">
                    Rs {room.price}
                    <span className="text-lg text-gray-500">/night</span>
                  </p>
                  <p className="text-gray-500 text-sm">Inclusive of taxes</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Floor {room.floor}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  <span>2 Adults</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2" />
                  <span>1 King Bed</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {room.description}
                </p>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Amenities & Services
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {room.amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col items-center text-center">
                      <span className="text-sm font-medium text-gray-700 capitalize">
                        {amenity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meal Plan Section */}
            {(room.mealPlan || room.mealPlanDescription) && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Dining
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <div className="flex items-start mb-4">
                    <Utensils className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {room.mealPlan || "Meal Plan"}
                      </h3>
                      {room.mealPlanDescription && (
                        <p className="text-gray-700">
                          {room.mealPlanDescription}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Images */}
            {room.ImageUrl?.length > 1 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {room.ImageUrl.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`relative overflow-hidden rounded-xl transition-all duration-200 ${
                        index === activeImageIndex
                          ? "ring-2 ring-blue-500 ring-offset-2"
                          : "hover:ring-2 hover:ring-blue-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Room view ${index + 1}`}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Booking & Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Booking Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      Rs {room.price}
                    </p>
                    <p className="text-gray-500">per night</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.8</span>
                    <span className="text-gray-500 ml-1">(128 reviews)</span>
                  </div>
                </div>
                <Button text="Book now" onClick={() => setOpenBooking(true)} />

                {/* Quick Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-3">
                    <Shield className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">
                      Secure booking guaranteed
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-gray-700">
                      Free cancellation up to 24 hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Details Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Room Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Room Number</span>
                    <span className="font-semibold">{room.roomNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Floor</span>
                    <span className="font-semibold">{room.floor}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Status</span>
                    <span
                      className={`font-semibold ${
                        room.status === "available"
                          ? "text-green-600"
                          : room.status === "occupied"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {room.status?.charAt(0).toUpperCase() +
                        room.status?.slice(1)}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Meal Plan</span>
                    <span className="font-semibold">
                      {room.mealPlan || "Not specified"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={openBooking}
        onClose={() => setOpenBooking(false)}
        roomId={room._id}
      />
    </div>
  );
}
