import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H3 from '../Layers/H3'
import H1 from '../Layers/H1'
import H2 from '../Layers/H2'
import P from '../Layers/P'
import Rotating from '../Components/Rotating'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import Blog01 from '/Blog Images/Blog-1.png'
import Details01 from '/Blog Images/details01_img.png'
import vid from '/Blog Images/details_video.png'
import quote from '/Blog Images/Quote.png'
import grill from '/Blog Images/grill.png'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'
import { MdOutlineModeComment, MdSearch } from 'react-icons/md'
import { GiSelfLove } from 'react-icons/gi'
import { FaXTwitter } from 'react-icons/fa6'
import comments from '/Blog Images/Comments.png'


const BlogDetails = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1>
            Our Blogs
            </H1>
            <div className='flex items-center gap-2 whitespace-nowrap'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/blog'>
            <H5>Our Blogs- grid</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/blog'>
            <H5>Cooking Tips</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/blog'>
            <H5>Tips for Prepping and Caring for your grill</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* blog details */}
      <section id="details" className='pt-[152px]'>
        <Container className='flex flex-col items-center justify-center gap-10 relative'>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex justify-between w-full">
              <P className='text-[#FAFAFA]'>
              16 Apr 2021
              </P>
              <P className='text-[#FAFAFA]'>
              - Annalisa L
              </P>
            </div>
            <H2>
            tips for prepping and caring for your grill
            </H2>
          </div>
          <div className="img w-full h-[430px]">
            <img src={Details01} alt="" className='block w-full'/>
          </div>
          <div className="info flex items-center gap-[69px] w-full">
            <div className="texts w-[856px] flex flex-col gap-10">
              <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.
              </P>
              <div className="flex flex-col gap-8">
                <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize'>
                How to prepare your grill
                </div>
                <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
                </P>
                <div className="flex flex-col gap-6">
                    <div className='point flex items-center justify-start gap-2'>
                      <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                      <P>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </P>
                    </div>
                    <div className='point flex items-center justify-start gap-2'>
                      <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                      <P>
                      Tincidunt pharetra ut lobortis id.
                      </P>
                    </div>
                    <div className='point flex items-center justify-start gap-2'>
                      <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                      <P>
                      Commodo sit libero lacus a egestas penatibus pretium quis lorem. 
                      </P>
                    </div>
                </div>
              </div>
              <div className="video w-full h-[346px] border border-[#DDAC87]">
                <img src={vid} alt="" className='w-full h-full block'/>
              </div>
              <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio. Elementum felis nibh at purus consectetur phasellus lacus, pellentesque dictumst. Pellentesque eu malesuada id vitae risus, libero. Ullamcorper turpis blandit faucibus turpis. Eu elit faucibus leo eget.
              </P>
              <div className="quote w-full h-[188px]">
                <img src={quote} alt="" className='w-full h-full block'/>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-8">
                  <div className='text-[#DCCA87] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize'>
                  How to care for your grill
                  </div>
                  <P>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tin<br /> cidunt pharetra ut lobortis id. Commodo sit libero lacus a<br /> egestas penatibus pretium quis lorem.
                  </P>
                  <div className="flex flex-col gap-6">
                      <div className='point flex items-center justify-start gap-2'>
                        <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                        <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </P>
                      </div>
                      <div className='point flex items-center justify-start gap-2'>
                        <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                        <P>
                        Tincidunt pharetra ut lobortis id.
                        </P>
                      </div>
                      <div className='point flex items-center justify-start gap-2'>
                        <div className="line w-4 h-[1px] bg-[#DCCA87] rounded-[1px]"></div>
                        <P>
                        Commodo sit libero lacus a egestas penatibus. 
                        </P>
                      </div>
                  </div>
                </div>
                <div className="img w-[301px] h-[301px]">
                  <img src={grill} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-14">
              <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt pharetra ut lobortis id. Commodo sit libero lacus a egestas penatibus pretium quis lorem. Purus morbi sagittis, faucibus odio.
              </P>
              <div className="flex items-center justify-between">
                <div className="hashtags flex gap-4">
                  <P>#Grilling</P>
                  <P>#Outdoors</P>
                  <P>#Cooking</P>
                </div>
                <div className="icons flex items-center gap-8">
                  <div className="comment flex items-center gap-4">
                  <MdOutlineModeComment className='text-[25px] text-[#DDAC87]'/>
                    <P>Comment</P>
                  </div>
                  <div className="like flex items-center gap-4">
                  <GiSelfLove className='text-[25px] text-[#DDAC87]'/>
                    <P>Like</P>
                  </div>
                </div>
              </div>
              </div>
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
          </div>
          <Rotating className='left-full translate-x-[20px] top-[50%] z-20'/>
        </Container>
      </section>

      {/* comments */}
      <section id="comments" className='pt-[152px]'>
        <Container className="relative">
          <div className="img w-[967px] h-[908px]">
            <img src={comments} alt="" />
          </div>
          <Rotating className='right-full translate-x-[-40px] bottom-0 z-20'/>
        </Container>
      </section>

    </div>
  )
}

export default BlogDetails