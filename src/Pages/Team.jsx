import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import Spoon from '../Components/Spoon'
import H1 from '../Layers/H1'
import H2 from '../Layers/H2'
import P from '../Layers/P'
import Rotating from '../Components/Rotating'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Video from '/Home Images/Video.png'
import Play from '/Home Images/Play.png'
import Awards from '/Home Images/Gallery_img.png'
import award01 from '/Home Images/1st_prize.png'
import award02 from '/Home Images/2nd_prize.png'
import award03 from '/Home Images/3rd_prize.png'
import award05 from '/Home Images/5th_prize.png'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import chef01 from '/Team Images/Chef-1.png'
import chef02 from '/Team Images/Chef-2.png'
import chef03 from '/Team Images/Chef-3.png'
import chef04 from '/Team Images/Chef-4.png'
import chef05 from '/Team Images/Chef-5.png'
import chef06 from '/Team Images/Chef-6.png'
import { FaXTwitter } from 'react-icons/fa6'

const Team = () => {
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
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* Team members */}
      <section id="team" className='py-[152px]'>
        <Container className='flex flex-col gap-16 items-center justify-center relative'>
          <div className="top flex items-center gap-8">
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef01} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Kevin Luo
                </div>
                <P className='text-white'>
                Head Chef
                </P>
              </div>
            </div>
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef02} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Patrick Choi
                </div>
                <P className='text-white'>
                Deputy Chef
                </P>
              </div>
            </div>
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef03} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Jack Biscoff
                </div>
                <P className='text-white'>
                Station Chef
                </P>
              </div>
            </div>
          </div>
          <div className="bottom flex items-center gap-8">
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef04} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Stacy Lee
                </div>
                <P className='text-white'>
                Station Chef
                </P>
              </div>
            </div>
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef05} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Aren Goodman 
                </div>
                <P className='text-white'>
                Junior Chef
                </P>
              </div>
            </div>
            <div className="child flex flex-col gap-8 group">
              <div className="img w-[412px] h-[520px] relative after:content-[''] after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c80] after:h-full after:w-full after:invisible after:opacity-0 group-hover:after:visible group-hover:after:opacity-100 after:transition-all after:duration-300">
                <img src={chef06} alt="" className='block w-full h-full'/>
                <div className="icons flex flex-col justify-center items-center gap-4 absolute bottom-12 left-1/2 translate-x-[-50%] z-30 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4">
                  <Link>
                  <FaFacebookF className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaXTwitter className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  <Link>
                  <FaInstagram className='text-white text-2xl transition-all duration-300 hover:text-[#DCCA87]'/>
                  </Link>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                    <Link to='/chefdetails' className='text-base text-[#DCCA87] font-Cormorant font-bold leading-[175%] tracking-[0.64px]'>
                    Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div className='text-[45px] text-[#FFF] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize mb-2 group-hover:text-[#DCCA87] transition-all duration-300'>
                Javier Dowsing
                </div>
                <P className='text-white'>
                Junior Chef
                </P>
              </div>
            </div>
          </div>
          <Rotating className='top-[404px] left-full translate-x-[20px]'/>
        </Container>
      </section>

      {/* video */}
      <section id="video" className=''>
        <Container className='max-w-[1920px] relative after:content-[""] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c66]'>
          <div className='w-full'>
          <img src={Video} alt="" className='w-full h-full'/>
          </div>
          <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30'>
          <img src={Play} alt=""/>
          </div>
          <Rotating  className='bottom-full left-[96px] z-30'/>
        </Container>
      </section>

      {/* awards */}
      <section id="awards" className='pt-[152px]'>
        <Container className='flex items-center gap-[111px]'>
          <div className="text flex flex-col justify-center gap-16">
          <div className="title flex flex-col justify-center gap-2">
            <H5>
            Awards & recognition
            </H5>
            <Spoon />
            <H2>
            Our Laurels
            </H2>
          </div>
          <div className="top flex items-center gap-8">
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award02} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                Bib Gourmond
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
          <div className="bottom flex items-center gap-8">
            <div className="child flex items-center gap-8">
              <div className="img w-[79px] h-[79px]">
                <img src={award05} alt="" className='w-full h-full'/>
              </div>
              <div className="info">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize mb-2'>
                AA Hospitality 
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
          </div>
          <div className="img w-[555px] h-[691px]">
            <img src={Awards} alt=""  className='h-full w-full'/>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default Team