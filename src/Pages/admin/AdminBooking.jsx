import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

// Icons (you might need to replace with different icon library)
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Heading2, ParagraphText } from "../../Components/Typography";

export default function AdminBookings() {
     const [rooms, setRooms] = useState([
    { id: 1, number: "101", type: "Deluxe", status: "Available", price: 8000 },
    { id: 2, number: "102", type: "Standard", status: "Booked", price: 6000 },
    { id: 3, number: "103", type: "Suite", status: "Maintenance", price: 12000 },
  ]);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState({
    id: "",
    number: "",
    type: "",
    status: "",
    price: "",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      {/* Table Header */}
      <div className="px-6 py-4  border-b border-gray-200 ">
      
        <Heading2 text="Bookings"/>
        <ParagraphText text=" All bookings"/>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Post
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Congrats! You deserved it!</div>
                  <div className="text-xs text-gray-500 mt-1">By: uid2 • 1 hour ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  post123
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>2</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>1</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>2 replies</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Top-level
                </span>
              </td>
            </tr>
            
            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">I totally agree with this!</div>
                  <div className="text-xs text-gray-500 mt-1">By: uid4 • 30 minutes ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  post123
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>5</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>0</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>0 replies</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Reply
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Does anyone have the study materials for next week?</div>
                  <div className="flex space-x-2 mt-1">
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Anonymous</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  post456
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>8</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>2</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>3 replies</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Top-level
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">I can share my notes with you, check your DMs</div>
                  <div className="text-xs text-gray-500 mt-1">By: uid7 • 1 hour ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  post456
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>12</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>0</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>1 reply</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Reply
                </span>
              </td>
            </tr>

            <tr className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4">
                <div className="max-w-md">
                  <div className="text-sm text-gray-900">Thanks for sharing this information!</div>
                  <div className="text-xs text-gray-500 mt-1">By: uid9 • 15 minutes ago</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  post789
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <span>3</span>
                  </div>
                  <div className="flex items-center text-red-600">
                    <span>0</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>0 replies</span>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  Top-level
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
  )
}
