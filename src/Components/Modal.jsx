import { useEffect, useState } from "react";
import { bookingService } from "../services/BookingService";
import { useNavigate } from "react-router-dom";
import { Input } from "./InputFields";
import { FeedbackService } from "../services/FeedbackService";
import { FeedbackSchema } from "../services/validation/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

export function BookingModal({ isOpen, onClose, roomId }) {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const service = new bookingService();
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleBooking = async (e) => {
    console.log("button clickeddddddd")
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
    <div className="fixed inset-0 bg-gray-900/30 backdrop-blur-sm flex justify-center items-center z-50">
      {" "}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 animate-fadeIn">
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
export function FeedbackModal({ isOpen, onClose }) {
  const service = new FeedbackService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(FeedbackSchema),
    defaultValues: {
      comment: "",
      rating: 0,
    },
    mode: "onChange",
  });

  async function submit(body) {
    try {
      const res = await service.addFeedback(body);
      console.log("Review added", res);

      toast("Feedback submitted successfully!");
      reset();
      onClose();
    } catch (error) {
      toast(error.message || "Something went wrong");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Your Feedback
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          {/* Comment Input */}
          <div>
            <Input
              register={register}
              placeholder="Enter Comment"
              name="comment"
              type="text"
            />
            {errors.comment && (
              <p className="text-red-500 text-sm mt-1">
                {errors.comment.message}
              </p>
            )}
          </div>

          {/* Rating Input */}
          <div>
            <Input
              register={register}
              placeholder="Add rating (1 to 5)"
              name="rating"
              type="number"
            />
            {errors.rating && (
              <p className="text-red-500 text-sm mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}


export function EditInfoModal({ open, onClose, data, onSave }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    value: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        title: data.title,
        description: data.description,
        value: data.value,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Edit Info</h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded mb-2"
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-2 rounded mb-2"
        />

        <input
          name="value"
          value={form.value}
          onChange={handleChange}
          placeholder="Value"
          className="w-full border p-2 rounded mb-4"
        />

        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
