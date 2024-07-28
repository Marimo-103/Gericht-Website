import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import Spoon from '../Components/Spoon'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import H2 from '../Layers/H2'
import P from '../Layers/P'
import Fade from '../Components/Fade'
import line from '/Common Images/TOP_line.png'
import G from '/Home Images/AboutG.png'
import Knife from '/Home Images/Knife.png'
import Rotating from '../Components/Rotating'
import { FaAngleDown } from 'react-icons/fa'

const Home = () => {
  return (
    <div>

      {/* Intro banner */}
      <section id="banner" className='pt-12 pb-[244px]'>
        <Container className='flex items-center justify-between relative'>
          <div className="text">
            <H5>
            Chase the new Flavour
            </H5>
            <Spoon className='my-2' />
            <H1>
            The key to<br /> Fine dining
            </H1>
            <P className='my-8'>
            Sit tellus lobortis sed senectus vivamus molestie.<br /> Condimentum volutpat morbi facilisis quam scelerisque<br /> sapien. Et, penatibus aliquam amet tellus 
            </P>
            <Button>
            Explore Menu
            </Button>
          </div>
          <div className="slider_main w-[667px] h-[736px] relative after:content-[''] after:w-[435px] after:h-[435px] after:bg-[#DCCA87] after:absolute after:bottom-0 after:left-0 after:z-[-2] before:content-[''] before:w-[435px] before:h-[435px] before:bg-[#DCCA87] before:absolute before:top-0 before:right-0 before:z-[-2] ">
            <div className="slider_box w-[619px] h-[688px] bg-[#ff9e02] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
            <Fade />
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 absolute top-1/2 translate-y-[-50%] right-[100%] translate-x-[-93px] rotate-[270deg]'>
            <p className='text-lg text-white font-Open-Sans font-normal leading-[175%] tracking-[0.72px]'>#Bar</p>
            <p className='text-lg text-white font-Open-Sans font-normal leading-[175%] tracking-[0.72px]'>#Gericht</p>
          </div>
          <div className='absolute z-50 bottom-0 translate-y-[92px] left-full translate-x-[129px] flex flex-col items-center gap-6'>
            <div className="line w-[1px] h-[61px]">
              <img src={line} alt="" className='w-full h-full'/>
            </div>
            <div className='text-[#DCCA87] text-base font-bold font-Cormorant leading-[175%] tracking-[0.64px]'>
              <a href="#">SCROLL</a>
            </div>
          </div>
        </Container>
      </section>

      {/* About Us */}
      <section id="about" className='bg-Masked py-32'>
        <Container className='relative'>
          <div className="G absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0">
            <img src={G} alt="" />
          </div>
          <div className="main flex items-center justify-between relative z-50">
            <div className="left flex flex-col items-center text-end">
              <H2 className='ml-auto'>
              About Us
              </H2>
              <Spoon className='my-2 ml-auto rotate-[180deg]'/>
              <P className='my-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis<br /> pharetra adipiscing ultrices vulputate posuere tristique. In sed<br /> odio nec aliquet eu proin mauris et.
              </P>
              <Button className='ml-auto'>
              Know More
              </Button>
            </div>
            <div className="knife w-[84px]">
              <img src={Knife} alt="" />
            </div>
            <div className="right">
              <H2>
              Our History
              </H2>
              <Spoon className='my-2'/>
              <P className='my-8'>
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.<br /> Risus placerat morbi volutpat habitasse interdum mi aliquam In<br /> sed odio nec aliquet.
              </P>
              <Button>
              Know More
              </Button>
            </div>
          </div>
          <Rotating className='top-full translate-y-[104px] left-full translate-x-[13px] '/>
        </Container>
      </section>

      {/* Reservation */}
      <section id="reservation" className='pt-[152px]'>
        <Container className='py-12 px-8 border border-[#dcca8733] shadow-[22px_30px_95px_1px_rgba(1, 1, 1, 1)] flex flex-col justify-center items-center gap-16'>
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
          <Button>
          Book Now
          </Button>
        </Container>
      </section>

    </div>
  )
}

export default Home