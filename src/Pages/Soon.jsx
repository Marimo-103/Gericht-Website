import React from 'react'
import Container from '../Layers/Container'
import Spoon from '../Components/Spoon'
import Button from '../Components/Button'
import H1 from '../Layers/H1'
import P from '../Layers/P'
import Rotating from '../Components/Rotating'
import { Link } from 'react-router-dom'


const Soon = () => {
  return (
    <div>
      <section className='bg-Masked bg-cover pt-[176px] pb-[235px]'>
        <Container className='flex flex-col justify-center items-center gap-10 text-center relative'>
          <Rotating  className='right-[-105px] top-[-56px]'/>
          <Rotating  className='right-full translate-x-[-20px] top-full translate-y-[100px]'/>
          <div className='flex flex-col gap-4 items-center justify-center'>
          <H1>
          Coming Soon
          </H1>
          <Spoon className='w-[60px] h-[14px]'/>
          </div>
          <P className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique feugiat orci tristique<br /> bibendum sollicitudin at aliquam. Nulla varius augue eu orci vel.
          </P>
          <div className="countdown flex items-center gap-[140px]">
            <div className="month">
              <div className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold leading-[130%] tracking-[1.92px]'>
                12
              </div>
              <div className='text-[#AAA] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] mt2'>
                Months
              </div>
            </div>
            <div className="month">
              <div className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold leading-[130%] tracking-[1.92px]'>
              32
              </div>
              <div className='text-[#AAA] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] mt2'>
              Days
              </div>
            </div>
            <div className="month">
              <div className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold leading-[130%] tracking-[1.92px]'>
              11
              </div>
              <div className='text-[#AAA] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] mt2'>
              Hours
              </div>
            </div>
            <div className="month">
              <div className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold leading-[130%] tracking-[1.92px]'>
              52
              </div>
              <div className='text-[#AAA] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] mt2'>
              Minutes
              </div>
            </div>
            <div className="month">
              <div className='text-[#F5EFDB] text-[64px] font-Cormorant font-semibold leading-[130%] tracking-[1.92px]'>
              34
              </div>
              <div className='text-[#AAA] text-[23px] font-Cormorant font-bold leading-[130%] tracking-[0.92px] mt2'>
              Seconds
              </div>
            </div>
          </div>
          <Button>
            <Link to='/'>Back To Home</Link>
          </Button>
        </Container>
      </section>
      <P className='text-center'>
        2021 Gerícht. All Rights reserved.
      </P>
    </div>
  )
}

export default Soon