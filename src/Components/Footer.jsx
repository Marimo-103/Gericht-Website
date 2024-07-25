import React from 'react'
import Container from '../Layers/Container'
import H2 from '../Layers/H2'
import H3 from '../Layers/H3'
import P from '../Layers/P'
import Spoon from './Spoon'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'


const Footer = () => {
  return (
    <footer className='bg-Masked-bg pt-[349px] pb-[144px]'>
      <Container>
        <div className="main flex items-center w-full">
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
          <div className="logo flex flex-col items-center justify-center ml-[126px]">
            <Link to='/' className='mb-8'>
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
          <div className="work flex flex-col justify-center items-center ml-auto">
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
        <P className='text-center mt-[80px]'>
        2021 Gerícht. All Rights reserved.
        </P>
      </Container>
    </footer>
  )
}

export default Footer