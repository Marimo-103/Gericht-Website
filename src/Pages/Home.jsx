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


const Home = () => {
  return (
    <div>

      {/* Intro banner */}
      <section id="banner" className='sm:pt-12 sm:pb-[244px] pt-16 pb-20'>
        <Container className='flex items-center justify-between relative'>
          <div className="text">
            <H5>
            Chase the new Flavour
            </H5>
            <Spoon className='sm:my-2 ' />
            <H1>
            The key to<br className='hidden sm:block'/> Fine dining
            </H1>
            <P className='sm:my-8 my-10'>
            Sit tellus lobortis sed senectus vivamus molestie.<br className='hidden sm:block'/> Condimentum volutpat morbi facilisis quam scelerisque<br className='hidden sm:block'/> sapien. Et, penatibus aliquam amet tellus 
            </P>
            <Button className='sm:m-0 mx-auto'>
            Explore Menu
            </Button>
          </div>
          <div className="slider_main sm:w-[667px] sm:h-[736px] hidden sm:block relative after:content-[''] sm:after:w-[435px] sm:after:h-[435px] after:bg-[#DCCA87] after:absolute after:bottom-0 after:left-0 after:z-[-2] before:content-[''] sm:before:w-[435px] sm:before:h-[435px] before:bg-[#DCCA87] before:absolute before:top-0 before:right-0 before:z-[-2] ">
            <div className="slider_box sm:w-[619px] sm:h-[688px] bg-[#ff9e02] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
            <Fade />
            </div>
          </div>
          <div className='flex items-center justify-center gap-10 absolute top-1/2 translate-y-[-50%] right-[100%] translate-x-[-93px] rotate-[270deg]'>
            <p className='text-lg text-white font-Open-Sans font-normal leading-[175%] tracking-[0.72px]'>#Bar</p>
            <p className='text-lg text-white font-Open-Sans font-normal leading-[175%] tracking-[0.72px]'>#Gericht</p>
          </div>
          <div className='absolute hidden z-50 bottom-0 translate-y-[92px] left-full translate-x-[129px] sm:flex flex-col items-center gap-6'>
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
      <section id="about" className='bg-Masked sm:py-32 py-12'>
        <Container className='relative'>
          <div className="G sm:block hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-0">
            <img src={G} alt="" />
          </div>
          <div className="main flex flex-col sm:flex-row items-center sm:justify-between justify-center gap-8 relative z-50">
            <div className="left flex flex-col items-center sm:text-end">
              <H2 className='sm:ml-auto mr-auto'>
              About Us
              </H2>
              <Spoon className='my-2 sm:ml-auto mr-auto sm:rotate-[180deg]'/>
              <P className='sm:my-8 my-6 sm:ml-auto mr-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis<br className='hidden sm:block'/> pharetra adipiscing ultrices vulputate posuere tristique. In sed<br className='hidden sm:block'/> odio nec aliquet eu proin mauris et.
              </P>
              <Button className='sm:ml-auto mr-auto'>
              <Link to='/about'>
              Know More
              </Link>
              </Button>
            </div>
            <div className="knife w-[84px] sm:block hidden">
              <img src={Knife} alt="" />
            </div>
            <div className="right sm:text-start text-end">
              <H2>
              Our History
              </H2>
              <Spoon className='ml-auto sm:m-0 sm:rotate-[0deg] rotate-[180deg]'/>
              <P className='sm:my-8 my-6'>
              Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.<br className='hidden sm:block'/> Risus placerat morbi volutpat habitasse interdum mi aliquam In<br className='hidden sm:block'/> sed odio nec aliquet.
              </P>
              <Button className='ml-auto sm:m-0'>
              Know More
              </Button>
            </div>
          </div>
          <Rotating className='top-full translate-y-[104px] left-full translate-x-[13px] '/>
        </Container>
      </section>

      {/* Reservation */}
      <section id="reservation" className='sm:pt-[152px] pt-20 sm:mx-auto mx-3'>
        <Container className='sm:py-12 sm:px-8 py-8 px-4 border border-[#dcca8733] shadow-[22px_30px_95px_1px_rgba(1, 1, 1, 1)] flex flex-col justify-center items-center sm:gap-16 gap-12'>
          <div className="title flex flex-col items-center justify-center sm:gap-2 gap-1">
            <H5>
            Reservations
            </H5>
            <Spoon />
            <H2>
            Book A Table
            </H2>
          </div>
          <div className="info flex sm:flex-row flex-col items-center sm:gap-8 gap-6 w-full ">
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='1 Person' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-sm text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/> 
            </div>
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='12/05/2021' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-sm text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/>
            </div>
            <div className="person w-full relative">
              <input type="text" name="" id="" placeholder='11:00 AM' className='w-full bg-transparent p-4 border border-[#F5EFDB] text-base text-[#AAA] font-Cormorant font-semibold leading-[175%] tracking-[0.64px] capitalize outline-none cursor-pointer'/>
              <FaAngleDown  className='text-sm text-[#AAA] absolute top-1/2 translate-y-[-50%] right-4 cursor-pointer'/>
            </div>
          </div>
          <Button>
          Book Now
          </Button>
        </Container>
      </section>

      {/* Menu */}
      <section id="menu" className='sm:pt-[184px] pt-20'>
        <Container className='max-w-[1920px] relative after:content-[""] after:w-full after:h-full after:bg-[#0c0c0c66] after:absolute after:top-0 after:left-0 z-0'>
          <MenuSlider className='w-full h-full'/>
          <div className="text hidden sm:flex flex-col sm:gap-16 gap-4 absolute sm:left-[145px] sm:top-[261px] z-30 ">
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
          <Rotating className='top-0 left-[145px] z-30'/>
        </Container>
      </section>

      {/* Today's Special */}
      <section id="todays" className='sm:py-[152px] py-20'>
        <Container className='flex flex-col items-center justify-center gap-16'>
        <div className="title flex flex-col items-center justify-center sm:gap-2 gap-1">
          <H5>
          Menu that fits you palatte
          </H5>
          <Spoon />
          <H2>
          Today’s Special
          </H2>
        </div>
        <div className="menu flex sm:flex-row flex-col items-center gap-8">
          <div className="left flex flex-col sm:justify-center sm:items-center justify-start items-start sm:gap-12 gap-6">
            <div className="title sm:text-[45px] text-[30px] text-white font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize">
              Wine & Beer
            </div>
            <div className="items flex flex-col sm:gap-10 gap-6">
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] text-base font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Chapel Hill Shiraz
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $56
                  </H5>
                </div>
                <P>
                AU | Bottle
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] text-base font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Catena Malbec
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $59
                  </H5>
                </div>
                <P>
                AR | Bottle
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  La Vieille Rosé
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $44
                  </H5>
                </div>
                <P>
                FR | 750 ml
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Rhino Pale Ale
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $31
                  </H5>
                </div>
                <P>
                CA | 750 ml
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Irish Guinness
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $26
                  </H5>
                </div>
                <P>
                IE | 750 ml
                </P>
              </div>
            </div>
          </div>
          <div className="img w-[412px] h-[660px] hidden sm:block">
            <img src={Blender} alt="" className='w-full h-full'/>
          </div>
          <div className="right flex flex-col sm:justify-center sm:items-center justify-start items-start sm:gap-12 gap-6">
            <div className="title sm:text-[45px] text-[30px] text-white font-Cormorant font-semibold leading-[130%] tracking-[1.8px] capitalize">
            Cocktails
            </div>
            <div className="items flex flex-col sm:gap-10 gap-6">
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] text-base font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Aperol Spritz
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $20
                  </H5>
                </div>
                <P>
                Aperol | Villa Marchesi prosecco | soda | 30ml
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] text-base font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Dark 'N' Stormy
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $16
                  </H5>
                </div>
                <P>
                Dark rum | Ginger beer | Slice of lime. 
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Daiquiri

                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $10
                  </H5>
                </div>
                <P>
                Rum | Citrus juice | Sugar
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Old Fashioned
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $31
                  </H5>
                </div>
                <P>
                Bourbon | Brown sugar | Angostura Bitters
                </P>
              </div>
              <div className="child flex flex-col sm:gap-2 gap-1">
                <div className="item flex items-center sm:gap-8 gap-6">
                  <div className='sm:w-[192px] w-[150px] sm:text-[23px] font-Cormorant sm:font-bold font-black leading-[130%] tracking-[0.92px] capitalize  text-[#DCCA87]'>
                  Negroni
                  </div>
                  <div className="line w-[119px] h-[1px] bg-[#FAFAFA]"></div>
                  <H5>
                  $26
                  </H5>
                </div>
                <P>
                Gin | Sweet Vermouth | Campari | Orange garnish
                </P>
              </div>
            </div>
          </div>
        </div>
        <Button>
        View More
        </Button>
        </Container>
      </section>

      {/* Chef's world */}
      <section id="chefsW" className='bg-Masked bg-cover sm:py-32 py-12'>
        <Container className='relative flex sm:flex-row flex-col items-center sm:justify-between gap-y-8'>
          <Rotating className='top-full translate-y-[78px] right-[-23px] z-30'/>
          <div className="img_slider sm:w-[634px] sm:h-[789px] w-[280px] h-[360px] relative after:content-[''] sm:after:w-[435px] sm:after:h-[435px] after:w-[192.11px] after:h-[198.48px] after:bg-[#DCCA87] after:absolute after:bottom-0 after:left-0 before:content-[''] sm:before:w-[435px] sm:before:h-[435px] before:w-[192.11px] before:h-[198.48px] before:bg-[#DCCA87] before:absolute before:top-0 before:right-0 sm:m-0 mx-auto">
            <div className="slider_box sm:w-[586px] sm:h-[741px] w-[258.8px] h-[338.1px] bg-[#e2e2e2] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]">
            <ChefsWorld />
            </div>
          </div>
          <div className="text flex flex-col sm:gap-16 gap-6 items-start">
          <div className="title flex flex-col sm:items-start items-center justify-center sm:gap-2 gap-1">
            <H5>
            Chef’s Word
            </H5>
            <Spoon />
            <H2>
            What we believe in
            </H2>
          </div>
          <div>
            <span className='sm:inline-block hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="40" viewBox="0 0 47 40" fill="none">
              <path d="M12.9137 22.8571C15.3163 22.8571 17.2183 23.6592 18.6198 25.2632C20.1214 26.7669 20.8722 28.7719 20.8722 31.2782C20.8722 33.985 19.9712 36.1404 18.1693 37.7444C16.4675 39.2481 14.115 40 11.1118 40C7.60809 40 4.85517 38.6466 2.85304 35.9399C0.951012 33.2331 0 29.3734 0 24.3609C0 19.8496 1.00107 15.6892 3.00319 11.8797C5.00533 7.96992 8.00852 4.06015 12.0128 0.150374C12.1129 0.0501247 12.263 0 12.4633 0C12.7636 0 13.0138 0.150374 13.2141 0.451122C13.4143 0.751876 13.4143 1.0025 13.2141 1.203C8.30884 6.21553 5.85623 12.1303 5.85623 18.9474C5.85623 21.7544 6.35676 23.8095 7.35783 25.1128C8.25879 23.609 10.1108 22.8571 12.9137 22.8571ZM39.0415 22.8571C41.4441 22.8571 43.3461 23.6592 44.7476 25.2632C46.2492 26.7669 47 28.7719 47 31.2782C47 33.985 46.099 36.1404 44.2971 37.7444C42.5953 39.2481 40.2428 40 37.2396 40C33.7359 40 30.983 38.6466 28.9808 35.9399C27.0788 33.2331 26.1278 29.3734 26.1278 24.3609C26.1278 19.8496 27.1289 15.6892 29.131 11.8797C31.1331 7.96992 34.1363 4.06015 38.1406 0.150374C38.2407 0.0501247 38.3908 0 38.5911 0C38.8914 0 39.1416 0.150374 39.3419 0.451122C39.5421 0.751876 39.5421 1.0025 39.3419 1.203C34.4366 6.21553 31.984 12.1303 31.984 18.9474C31.984 21.7544 32.4846 23.8095 33.4856 25.1128C34.3866 23.609 36.2386 22.8571 39.0415 22.8571Z" fill="white"/>
            </svg>
            </span>
            <P className='sm:inline-block hidden'> <span className='text-black hidden'>..</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .<br className='hidden sm:block'/>
            </P>
            <P className=''>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla<br className='hidden sm:block' /> scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.<br className='hidden sm:block'/> Congue iaculis integer curabitur semper sit nunc.
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
          <div className='sm:text-[64px] text-5xl text-[#AAA] font-Bestermind font-normal leading-[130%] tracking-[2.56px]'>
          Kevin Luo
          </div>
          </div>
        </Container>
      </section>

      {/* Testimony */}
      <section id="testimony" className='sm:pt-[152px] pt-20'>
        <Container className='flex flex-col items-center justify-center sm:gap-16 gap-10'>
          <div className="title flex flex-col items-center justify-center sm:gap-2 gap-1">
            <H5>
            Testimony
            </H5>
            <Spoon />
            <H2>
            Happy customers
            </H2>
          </div>
          <div className="top flex flex-col sm:flex-row items-center sm:gap-8 gap-2">
            <div className="child flex sm:flex-row flex-col items-start gap-2 sm:gap-4">
              <div className="img sm:w-[206px] w-[126px] sm:h-[210px] h-[130px]">
                <img src={Customer01} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br className='hidden sm:block'/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br className='hidden sm:block'/> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Wade Warren
                </H3>
                <P className='text-[#F5EFDB]'>
                Sommelier
                </P>
              </div>
            </div>
            <div className="child flex sm:flex-row flex-col items-start gap-2 sm:gap-4">
              <div className="img sm:w-[206px] w-[126px] sm:h-[210px] h-[130px] ml-auto">
                <img src={Customer02} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text sm:text-start text-end">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br className='hidden sm:block'/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br className='hidden sm:block'/> mauris eget sit. Nulla scelerisque scelerisque congue.
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
          <div className="bottom flex flex-col sm:flex-row items-center sm:gap-8 gap-2">
            <div className="child flex sm:flex-row flex-col items-start gap-2 sm:gap-4">
              <div className="img sm:w-[206px] w-[126px] sm:h-[210px] h-[130px]">
                <img src={Customer03} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br className='hidden sm:block'/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br className='hidden sm:block'/> mauris eget sit. Nulla scelerisque scelerisque congue.
                </P>
                <H3>
                Robert Fox
                </H3>
                <P className='text-[#F5EFDB]'>
                Chef
                </P>
              </div>
            </div>
            <div className="child flex sm:flex-row flex-col items-start gap-2 sm:gap-4">
              <div className="img sm:w-[206px] w-[126px] sm:h-[210px] h-[130px] ml-auto">
                <img src={Customer04} alt=""  className='w-full h-full block'/>
              </div>
              <div className="text sm:text-start text-end">
                <P className='mb-4 italic'>
                Lorem ipsum dolor sit amet, consectetur adipiscing<br className='hidden sm:block'/> sit. auctor sit iaculis in arcu. Vulputate nulla lobortis<br className='hidden sm:block'/> mauris eget sit. Nulla scelerisque scelerisque congue.
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

      {/* video */}
      <section id="video" className='pt-[152px]'>
        <Container className='max-w-[1920px] relative after:content-[""] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[#0c0c0c66]'>
          <div className='w-full'>
          <img src={Video} alt="" className='w-full h-full'/>
          </div>
          <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30'>
          <img src={Play} alt="" className='sm:w-full w-[50px] sm:h-full h-[50px]'/>
          </div>
          <Rotating  className='top-[147px] left-[197px] z-30'/>
        </Container>
      </section>

      {/* awards */}
      <section id="awards" className='bg-Masked bg-cover sm:py-32 py-12'>
        <Container className='flex items-center gap-[111px]'>
          <div className="text flex flex-col justify-center sm:gap-16 gap-10">
          <div className="title flex flex-col justify-center sm:gap-2 gap-1">
            <H5>
            Awards & recognition
            </H5>
            <Spoon />
            <H2>
            Our Laurels
            </H2>
          </div>
          <div className="top flex sm:flex-row flex-col sm:items-center sm:gap-8 gap-6">
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
          <div className="bottom flex sm:flex-row flex-col sm:items-center sm:gap-8 gap-6">
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
          <div className="img w-[555px] h-[691px] hidden sm:block">
            <img src={Awards} alt=""  className='h-full w-full'/>
          </div>
        </Container>
      </section>

      {/* blog */}
      <section id="blog" className='sm:py-[152px] py-20'>
        <Container className='relative flex flex-col justify-center items-center gap-16'>
          <div className="title flex flex-col justify-center items-center sm:gap-2 gap-1">
            <H5>
            Blogs
            </H5>
            <Spoon />
            <H2>
            Gerícht updates
            </H2>
          </div>
          <div className="blog_main flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="child flex flex-col justify-center items-center sm:gap-6 gap-1">
              <div className="img sm:w-[412px] w-[320px] sm:h-[430px] h-[338px]">
                <img src={Blog01} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col sm:gap-8 gap-3 justify-start">
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
            <div className="child flex flex-col justify-center items-center sm:gap-6 gap-1">
              <div className="img sm:w-[412px] w-[320px] sm:h-[430px] h-[338px]">
                <img src={Blog02} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col sm:gap-8 gap-3 justify-start">
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
            <div className="child flex flex-col justify-center items-center sm:gap-6 gap-1">
              <div className="img sm:w-[412px] w-[320px] sm:h-[430px] h-[338px]">
                <img src={Blog03} alt="" className='w-full block'/>
              </div>
              <div className="info flex flex-col sm:gap-8 gap-3 justify-start">
                <div className="flex justify-between items-center">
                  <P className='text-[#FAFAFA]'>
                  06 Aug 2021
                  </P>
                  <P className='text-[#FAFAFA]'>
                  - Fred W
                  </P>
                </div>
                <Link to='/blogdetails'>
                <H3 className='hover:underline'>
                easy cooking for college<br /> students
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
          </div>
          <Button>
          View More
          </Button>
          <Rotating className='bottom-[-29px] left-full translate-x-[20px]'/>
        </Container>
      </section>

      {/* photo gallery */}
      <section id="gallery" className='bg-Masked bg-cover sm:block hidden'>
        <Container className='max-w-[1920px] pl-[310px] flex items-center gap-16 sm:py-32 py-12'>
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
            <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
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

export default Home