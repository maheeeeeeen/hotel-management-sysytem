import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../../Components/InputFields";
import { RoomService } from "../../../services/RoomService";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { addRoomSchema } from "../../../services/validation/zodSchema";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function AddRoomForm() {
  const { id } = useParams();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addRoomSchema),
    defaultValues: {
      roomNumber: 1,
      description: "",
      floor: 1,
      maxGuests: 2,
      mealPlan: "room_only",
      type: "single",
      price: 0,
      status: "available",
      amenities: "",
    },
    mode: "onChange",
  });

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const service = new RoomService();

  async function getRoomByid(id) {
    try {
      const res = await service.getRoomById(id);
      console.log(res);
      reset({
        roomNumber: res.roomNumber,
        description: res.description,
        floor: res.floor,
        maxGuests: res.maxGuests,
        mealPlan: res.mealPlan,
        type: res.type,
        price: res.price,
        status: res.status,
        amenities: res.amenities,
      });
      if (res.ImageUrl && res.ImageUrl.length > 0) {
        setPreviewUrls(
          res.ImageUrl.map((img) => (img.startsWith("http") ? img : "no image"))
        );
      }
    } catch (error) {
      console.error("Error fetching room", error);
    } finally {
    }
  }

  useEffect(() => {
    getRoomByid(id);
  }, [id, reset]);

  // Handle multiple image input
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);

    setSelectedFiles((prev) => [...prev, ...newFiles]);

    const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
  };

  // Remove image from preview and list
  const removeImage = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  async function onSubmit(data) {
    try {
      if (!id) {
        const formData = new FormData();

        // Append regular fields
        Object.entries(data).forEach(([key, value]) => {
          if (key === "amenities") {
            formData.append("amenities", JSON.stringify(value.split(",")));
          } else {
            formData.append(key, value);
          }
        });

        // Append files
        selectedFiles.forEach((file) => {
          formData.append("ImageUrl", file);
        });

        const res = await service.createRoom(formData);

        toast("Room Added");
        navigate("/admin/rooms");
        // Reset form + images
        reset();
        setSelectedFiles([]);
        setPreviewUrls([]);
      } else {
        const formData = new FormData();

        // Append normal fields
        Object.entries(data).forEach(([key, value]) => {
          if (key === "amenities") {
            formData.append("amenities", JSON.stringify(value.split(",")));
          } else {
            formData.append(key, value);
          }
        });

        // Append NEW uploaded images only
        selectedFiles.forEach((file) => {
          formData.append("ImageUrl", file);
        });

        const res = await service.updateRoom(id, formData);

        toast("Room Updated");
        navigate("/admin/rooms");
      }
    } catch (error) {
      console.log("errorrrrrr", error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-xl shadow-lg w-full mx-auto border border-gray-100"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Add New Room</h2>
        <p className="text-gray-500 text-sm mt-1">
          Fill in the room details below
        </p>
      </div>

      <div className="space-y-5">
        {/* Room Number + Description */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Room Number
            </label>
            <Input
              type="number"
              name="roomNumber"
              register={register}
              placeholder="Enter Room Number"
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
              options={{ valueAsNumber: true }}
            />
            {errors.roomNumber && (
              <p className="text-red-500 text-sm">
                {errors.roomNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <Input
              name="description"
              placeholder="Enter  Description"
              type="text"
              register={register}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        {/* Floor + Max Guests */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Floor</label>
            <Input
              name="floor"
              placeholder="Enter floor number"
              type="number"
              register={register}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
              options={{ valueAsNumber: true }}
            />
            {errors.floor && (
              <p className="text-red-500 text-sm">{errors.floor.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Max Guests</label>
            <Input
              name="maxGuests"
              type="number"
              placeholder="Enter Max Guest"
              register={register}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
              options={{ valueAsNumber: true }}
            />

            {errors.maxGuests && (
              <p className="text-red-500 text-sm">{errors.maxGuests.message}</p>
            )}
          </div>
        </div>

        {/* Meal Plan */}
        <div>
          <label className="block text-sm font-medium mb-1">Meal Plan</label>
          <select
            name="mealPlan"
            register={register}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white"
          >
            <option value="room_only">Room Only</option>
            <option value="breakfast_only">Breakfast Only</option>
            <option value="half_board">Half Board</option>
            <option value="full_board">Full Board</option>
          </select>
          {errors.mealPlan && (
            <p className="text-red-500 text-sm">{errors.mealPlan.message}</p>
          )}
        </div>

        {/* Room Type + Status */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Room Type</label>
            <select
              name="type"
              register={register}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white"
            >
              <option value="single">Single</option>
              <option value="double">Double</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm">{errors.type.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              register={register}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white"
            >
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
              <option value="cleaning">Cleaning</option>
              <option value="maintenance">Maintenance</option>
            </select>
            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status.message}</p>
            )}
          </div>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <Input
              name="price"
              type="number"
              register={register}
              className="w-full pl-8 pr-3 py-2.5 rounded-lg border"
              options={{ valueAsNumber: true }}
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="block text-sm font-medium mb-1">Amenities</label>
          <Input
            name="amenities"
            register={register}
            placeholder="AC, TV, Wifi"
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300"
          />
          {errors.amenities && (
            <p className="text-red-500 text-sm">{errors.amenities.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Upload Images
          </label>

          <div className="border-2 border-dashed p-4 rounded-lg bg-gray-50">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              name="ImageUrl"
            />
            {errors.ImageUrl && (
              <p className="text-red-500 text-sm">{errors.ImageUrl.message}</p>
            )}
          </div>

          {/* Preview Grid */}
          {previewUrls.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-3">
              {previewUrls.map((url, index) => (
                <div key={index} className="relative">
                  <img
                    src={url}
                    className="w-full h-24 object-cover rounded-lg border"
                  />

                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={uploading}
            className={`w-full py-3 rounded-lg font-medium ${
              uploading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            {uploading ? "Uploading..." : "Add Room"}
          </button>
          <ToastContainer />
        </div>
      </div>
    </form>
  );
}
