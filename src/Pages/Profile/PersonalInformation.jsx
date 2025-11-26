import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { useForm } from "react-hook-form";

export default function PersonalInformation() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const service = new AuthService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function fetchProfile() {
    try {
      const res = await service.getProfile();
      setUser(res);
      reset(res);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  // Save profile
  const onSubmit = async (data) => {
    try {
      const updatedUser = { ...user, ...data };
      const res = await service.updateUser(updatedUser);
      setUser(res.data || updatedUser);
      setIsEditing(false);
      reset(res.data || updatedUser);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  // ✅ Prevent crash while user = null
  if (!user) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin h-10 w-10 rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-3 space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Personal Information
          </h2>

          <button
            onClick={() => {
              if (isEditing) {
                reset(user);
                setIsEditing(false);
              } else {
                setIsEditing(true);
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                disabled={!isEditing}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !isEditing ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                } ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                {...register("number")}
                type="tel"
                disabled={!isEditing}
                className={`w-full px-4 py-3 border border-gray-300  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !isEditing ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                }`}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                {...register("city")}
                type="text"
                disabled={!isEditing}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  !isEditing ? "bg-gray-100 cursor-not-allowed" : "bg-white"
                }`}
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={user?.email ?? ""}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          {isEditing && (
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
