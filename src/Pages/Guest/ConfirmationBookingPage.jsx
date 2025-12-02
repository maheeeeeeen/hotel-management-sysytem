import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bookingService } from "../../services/BookingService";

export default function ConfirmationBookingPage() {
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
  } = booking;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-4">
      <h1 className="text-3xl font-bold mb-4">Booking Confirmation</h1>

      {/* Room Images Carousel */}
      {room.ImageUrl && room.ImageUrl.length > 0 && (
        <div className="flex overflow-x-scroll gap-4 mb-4">
          {room.ImageUrl.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Room image ${index + 1}`}
              className="w-64 h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      )}

      <p>
        <strong>Room Number:</strong> {room.roomNumber}
      </p>
      <p>
        <strong>Type:</strong> {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
      </p>
      <p>
        <strong>Description:</strong> {room.description}
      </p>
      <p>
        <strong>Check-in Date:</strong>{" "}
        {new Date(checkInDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Check-out Date:</strong>{" "}
        {new Date(checkOutDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Total Amount:</strong> Rs {totalAmount.toLocaleString()}
      </p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={status === "cancelled" ? "text-red-600" : "text-green-600"}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </p>

      {/* Amenities */}
      {room.amenities && room.amenities.length > 0 && (
        <div>
          <strong>Amenities:</strong>
          <ul className="list-disc list-inside mt-1">
            {room.amenities.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Meal Plan */}
      {room.mealPlan && (
        <p>
          <strong>Meal Plan:</strong> {room.mealPlanDescription || room.mealPlan}
        </p>
      )}
    </div>
  );
}
