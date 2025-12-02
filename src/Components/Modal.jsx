import { useState } from "react";
import { bookingService } from "../services/BookingService";
import { useNavigate } from "react-router-dom";

export function BookingModal({ isOpen, onClose, roomId }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const service = new bookingService();
  const navigate = useNavigate()
  if (!isOpen) return null;

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await service.createbooking({
        room: roomId,
        checkInDate,
        checkOutDate,
      });
      console.log(res);
      navigate(`/booking/${res.booking._id}`);
      

      setMessage({ type: "success", text: "Booking Successful!" });
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong",
      });
    }

    setLoading(false);
  };

  return (
<div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center z-50">      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Book Room</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-xl"
          >
            &times;
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            className={`mb-3 text-sm ${
              message.type === "error" ? "text-red-600" : "text-green-600"
            }`}
          >
            {message.text}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleBooking}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Check-in Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Check-out Date</label>
            <input
              type="date"
              className="w-full border px-3 py-2 rounded"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}
