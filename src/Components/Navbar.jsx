import React from 'react'
import Container from '../Layers/Container'
import Logo from '../Layers/Logo'
import Logo_img from '/Common Images/Logo.png'
import { Link } from 'react-router-dom'
import Li from '../Layers/Li'
import HoverUL from '../Layers/HoverUL'
import HoverLi from '../Layers/HoverLi'
import { MdRestaurantMenu } from "react-icons/md";
import line from '/Common Images/Menu_line.png'


const Navbar = () => {
  return (
    <nav>
      <Container className='max-w-[1440px] sm:py-8 sm:px-[0px] p-4 flex justify-between items-center'>
        <Logo src={Logo_img} />
        <div className="menu">
          <ul className='sm:flex gap-x-8 hidden'>
            <Li value='Home' to='/' />
            <Li value='Pages' to='/' className='relative group'>
              <HoverUL className='z-50'>
                <HoverLi value='About Us' to='/about' />
                <HoverLi value='Services' to='/service' />
                <HoverLi value='Our Team' to='/team' />
                <HoverLi value='Our Blog' to='/blog' />
                <HoverLi value='FAQ' to='/FAQ' />
              </HoverUL>
            </Li>
            <Li value='Contact Us' to='/contact' />
            <Li value='Blog' to='/blog' />
            <Li value='Landing' to='/commingsoon' />
          </ul>
        </div>
        <div className="btns hidden sm:flex gap-[50px] items-center text-white">
          <div className="user text-base text-white font-Open-Sans font-semibold leading-[175%] tracking-[0.8px] capitalize transition-all duration-300 hover:text-[#DCCA87]">
            <Link to='/login' className=''>Log in </Link>
            / 
            <Link to='/login' className=''> registration</Link>
          </div>
          <div className="line w-[2px] h-[57px]">
            <img src={line} alt="" className='h-full'/>
          </div>
          <div className="table">
          <a href='#reservation' className='text-base text-white font-Open-Sans font-semibold leading-[175%] tracking-[0.8px] capitalize transition-all duration-300 hover:text-[#DCCA87]'>book table </a>
          </div>
        </div>
        <MdRestaurantMenu className='sm:hidden text-[#DCCA87] text-lg hover:text-white transition-all duration-300' />
      </Container>
    </nav>
  )
}

export default Navbar