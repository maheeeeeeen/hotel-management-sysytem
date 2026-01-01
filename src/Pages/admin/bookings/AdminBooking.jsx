import React, { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";

import { Heading2, ParagraphText } from "../../../Components/Typography";
import { bookingService } from "../../../services/BookingService";
import { Eye, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { AiOutlineStop } from "react-icons/ai";
import Loader from "../../../Components/Loader";


export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState(null);
  const [reason, setCancelReason] = useState("");

  const bookingservice = new bookingService();

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await bookingservice.getAllBookings();
        setBookings(res);
        setLoading(false)
      } catch (err) {
        console.error(err);
      }
    }

    fetchBookings();
  }, []);

  // Confirm cancellation handler
  async function handleConfirmCancellation() {
    try {
      const response = await bookingservice.cancelBooking(selectedBookingId, {
        reason: reason,
      });

      console.log("Cancelled:", response);

      // Close modal & reset reason
      setIsOpen(false);
      setCancelReason("");

      // Refresh bookings list
      const updated = await bookingservice.getAllBookings();
      setBookings(updated);
    } catch (error) {
      console.log("Cancellation Error:", error);
    }
  }
 if (loading) {
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <Loader />
    </div>
  );
}
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <Heading2 text="Bookings" />
        <ParagraphText text="All bookings" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                S.no
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Room Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Check-in
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Check-out
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((b, index) => (
              <tr key={b._id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{b.guest?.name}</td>
                <td className="px-6 py-4">{b.room?.roomNumber}</td>
                <td className="px-6 py-4">{b.room?.type}</td>
                <td className="px-6 py-4">
                  {new Date(b.checkInDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">
                  {" "}
                  {new Date(b.checkOutDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">{b.status}</td>

                <td className="px-6 py-4 flex items-center gap-3">
                  <Link to={`/admin/booking/${b._id}`}>
                    <button className="text-blue-600 hover:text-blue-900">
                      <Eye className="h-5 w-5" />
                    </button>
                  </Link>

                  {b.status !== "cancelled" && b.status !== "confirmed"  ? (
                    <button
                      onClick={() => {
                        setSelectedBookingId(b._id);
                        setIsOpen(true);
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  ) : <AiOutlineStop className="text-red-600 hover:text-red-900"/>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cancellation Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <Dialog.Panel className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <Dialog.Title className="text-xl font-semibold mb-3">
              Cancel Booking
            </Dialog.Title>

            <p className="text-gray-600 text-sm mb-2">
              Please provide a reason for cancelling this booking:
            </p>

            <textarea
              name="reason"
              className="w-full border rounded-md p-3 text-sm focus:ring focus:ring-blue-200"
              rows="4"
              value={reason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Write cancellation reason..."
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setCancelReason("");
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Close
              </button>

              <button
                onClick={handleConfirmCancellation}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Confirm Cancel
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
