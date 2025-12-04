import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/Guest/HomePage";
import { SignInForm } from "./Pages/SignIn";
import { SignUpForm } from "./Pages/SignUp";
import ContactUs from "./Pages/Guest/ContactUs";
import AboutUs from "./Pages/Guest/AboutUs";
import Rooms from "./Pages/Guest/Rooms";
import Profile from "./Pages/Profile/Profile";
import RoomDetails from "./Pages/Guest/RoomDetails";
import ConfirmationBookingPage from "./Pages/Guest/ConfirmationBookingPage";
import { SidebarDemo } from "./Components/SideBar";
import AdminDashboard from "./Pages/admin/Dashboard";
import AdminRooms from "./Pages/admin/rooms/AdminRooms";
import ProtectedRoute from "./lib/ProtectedRoute";
import AdminBookings from "./Pages/admin/AdminBooking";
import Feedback from "./Pages/admin/Feedback";
import Users from "./Pages/admin/User";
import AddRoomForm from "./Pages/admin/rooms/AddRoom";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/room/:id" element={<RoomDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/booking/:id" element={<ConfirmationBookingPage />} />
        </Route>

        {/* Admin dashboard Routes */}

        <Route
          
          element={
            <ProtectedRoute allowedRole="admin">
              <SidebarDemo />
            </ProtectedRoute>
          }
        >
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/rooms" element={<AdminRooms />} />
          <Route path="/admin/addroom" element={<AddRoomForm />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/admin/feedbacks" element={<Feedback />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
