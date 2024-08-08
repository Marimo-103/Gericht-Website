import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H3 from '../Layers/H3'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import P from '../Layers/P'
import Rotating from '../Components/Rotating'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Blog01 from '/Blog Images/Blog-1.png'
import Blog02 from '/Blog Images/Blog-2.png'
import Blog03 from '/Blog Images/Blog-3.png'
import Blog04 from '/Blog Images/Blog-4.png'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import { MdSearch } from 'react-icons/md'
import { FaXTwitter } from 'react-icons/fa6'


const Blog = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            Our Blogs
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/blog'>
            <H5>Our Blogs- With sidebar</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* blog with sidebar */}
      <section id="blog" className='pt-[152px]'>
        <Container className='flex items-center gap-[69px] relative'>
          <div className="blog-items w-[856px] flex flex-wrap gap-x-8 gap-y-16 items-center justify-center">
            <div className="child flex flex-col justify-center items-center gap-6">
              <div className="img w-[412px] h-[430px]">
                <img src={Blog02} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col gap-8 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  16 Apr 2021
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - Annalisa L
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                tips for prepping and caring<br /> for your grill
                </H3>
                </Link>
                <P>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Volutpat mattis ipsum turpis elit elit<br /> scelerisque egestas mus in.
                </P>
                <Link to='/blog'>
                <div className='text-[#DCCA87] font-Cormorant text-base font-bold leading-[175%] tracking-[0.64px]'>
                Read More
                </div>
                </Link>
              </div>
            </div>
            <div className="child flex flex-col justify-center items-center gap-6">
              <div className="img w-[412px] h-[430px]">
                <img src={Blog01} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col gap-8 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  23 May 2021
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - John Micheal
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                summer cocktails and<br /> mocktails
                </H3>
                </Link>
                <P>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Volutpat mattis ipsum turpis elit elit<br /> scelerisque egestas mus in.
                </P>
                <Link to='/blog'>
                <div className='text-[#DCCA87] font-Cormorant text-base font-bold leading-[175%] tracking-[0.64px]'>
                Read More
                </div>
                </Link>
              </div>
            </div>
            <div className="child flex flex-col justify-center items-center gap-6">
              <div className="img w-[412px] h-[430px]">
                <img src={Blog03} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col gap-8 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  06 Mar 2020
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - Andrial M
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                How to make your food<br /> Photographs look aesthetic
                </H3>
                </Link>
                <P>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Volutpat mattis ipsum turpis elit elit<br /> scelerisque egestas mus in.
                </P>
                <Link to='/blog'>
                <div className='text-[#DCCA87] font-Cormorant text-base font-bold leading-[175%] tracking-[0.64px]'>
                Read More
                </div>
                </Link>
              </div>
            </div>
            <div className="child flex flex-col justify-center items-center gap-6">
              <div className="img w-[412px] h-[430px]">
                <img src={Blog04} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col gap-8 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  17 June 2018
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - Kaityln B
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                Co-ordination & Teamwork<br /> Tips from a sous chef
                </H3>
                </Link>
                <P>
                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit. Volutpat mattis ipsum turpis elit elit<br /> scelerisque egestas mus in.
                </P>
                <Link to='/blog'>
                <div className='text-[#DCCA87] font-Cormorant text-base font-bold leading-[175%] tracking-[0.64px]'>
                Read More
                </div>
                </Link>
              </div>
            </div>
            <Button>
            View More
            </Button>
          </div>
          <div className="sidebar flex flex-col gap-8 w-[375px]">
            <div className="search p-8 flex flex-col gap-6 bg-[#242424]">
              <H3>
              Search Page
              </H3>
              <div className='w-full relative'>
                <input type="text" placeholder='Example' className='w-full text-base placeholder:text-[#AAA] text-white font-Open-Sans font-normal leading-[175%] tracking-[0.64px] bg-transparent border-b border-[#aaaaaa66] outline-none'/>
                <MdSearch className='absolute top-1/2 translate-y-[-50%] right-0 text-base text-white'/>
              </div>
            </div>
            <div className="categories p-8 flex flex-col gap-8 bg-[#242424]">
              <H3>
              All Categories
              </H3>
              <div className="flex items-center justify-between">
                <P className='w-[103px]'>
                Photography
                </P>
                <div className="line w-[159px] h-[1px] bg-[#FAFAFA]"></div>
                <P>(1)</P>
              </div>
              <div className="flex items-center justify-between">
                <P className='w-[103px]'>
                Baking
                </P>
                <div className="line w-[159px] h-[1px] bg-[#FAFAFA]"></div>
                <P>(2)</P>
              </div>
              <div className="flex items-center justify-between">
                <P className='w-[103px]'>
                Cooking Tips
                </P>
                <div className="line w-[159px] h-[1px] bg-[#FAFAFA]"></div>
                <P>(6)</P>
              </div>
            </div>
            <div className="post p-8 flex flex-col gap-8 bg-[#242424]">
              <H3>
              Our Latest Posts
              </H3>
            <div className="child flex flex-col justify-center items-center gap-6">
              <div className="img w-[311px] h-[308px]">
                <img src={Blog01} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col gap-8 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  17 June 2018
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - Kaityln B
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                summer cocktails and mocktails
                </H3>
                </Link>
                <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit....
                </P>
                <Link to='/blog'>
                <div className='text-[#DCCA87] font-Cormorant text-base font-bold leading-[175%] tracking-[0.64px]'>
                Read More
                </div>
                </Link>
              </div>
            </div>
            </div>
            <div className="tags p-8 flex flex-col gap-8 bg-[#242424]">
              <H3>
              Related Tags
              </H3>
              <div className="flex flex-col gap-4">
                <div className="line01 flex items-center gap-2">
                  <P>
                  Grilling
                  </P>
                  <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                  <P>
                  Cooking
                  </P>
                  <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                  <P>
                  Baking
                  </P>
                </div>
                <div className="line02 flex items-center gap-2">
                  <P>
                  Cuisines
                  </P>
                  <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                  <P>
                  Chef
                  </P>
                  <div className="line w-4 h-[1px] bg-[#DCCA87]"></div>
                  <P>
                  Alcohol Mixing
                  </P>
                </div>
              </div>
            </div>
            <div className="share p-8 flex flex-col gap-8 bg-[#242424]">
              <H3>Share</H3>
              <div className="icons flex items-center gap-4 text-white text-2xl">
              <FaFacebookF className='transition-all duration-300 hover:text-[#DCCA87]'/>
              <FaXTwitter className='transition-all duration-300 hover:text-[#DCCA87]'/>
              <FaInstagram className='transition-all duration-300 hover:text-[#DCCA87]'/>
              </div>
            </div>
          </div>
          <Rotating className='left-full translate-x-[20px] top-[56%] z-20'/>
          <Rotating className='left-[-84px] top-full translate-y-[29px] z-50'/>
        </Container>
      </section>

    </div>
  )
}

export default Blog