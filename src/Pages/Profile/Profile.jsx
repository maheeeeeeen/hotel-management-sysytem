"use client";
import React, { useEffect, useState } from "react";
import { User } from "lucide-react";
import TopHeroSection from "../../Components/TopHeroSection";
import { Heading1 } from "../../Components/Typography";
import AuthService from "../../services/AuthService";
import BookingTab from "./BookingTab";
import PersonalInformation from "./PersonalInformation";
import { motion } from "framer-motion";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const service = new AuthService()
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({});
const navigate = useNavigate()
  // Fetch user from localStorage or API
  
  const fetchUser = async () => {
    try {
      const res = await service.getProfile();
      console.log(res)
      setUser(res);
      
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };
  useEffect(() => {
   
      fetchUser();
    
  }, []);

  

  const tabs = [
    { id: "profile", label: "Profile" },
    { id: "bookings", label: "My Bookings" },
  ];
    const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    navigate("/login");
  };


  return (
    <div className="w-full min-h-screen bg-gray-50/30">
      <TopHeroSection>
        <Heading1 text="My Profile" />
      </TopHeroSection>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-indigo-600 mb-4 mx-auto border-4 border-white shadow-sm">
                <User size={40} />
              </div>
            </div>
       
            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              {user.name || "Full Name"}
            </h2>

            <p className="text-gray-500 text-xs mb-4">{user.email}</p>

            <div className="flex justify-center space-x-2 text-xs text-gray-500 mb-6">
              <span>Member since 2024</span>
            </div>

            {/* Sidebar Tabs */}
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
             <Button text="LogOut" onClick={handleLogout}/>
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "profile" && <PersonalInformation />}
          {activeTab === "bookings" && <BookingTab />}
        </motion.div>
        
      </div>
    </div>
  );
}
