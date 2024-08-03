import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H3 from '../Layers/H3'
import Spoon from '../Components/Spoon'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import H2 from '../Layers/H2'
import P from '../Layers/P'
import line from '/About Images/line.png'
import Rotating from '../Components/Rotating'
import ChefsWorld from '../Components/ChefsWorld'
import Video from '/About Images/video.png'
import Play from '/Home Images/Play.png'
import Customer01 from '/Home Images/Customer-1.png'
import Customer02 from '/Home Images/Customer-2.png'
import Customer03 from '/Home Images/Customer-3.png'
import Customer04 from '/Home Images/Customer-4.png'
import { Link } from 'react-router-dom'
import PhotoGallery from '../Components/PhotoGallery'
import gallery from '/Home Images/Gallery.png'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import history01 from '/About Images/history_img-1.png'
import history02 from '/About Images/history_img-2.png'


const About = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            Welcome to Gerícht
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/about'>
            <H5>About Us</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* our history */}
      <section id="history" className='pt-[152px]'>
        <Container className='flex flex-col justify-center items-center gap-16'>
          <div className="title flex flex-col items-center justify-center gap-2">
            <H5>
            Our History
            </H5>
            <Spoon />
            <H2>
            serving customers for over a decade
            </H2>
          </div>
          <div className="flex justify-between items-center gap-[143px]">
            <div className="left flex flex-col gap-10">
              <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis<br /> pharetra adipiscing ultrices vulputate posuere tristique. In sed<br /> odio nec aliquet eu proin mauris et.
              </P>
              <div className="img w-[523px] h-[566px]">
                <img src={history01} alt="" className='block w-full'/>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="img h-[385px] w-[634px]">
                <img src={history02} alt="" className='block w-full'/>
              </div>
              <div className="text-[45px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize ">
              Over the years
              </div>
              <div className="flex items-center gap-16">
                <div className="child">
                  <div className="text-[45px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize ">
                  30+
                  </div>
                  <Spoon className='my-2'/>
                  <H3 className='text-white'>
                  Breakfast<br /> Options
                  </H3>
                </div>
                <div className="line h-[100px]">
                  <img src={line} alt="" className='block h-full'/>
                </div>
                <div className="child">
                  <div className="text-[45px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize ">
                  50+
                  </div>
                  <Spoon className='my-2'/>
                  <H3 className='text-white'>
                  Dinner Options
                  </H3>
                </div>
                <div className="line h-[100px]">
                  <img src={line} alt="" className='block h-full'/>
                </div>
                <div className="child">
                  <div className="text-[45px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize ">
                  8
                  </div>
                  <Spoon className='my-2'/>
                  <H3 className='text-white'>
                  New Locations
                  </H3>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* about us */}
      <section id="about" className='py-[152px]'>
        <Container className='flex flex-col gap-24 justify-center items-center relative'>
          <div className="flex flex-col gap-8 items-center justify-center">
            <div className="title flex flex-col items-center justify-center gap-2">
              <H5>
              About Us
              </H5>
              <Spoon />
              <H2>
              Happy Hours with Us
              </H2>
            </div>
            <P className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate<br /> posuere tristique. In sed odio nec aliquet eu proin mauris et.
            </P>
          </div>
          <div className='relative after:content-[""] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c66]'>
            <div className='w-full'>
            <img src={Video} alt="" className='w-full h-full'/>
            </div>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30'>
            <img src={Play} alt=""/>
            </div>
          </div>
          <Rotating  className='top-[-12px] left-full translate-x-[13px] z-30'/>
        </Container>
      </section>

      {/* Chef's world */}
      <section id="chefsW" className='bg-Masked bg-cover py-32'>
        <Container className='relative flex items-center justify-between'>
          <Rotating className='bottom-full translate-y-[-77px] right-full translate-x-[-18px] z-30'/>
          <div className="img_slider w-[634px] h-[789px] relative after:content-[''] after:w-[435px] after:h-[435px] after:bg-[#DCCA87] after:absolute after:bottom-0 after:left-0 before:content-[''] before:w-[435px] before:h-[435px] before:bg-[#DCCA87] before:absolute before:top-0 before:right-0">
            <div className="slider_box w-[586px] h-[741px] bg-[#ff9e02] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
            <ChefsWorld />
            </div>
          </div>
          <div className="text flex flex-col gap-16 items-start">
          <div className="title flex flex-col items-start justify-center gap-2">
            <H5>
            Chef’s Word
            </H5>
            <Spoon />
            <H2>
            What we believe in
            </H2>
          </div>
          <div>
            <span className='inline-block'>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="40" viewBox="0 0 47 40" fill="none">
              <path d="M12.9137 22.8571C15.3163 22.8571 17.2183 23.6592 18.6198 25.2632C20.1214 26.7669 20.8722 28.7719 20.8722 31.2782C20.8722 33.985 19.9712 36.1404 18.1693 37.7444C16.4675 39.2481 14.115 40 11.1118 40C7.60809 40 4.85517 38.6466 2.85304 35.9399C0.951012 33.2331 0 29.3734 0 24.3609C0 19.8496 1.00107 15.6892 3.00319 11.8797C5.00533 7.96992 8.00852 4.06015 12.0128 0.150374C12.1129 0.0501247 12.263 0 12.4633 0C12.7636 0 13.0138 0.150374 13.2141 0.451122C13.4143 0.751876 13.4143 1.0025 13.2141 1.203C8.30884 6.21553 5.85623 12.1303 5.85623 18.9474C5.85623 21.7544 6.35676 23.8095 7.35783 25.1128C8.25879 23.609 10.1108 22.8571 12.9137 22.8571ZM39.0415 22.8571C41.4441 22.8571 43.3461 23.6592 44.7476 25.2632C46.2492 26.7669 47 28.7719 47 31.2782C47 33.985 46.099 36.1404 44.2971 37.7444C42.5953 39.2481 40.2428 40 37.2396 40C33.7359 40 30.983 38.6466 28.9808 35.9399C27.0788 33.2331 26.1278 29.3734 26.1278 24.3609C26.1278 19.8496 27.1289 15.6892 29.131 11.8797C31.1331 7.96992 34.1363 4.06015 38.1406 0.150374C38.2407 0.0501247 38.3908 0 38.5911 0C38.8914 0 39.1416 0.150374 39.3419 0.451122C39.5421 0.751876 39.5421 1.0025 39.3419 1.203C34.4366 6.21553 31.984 12.1303 31.984 18.9474C31.984 21.7544 32.4846 23.8095 33.4856 25.1128C34.3866 23.609 36.2386 22.8571 39.0415 22.8571Z" fill="white"/>
            </svg>
            </span>
            <P className='inline-block'> <span className='text-black'>..</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .<br />
            </P>
            <P className=''>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla<br /> scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.<br /> Congue iaculis integer curabitur semper sit nunc.
            </P>
          </div>
          <div className='sign flex flex-col gap-2'>
            <H3>
            Kevin Luo
            </H3>
            <P>
            Chef & Founder
            </P>
          </div>
          <div className='text-[64px] text-[#AAA] font-Bestermind font-normal leading-[130%] tracking-[2.56px]'>
          Kevin Luo
          </div>
          </div>
        </Container>
      </section>

      {/* Testimony */}
      <section id="testimony" className='py-[152px]'>
        <Container className='flex flex-col items-center justify-between gap-16 relative'>
          <Rotating className='top-[-71px] left-full translate-x-[7px] z-30'/>
          <div className="title flex flex-col items-center justify-center gap-2">
            <H5>
            Testimony
            </H5>
            <Spoon />
            <H2>
            Happy customers
            </H2>
          </div>
          <div className="top flex items-center gap-8">
            <div className="child flex items-center gap-4">
              <div className="img w-[206px] h-[210px]">
                <img src={Customer01} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br /> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br /> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Wade Warren
                </H3>
                <P className='text-[#F5EFDB]'>
                Sommelier
                </P>
              </div>
            </div>
            <div className="child flex items-center gap-4">
              <div className="img w-[206px] h-[210px]">
                <img src={Customer02} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br /> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br /> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Jane Cooper
                </H3>
                <P className='text-[#F5EFDB]'>
                Chef
                </P>
              </div>
            </div>
          </div>
          <div className="bottom flex items-center gap-8">
            <div className="child flex items-center gap-4">
              <div className="img w-[206px] h-[210px]">
                <img src={Customer03} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br /> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br /> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Robert Fox
                </H3>
                <P className='text-[#F5EFDB]'>
                Chef
                </P>
              </div>
            </div>
            <div className="child flex items-center gap-4">
              <div className="img w-[206px] h-[210px]">
                <img src={Customer04} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br /> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br /> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Brooklyn Simmons
                </H3>
                <P className='text-[#F5EFDB]'>
                Caterer
                </P>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* photo gallery */}
      <section id="gallery" className='bg-Masked bg-cover'>
        <Container className='max-w-[1920px] pl-[310px] flex items-center gap-16 py-32'>
          <div className="text flex flex-col gap-6 items-start justify-start">
            <div className="title flex flex-col justify-start items-start gap-2">
              <H5>
              Instagram
              </H5>
              <Spoon />
              <H2>
              Photo Gallery
              </H2>
            </div>
            <P className='max-w-[491px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
            </P>
            <Button>
            View More
            </Button>
          </div>
          <div className="photoGallery h-[447px]">
            {/* <PhotoGallery className='w-full'/> */}
            <img src={gallery} alt="" />
          </div>
        </Container>
      </section>

    </div>
  )
}

export default About