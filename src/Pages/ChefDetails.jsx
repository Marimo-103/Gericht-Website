import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H3 from '../Layers/H3'
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
import MenuSlider from '../Components/MenuSlider'
import Blender from '/Home Images/TodaysMenu.png'
import ChefsWorld from '../Components/ChefsWorld'
import Video from '/Home Images/Video.png'
import Play from '/Home Images/Play.png'
import Customer01 from '/Home Images/Customer-1.png'
import Customer02 from '/Home Images/Customer-2.png'
import Customer03 from '/Home Images/Customer-3.png'
import Customer04 from '/Home Images/Customer-4.png'
import Awards from '/Home Images/Gallery_img.png'
import award01 from '/Home Images/1st_prize.png'
import award02 from '/Home Images/2nd_prize.png'
import award03 from '/Home Images/3rd_prize.png'
import award05 from '/Home Images/5th_prize.png'
import Blog01 from '/Home Images/blog-01.png'
import Blog02 from '/Home Images/blog-02.png'
import Blog03 from '/Home Images/blog-03.png'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import chef02 from '/ChefDetails Images/Chef-2.png'
import PA from '/ChefDetails Images/pa-2.png'

const ChefDetails = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            Our Chefs
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/team'>
            <H5>Our team</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/chefdetails'>
            <H5>Chef Details</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* Chef info */}
      <section id="chef" className='py-[152px]'>
        <Container className='flex justify-center gap-8 relative'>
          <div className="img w-[634px] h-[800px]">
            <img src={chef02} alt="" className='w-full h-full'/>
          </div>
          <div className="text">
          <div className="title flex flex-col items-start justify-start gap-2 mb-16">
          <H5>
          Deputy Chef
          </H5>
          <Spoon />
          <H2>
          Patrick Choi
          </H2>
          </div>
          <P className='italic mb-12'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. Auctor sit<br />iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque<br /> scelerisque consectetur adipiscing elit.
          </P>
          <div className="flex flex-col gap-6 mb-12">
            <div className='point flex items-center justify-start gap-2'>
              <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
              <div className='text-base text-[#F5EFDB] font-Cormorant font-semibold leading-[175%] tracking-[0.64px]'>
              Graduated from Culinary Institute of New Jersey, USA.
              </div>
            </div>
            <div className='point flex items-center justify-start gap-2'>
              <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
              <div className='text-base text-[#F5EFDB] font-Cormorant font-semibold leading-[175%] tracking-[0.64px]'>
              Worked as a junior chef at ruso’s Italiano.
              </div>
            </div>
            <div className='point flex items-center justify-start gap-2'>
              <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
              <div className='text-base text-[#F5EFDB] font-Cormorant font-semibold leading-[175%] tracking-[0.64px]'>
              Contributed 20+ new recipes on International platform.
              </div>
            </div>
            <div className='point flex items-center justify-start gap-2'>
              <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
              <div className='text-base text-[#F5EFDB] font-Cormorant font-semibold leading-[175%] tracking-[0.64px]'>
              Trained under renowned Chef Gusteau Marcellini
              </div>
            </div>
          </div>
          <div className="signature font-Bestermind text-[64px] text-[#AAA] font-normal leading-[130%] tracking-[2.56px] capitalize">
          Patrick Choi
          </div>
          </div>
          <Rotating className='bottom-[-78px] right-[-51px]'/>
        </Container>
      </section>

      {/* Personal Achievements */}
      <section id="awards" className='bg-Masked bg-cover py-32'>
        <Container className='flex items-center gap-8'>
          <div className="text flex flex-col justify-center gap-16">
          <div className="title flex flex-col justify-center gap-2">
            <H5>
            Deputy Chef
            </H5>
            <Spoon />
            <H2>
            Personal Achievements
            </H2>
          </div>
          <div className="top flex items-center gap-8">
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award01} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                Rising Star
                </div>
                <P>
                Lorem ipsum dolor sit<br /> amet, consectetur.
                </P>
              </div>
            </div>
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award03} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                Outstanding Chef
                </div>
                <P>
                Lorem ipsum dolor sit<br /> amet, consectetur.
                </P>
              </div>
            </div>
          </div>
          <div className="bottom flex items-center gap-8">
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award03} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                Outstanding Chef 
                </div>
                <P>
                Lorem ipsum dolor sit<br /> amet, consectetur.
                </P>
              </div>
            </div>
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award01} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                Rising Star
                </div>
                <P>
                Lorem ipsum dolor sit<br /> amet, consectetur.
                </P>
              </div>
            </div>
          </div>
          </div>
          <div className="img w-[631px] h-[454px]">
            <img src={PA} alt=""  className='h-full w-full'/>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default ChefDetails