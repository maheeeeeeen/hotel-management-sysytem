import React, { useEffect, useState } from "react";
import TopHeroSection from "../Components/TopHeroSection";
import { Heading1 } from "../Components/Typography";
import Button from "../Components/Button";
import { Input } from "../Components/ui/InputUI.";
import { 
  Mail, 
  Phone, 
  MapPin, 
  User, 
  Edit2, 
  Save, 
  X, 
  Calendar,
  CreditCard,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";
import AuthService from "../services/AuthService";
import { bookingService } from "../services/BookingService";

export default function Profile() {
  const [user, setUser] = useState({});
  const [bookings, setBookings] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});

  const service = new AuthService();
  const bookingservice = new bookingService();

  async function GetProfile() {
    try {
      const res = await service.getProfile();
      console.log(res);
      setUser(res);
      setEditedUser(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function getBookings() {
    try {
      const res = await bookingservice.getAllBookings();
      setBookings(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSave = async () => {
    try {
      // Add your update API call here
      // await service.updateProfile(editedUser);
      setUser(editedUser);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
      case 'completed':
        return <CheckCircle size={16} className="text-green-600" />;
      case 'cancelled':
        return <XCircle size={16} className="text-red-600" />;
      case 'pending':
        return <Clock size={16} className="text-yellow-600" />;
      default:
        return <AlertCircle size={16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'confirmed':
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'pending':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  useEffect(() => {
    GetProfile();
    getBookings();
  }, []);

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
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                <Edit2 size={14} />
              </button>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-1">
              {user.name || "Full Name"}
            </h2>
            <p className="text-gray-600 text-sm mb-2">Front Desk Manager</p>
            <p className="text-gray-500 text-xs mb-4">EMP-2045</p>
            
            <div className="flex justify-center space-x-2 text-xs text-gray-500">
              <span>Member since 2024</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Booking Summary</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Bookings</span>
                <span className="font-semibold text-gray-900">{bookings.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Active</span>
                <span className="font-semibold text-green-600">
                  {bookings.filter(b => b.status === 'confirmed').length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Completed</span>
                <span className="font-semibold text-blue-600">
                  {bookings.filter(b => b.status === 'completed').length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Personal Information Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Personal Information
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Manage your personal details and contact information
                  </p>
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Button
                      text="Cancel"
                      onClick={handleCancel}
                      variant="outline"
                      size="sm"
                      icon={<X size={16} />}
                    />
                    <Button
                      text="Save Changes"
                      onClick={handleSave}
                      size="sm"
                      icon={<Save size={16} />}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900 flex items-center gap-2">
                  <Mail size={18} className="text-gray-500" />
                  Contact Information
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input 
                      value={isEditing ? editedUser.email : user.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className={!isEditing ? "bg-gray-50 border-gray-200" : ""}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    {user.number ? (
                      <Input 
                        value={isEditing ? editedUser.number : user.number}
                        onChange={(e) => handleInputChange('number', e.target.value)}
                        disabled={!isEditing}
                        className={!isEditing ? "bg-gray-50 border-gray-200" : ""}
                      />
                    ) : (
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50">
                        <span className="text-gray-500 text-sm">
                          No contact number
                        </span>
                        {isEditing && (
                          <Button text="Add" size="sm" variant="outline" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h4 className="text-md font-medium text-gray-900 flex items-center gap-2">
                  <MapPin size={18} className="text-gray-500" />
                  Address Information
                </h4>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Street Address
                  </label>
                  <Input 
                    value={isEditing ? editedUser.address : (user.address || "123 Sunset Street, California")}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    disabled={!isEditing}
                    className={!isEditing ? "bg-gray-50 border-gray-200" : ""}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Information Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
              <h3 className="text-lg font-semibold text-gray-900">
                Booking History
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                View and manage your room bookings
              </p>
            </div>

            <div className="p-6">
              {bookings.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg mb-2">No bookings yet</p>
                  <p className="text-gray-400 text-sm">
                    Your booking history will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {bookings.map((booking) => (
                    <div
                      key={booking._id}
                      className="p-4 rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                              {getStatusIcon(booking.status)}
                              {booking.status?.charAt(0).toUpperCase() + booking.status?.slice(1) || 'Unknown'}
                            </div>
                           
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-gray-600">Room</p>
                              <p className="font-semibold text-gray-900">
                                {booking.room?.roomNumber || "N/A"} • {booking.room?.type}
                              </p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-600">Check-in</p>
                              <p className="font-medium text-gray-900">
                                {new Date(booking.checkInDate).toLocaleDateString()}
                              </p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-600">Check-out</p>
                              <p className="font-medium text-gray-900">
                                {new Date(booking.checkOutDate).toLocaleDateString()}
                              </p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-gray-600">Total</p>
                              <p className="font-semibold text-indigo-600">
                                ₹{booking.room?.price || "N/A"}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button 
                            text="Details" 
                            size="sm" 
                            variant="outline"
                          />
                          {booking.status === 'confirmed' && (
                            <Button 
                              text="Modify" 
                              size="sm" 
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}