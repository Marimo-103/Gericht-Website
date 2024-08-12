import React from 'react'
import Container from '../Layers/Container'
import H3 from '../Layers/H3'
import P from '../Layers/P'
import Spoon from './Spoon'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'
import Subscribe from './Subscribe'
import line from '/Common Images/TOP_line.png'


const Footer = () => {
  return (
    <footer className='bg-Masked-bg sm:pt-[349px] sm:pb-[144px] py-8 relative'>
      <Subscribe className='absolute left-1/2 translate-x-[-50%] top-0 translate-y-[-50%] z-40' />
      <Container className='relative'>
        <div className="main flex flex-col sm:flex-row items-center sm:gap-0 gap-8 w-full">
          <div className='absolute z-50 bottom-full translate-y-[-79px] left-full translate-x-[158px] hidden sm:flex flex-col items-center gap-1'>
            <div className="line w-[1px] h-[61px]">
              <img src={line} alt="" className='w-full h-full'/>
            </div>
            <div className='text-[#DCCA87] text-base font-bold font-Cormorant leading-[175%] tracking-[0.64px]'>
              <a href="#">TOP</a>
            </div>
          </div>
          <div className="contacts">
            <ul className='flex flex-col justify-center items-center'>
              <H3 className='text-[#F5EFDB]'>
                Contacts
              </H3>
              <Link>
                <P className='mt-6 mb-2'>9 W 53rd St, New York, NY 10019, USA</P>
              </Link>
              <Link className='text-balance text-[#AAA] font-Open-Sans font-normal leading-[175%] tracking-[0.64px]'>
                <a href="tel:+1 212-344-1230">+1 212-344-1230</a>
              </Link>
              <Link className='text-balance text-[#AAA] font-Open-Sans font-normal leading-[175%] tracking-[0.64px]'>
              <a href="tel:+1 212-344-1230">+1 212-555-1230</a>
              </Link>
            </ul>
          </div>
          <div className="logo flex flex-col items-center justify-center sm:ml-[126px]">
            <Link to='/' className='sm:mb-8'>
              <div className='uppercase font-bold font-Cormorant leading-[130%] text-[64px] text-[#DCCA87] tracking-[2.56px]'>Gerícht</div>           
            </Link>
            <P className='text-center text-white'>
            "The best way to find yourself is to lose yourself in the <br />service of others.”
            </P>
            <Spoon className='my-4'/>
            <div className="icons flex items-center gap-4 text-white">
            <FaFacebookF />
            <RiTwitterXFill />
            <FaInstagram />
            </div>
          </div>
          <div className="work flex flex-col justify-center items-center sm:ml-auto">
          <H3 className='text-[#F5EFDB]'>
            Working Hours
          </H3>
          <P className='text-center mt-6 mb-2'>
            Monday-Friday:<br />
            08:00 am -12:00 am
          </P>
          <P className='text-center'>
            Saturday-Sunday:<br />
            07:00am -11:00 pm
          </P>
          </div>
        </div>
        <P className='text-center sm:mt-[80px] mt-10'>
        2021 Gerícht. All Rights reserved.
        </P>
      </Container>
    </footer>
  )
}

export default Footer