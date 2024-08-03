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
import PhotoGallery from '../Components/PhotoGallery'
import gallery from '/Home Images/Gallery.png'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'

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
        <Container className=''>

        </Container>
      </section>

    </div>
  )
}

export default Team