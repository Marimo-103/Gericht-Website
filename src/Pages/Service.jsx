import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H3 from '../Layers/H3'
import Spoon from '../Components/Spoon'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import H2 from '../Layers/H2'
import P from '../Layers/P'
import Rotating from '../Components/Rotating'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import MenuSlider from '../Components/MenuSlider'
import { FaAngleDown } from 'react-icons/fa'
import HappyHours from '../Components/HappyHours'

const Service = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            What We offer
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/service'>
            <H5>Our Services</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* quality */}
      <section id="quality" className='pt-[196px]'>
        <Container className='flex flex-col items-center justify-center gap-10 text-center'>
          <div className="title flex flex-col justify-center items-center gap-2">
            <H5>
            Serving Quality
            </H5>
            <Spoon />
            <H2>
            We at Gericth are serving our customers<br /> for over a decade.
            </H2>
          </div>
          <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere<br /> tristique. In sed odio nec aliquet eu proin mauris et.
          </P>
          <div className='flex gap-10 items-center justify-center'>
            <Button>
            <Link to=''>
            Read More
            </Link>
            </Button>
            <Button>
            <Link to='/contact'>
            Contact Us
            </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Menu */}
      <section id="menu" className='pt-[152px]'>
        <Container className='max-w-[1920px] relative after:content-[""] after:w-full after:h-full after:bg-[#0c0c0c66] after:absolute after:top-0 after:left-0 z-0'>
          <MenuSlider className='w-full h-full'/>
          <div className="text flex flex-col gap-16 absolute left-[145px] top-[261px] z-30 ">
            <H2 className='text-white hover:underline'>
            Bar Menu
            </H2>
            <H2 className='text-white hover:underline'>
            Food Menu
            </H2>
            <H2 className='text-white hover:underline'>
            Desserts Menu
            </H2>
          </div>
          <Rotating className='bottom-full translate-y-[-19px] right-[152px] z-30'/>
        </Container>
      </section>

      {/* Reservation */}
      <section id="reservation" className='pt-[152px]'>
        <Container className='py-12 px-8 border border-[#dcca8733] shadow-[22px_30px_95px_1px_rgba(1, 1, 1, 1)] flex flex-col justify-center items-center gap-16 relative'>
          <div className="title flex flex-col items-center justify-center gap-2">
            <H5>
            Reservations
            </H5>
            <Spoon />
            <H2>
            Book A Table
            </H2>
          </div>
          <div className="info flex items-center gap-8 w-full">
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='1 Person' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-2xl text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/> 
            </div>
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='12/05/2021' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-2xl text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/>
            </div>
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='11:00 AM' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-2xl text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/>
            </div>
          </div>
          <Rotating className='bottom-[-67px] left-[-132px]'/>
          <Button>
          Book Now
          </Button>
        </Container>
      </section>

      {/* Happy Hours */}
      <section id="HappyH" className='pt-[152px]'>
        <Container className='max-w-[1920px] relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c66]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <div className='text-[128px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[3.84px] capitalize'>
            Happy Hours
            </div>
            <div className='text-[32px] text-[#FFF] font-Cormorant font-bold leading-[130%] tracking-[1.28px] capitalize'>
            Monday - Friday (4:00 Pm - 7:00 pm)
            </div>
          </div>
          <div className="slide max-w-[1920px]">
            <HappyHours />
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Service