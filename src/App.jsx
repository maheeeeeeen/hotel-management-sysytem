import { Route , Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import HomePage from "./Pages/Guest/HomePage";
import { SignInForm } from './Pages/SignIn';
import { SignUpForm } from './Pages/SignUp';
import ContactUs from './Pages/Guest/ContactUs';
import AboutUs from './Pages/Guest/AboutUs';
import Rooms from './Pages/Guest/Rooms';
import Profile from './Pages/Profile/Profile';
import RoomDetails from './Pages/Guest/RoomDetails';
import ConfirmationBookingPage from './Pages/Guest/ConfirmationBookingPage';

function App() {

  return (
    <>
  
    <Routes>
      <Route element={<Layout/>} >
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
    </Routes>

    </>
  )
}

export default App
