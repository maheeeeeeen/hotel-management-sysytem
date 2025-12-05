import React, { useEffect, useState } from "react";
import { bookingService } from "../../services/BookingService";
import { AlertCircle, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

export default function BookingTab() {
  const [bookings, setBookings] = useState([]);

  const bookingservice = new bookingService();
  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await bookingservice.getAllUserBookings();
        setBookings(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBookings();
  }, []);
  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
      case "completed":
        return <CheckCircle size={16} className="text-green-600" />;
      case "cancelled":
        return <XCircle size={16} className="text-red-600" />;
      case "pending":
        return <Clock size={16} className="text-yellow-600" />;
      default:
        return <AlertCircle size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "confirmed":
      case "completed":
        return "bg-green-50 text-green-700 border-green-200";
      case "cancelled":
        return "bg-red-50 text-red-700 border-red-200";
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-5 bg-gradient-to-r from-gray-50 to-white">
          <h3 className="text-xl font-semibold text-gray-900">
            Booking History
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            A complete list of your room bookings with details
          </p>
        </div>

        {/* Body */}
        <div className="p-6">
          {bookings.length === 0 ? (
            <div className="text-center py-12">
              <Calendar size={52} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-600 text-lg font-medium">
                No bookings yet
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Your booking history will appear here once you book a room.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all duration-200 shadow-sm"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex-1">
                      {/* Status */}
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {getStatusIcon(booking.status)}
                        {booking.status?.charAt(0).toUpperCase() +
                          booking.status?.slice(1)}
                      </div>

                      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        {/* Room Number */}
                        <div>
                          <p className="text-gray-500 font-medium">
                            Room Number
                          </p>
                          <p className="text-gray-800 mt-0.5 font-semibold">
                            {booking.room?.roomNumber}
                          </p>
                        </div>

                        {/* Room Type */}
                        <div>
                          <p className="text-gray-500 font-medium">Room Type</p>
                          <p className="text-gray-800 mt-0.5 capitalize font-semibold">
                            {booking.room?.type}
                          </p>
                        </div>

                        {/* Price */}
                        <div>
                          <p className="text-gray-500 font-medium">Price</p>
                          <p className="text-gray-800 mt-0.5 font-semibold">
                            Rs. {booking.room?.price?.toLocaleString()}
                          </p>
                        </div>

                        {/* Total Amount */}
                        <div>
                          <p className="text-gray-500 font-medium">
                            Total Amount
                          </p>
                          <p className="text-gray-800 mt-0.5 font-semibold">
                            Rs. {booking.totalAmount?.toLocaleString()}
                          </p>
                        </div>

                        {/* Check-In */}
                        <div>
                          <p className="text-gray-500 font-medium">Check-In</p>
                          <p className="text-gray-800 mt-0.5 font-semibold">
                            {new Date(booking.checkInDate).toLocaleDateString()}
                          </p>
                        </div>

                        {/* Check-Out */}
                        <div>
                          <p className="text-gray-500 font-medium">Check-Out</p>
                          <p className="text-gray-800 mt-0.5 font-semibold">
                            {new Date(
                              booking.checkOutDate
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 my-5"></div>

                      {/* Amenities */}
                      <div>
                        <p className="text-gray-600 text-sm font-medium mb-1.5">
                          Amenities Included:
                        </p>
                        <ul className="list-disc ml-5 text-gray-600 text-sm space-y-0.5">
                          {booking.room?.amenities?.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Footer Dates */}
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-500">
                        <p>
                          <span className="font-medium">Created:</span>{" "}
                          {new Date(booking.createdAt).toLocaleString()}
                        </p>
                        <p>
                          <span className="font-medium">Updated:</span>{" "}
                          {new Date(booking.updatedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
