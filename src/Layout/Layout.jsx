import React from 'react'
import { NavbarDemo } from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
 return (
  <div className="min-h-screen flex flex-col">
    <NavbarDemo />

    {/* Main content should expand */}
    <main className="grow">
      <Outlet />
    </main>

    <Footer />
  </div>
);

}
