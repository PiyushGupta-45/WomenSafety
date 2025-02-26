import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/NavBar'
import Sos from './Pages/Sos'

const Layout = () => {
  return (
    <>   
    <Navbar/>
    <Outlet/>
    <Sos/>
    </>
  )
}

export default Layout