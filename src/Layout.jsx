import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Footer from './Components/Footer'
import Sos from './Pages/Sos'

const Layout = () => {
  return (
    <>   
    <Navbar/>
    <Outlet/>
    <Sos/>
    <Footer/>
    </>
  )
}

export default Layout