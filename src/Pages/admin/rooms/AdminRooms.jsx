import React, { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

// Icons (you might need to replace with different icon library)
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Heading2, ParagraphText } from "../../../Components/Typography";
import Button from "../../../Components/Button";
import { Link } from "react-router-dom";
import { RoomService } from "../../../services/RoomService";
import { Eye } from "lucide-react";

export default function AdminRooms() {
  const [rooms, setRooms] = useState([]);
  const service = new RoomService();

  async function AllRooms() {
    try {
      const res = await service.AllRooms();
      console.log(res);
      setRooms(res);
    } catch (error) {
      console.log("Error fetching rooms", error);
    }
  }

  async function handleDelete(id) {
    try {
      const res = await service.deleteRoom(id);
      setRooms((prev) => prev.filter((r) => r._id !== id));

      console.log("Deleted data", res);
    } catch (error) {
      console.log("Error deleting room");
    }
  }

  useEffect(() => {
    AllRooms();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
      <div className="px-6 py-4  border-gray-200 flex items-center">
        <div>
          <Heading2 text="Rooms" />
          <ParagraphText text="All rooms" />
        </div>

        <Link to="/admin/addroom" className="ml-auto">
          <Button text="Add room" />
        </Link>
      </div>

      {/* Grey Background Box */}
      <div className=" rounded-lg ">
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  S.no
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Room Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rooms.map((room, index) => (
                <tr key={room._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={room.ImageUrl[0]}
                      className="w-12 h-12 "
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {room.roomNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {room.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        room.status === "available"
                          ? "bg-green-100 text-green-800"
                          : room.status === "occupied"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${room.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex  items-center gap-3">
                    <Link to={`/admin/room/${room._id}`}>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        <Eye className="h-5 w-5" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(room._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                    <Link to={`/admin/editroom/${room._id}`}>
                      <button className="text-green-600 hover:text-green-900 mr-3">
                        <PencilIcon className="h-5 w-5" />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dialog for Add/Edit */}
      {/* <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
       
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
              {isEdit ? "Edit Room" : "Add Room"}
            </Dialog.Title>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Number
                </label>
                <input
                  type="text"
                  value={current.number}
                  onChange={(e) =>
                    setCurrent({ ...current, number: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter room number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <select
                  value={current.type}
                  onChange={(e) =>
                    setCurrent({ ...current, type: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Type</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  value={current.status}
                  onChange={(e) =>
                    setCurrent({ ...current, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Status</option>
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  value={current.price}
                  onChange={(e) =>
                    setCurrent({ ...current, price: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isEdit ? "Update" : "Save"}
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog> */}
    </div>
  );
}
