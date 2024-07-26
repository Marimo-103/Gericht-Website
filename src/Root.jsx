import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Root = () => {
  return (
    <div>
        <Navbar />

        <Outlet />

        <div className='pt-[334px]'></div>
        <Footer />
    </div>
  )
}

export default Root