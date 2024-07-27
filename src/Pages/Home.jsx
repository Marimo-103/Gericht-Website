import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import Spoon from '../Components/Spoon'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import P from '../Layers/P'
import Fade from '../Components/Fade'
import line from '/Common Images/TOP_line.png'

const Home = () => {
  return (
    <div>

      {/* Intro banner */}
      <section id="banner" className='pt-12'>
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
      <section id="about" className='pt-[244px]'>
        <Container>

        </Container>
      </section>

    </div>
  )
}

export default Home