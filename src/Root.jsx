import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const Root = () => {
  const location = useLocation();

  const hideFooterPaths = ['/404', '/commingsoon'];
  return (
    <div>
        <Navbar />

        <Outlet />

        {!hideFooterPaths.includes(location.pathname) && (
        <>
          <div className='pt-[334px] sm:block hidden'></div>
          <Footer />
        </>
      )}
    </div>
  )
}

export default Root