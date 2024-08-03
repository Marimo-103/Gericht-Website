import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import Rotating from '../Components/Rotating'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import { Link } from 'react-router-dom'
import map from '/Contact Images/map.png'
import Awards from '/Home Images/Gallery_img.png'


const Contact = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            contact Us
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/contact'>
            <H5>contact Us</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* Map */}
      <section id="map" className='py-[152px]'>
        <Container className='relative'>
          <Rotating className='bottom-[-58px] left-full translate-x-[30px]'/>
          <div className='w-[1300px] h-[500px]'>
            <img src={map} alt="" className='block w-full h-full'/>
          </div>
        </Container>
      </section>

      {/* form */}
      <section id="awards" className='bg-Masked bg-cover py-32'>
        <Container className='flex items-center justify-between gap-[111px]'>
          <div className="form w-[635px] flex flex-col gap-8 justify-start ">
            <input type="text" placeholder='Full Name' className='py-4 px-[19px] bg-transparent border border-[#F5EFDB] text-base placeholder:text-[#AAA] text-white font-Cormorant font-semibold capitalize leading-[175%] tracking-[0.64px] outline-none'/>
            <input type="text" placeholder='Email Address' className='py-4 px-[19px] bg-transparent border border-[#F5EFDB] text-base placeholder:text-[#AAA] text-white font-Cormorant font-semibold capitalize leading-[175%] tracking-[0.64px] outline-none'/>
            <input type="text" placeholder='Message' className='py-4 px-[19px] bg-transparent border border-[#F5EFDB] text-base placeholder:text-[#AAA] text-white font-Cormorant font-semibold capitalize leading-[175%] tracking-[0.64px] outline-none h-[140px]'/>
            <div>
              <Button>
              Subscribe
              </Button>
            </div>
          </div>
          <div className="img w-[554px] h-[691px]">
            <img src={Awards} alt=""  className='h-full w-full'/>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Contact