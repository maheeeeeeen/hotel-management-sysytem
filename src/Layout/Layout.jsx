import React from 'react'
import { NavbarDemo } from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <NavbarDemo/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
