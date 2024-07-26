import React from 'react'
import H5 from '../Layers/H5'
import Spoon from './Spoon'
import Button from './Button'
import H2 from '../Layers/H2'
import P from '../Layers/P'

const Subscribe = ({className}) => {
  return (
    <div className={`subscribe bg-[#0C0C0C] py-16 px-[252px] flex flex-col items-center justify-center gap-16 border border-[#dcca8733] shadow-[22px_30px_95px_1px_rgba(1, 1, 1, 1)] ${className}`}>
        <div className="title flex flex-col justify-center items-center">
            <H5>
                newsletter
            </H5>
            <Spoon className='my-2'/>
            <H2 className='whitespace-nowrap mb-6'>
            Subscribe to Our Newsletter
            </H2>
            <P className='text-white'>
            And never miss latest Updates!
            </P>
        </div>
        <div className="search flex items-center gap-8 w-full">
            <input type="text" placeholder='Email Address' className='w-full py-4 px-[19px] bg-transparent border border-[#F5EFDB] outline-none text-base text-[#FFF] placeholder:text-[#AAA] font-Cormorant font-normal leading-[175%] tracking-[0.64px]'/>
            <Button>
            Subscribe
            </Button>
        </div>
    </div>
  )
}

export default Subscribe