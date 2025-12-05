import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

;
import { Heading2, ParagraphText } from "../../../Components/Typography";
import { bookingService } from "../../../services/BookingService";
import { useEffect } from "react";
import { Eye, PencilIcon, TrashIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminBookings() {

  const [bookings, setBookings] = useState([]);

  const bookingservice = new bookingService();
  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await bookingservice.getAllBookings();
        console.log("ressssssssssssss", res)
        setBookings(res);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBookings();
  }, []);


  return (

    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      {/* Table Header */}
      <div className="px-6 py-4  border-b border-gray-200 ">

        <Heading2 text="Bookings" />
        <ParagraphText text=" All bookings" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S.no
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Guest
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Room
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                checkInDate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                checkOutDate
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action Buttons
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

            {bookings.map((b, index) => (
              <tr key={b._id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{b.guest.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{b.room.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(b.checkInDate).toLocaleDateString('en-US', {  year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td className="px-6 py-4 whitespace-nowrap">{b.checkOutDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{b.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center items-center gap-3 ">
                  <Link to={`/admin/booking/${b._id}`}>
                    <button

                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </Link>
                  <button
                    // onClick={() => handleDelete(room.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                  <button
                    // onClick={() => handleDelete(room.id)}
                    className="text-green-600 hover:text-green-900"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                </td>



              </tr>
            ))}



          </tbody>
        </table>
      </div>
    </div>

  )
}

{/* <td >
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
  post456
</span>
</td> */}