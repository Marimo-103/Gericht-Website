import React from 'react'
import Container from '../Layers/Container'
import H5 from '../Layers/H5'
import H1 from '../Layers/H1'
import P from '../Layers/P'
import { Link } from 'react-router-dom'
import faq from '/FAQ Images/img.png'
import { IoIosArrowForward } from 'react-icons/io'
import CommonSlider from '../Components/CommonSlider'

const FAQ = () => {
  return (
    <div>
      {/* intro slider */}
      <section id="intro">
        <Container className='max-w-full relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#0c0c0c80]'>
          <div className="breadcrumbs flex flex-col items-center justify-center gap-6 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50">
            <H1 className='whitespace-nowrap'>
            Frequently Asked Questions
            </H1>
            <div className='flex items-center gap-2'>
            <Link to='/'>
            <H5>Home</H5>
            </Link>
            <IoIosArrowForward className='text-[#DCCA87] text-2xl'/>
            <Link to='/FAQ'>
            <H5>FAQ</H5>
            </Link>
            </div>
          </div>
          <div className="slide max-w-full">
            <CommonSlider />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className='pt-[152px]'>
        <Container className='flex justify-center gap-8'>
          <div className="img w-[634px] h-[648px]">
            <img src={faq} alt="" className='w-full h-full' />
          </div>
          <div class="accordion flex flex-col gap-4">
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              How do i reach to the restaurant?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              Is there a reservation required?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              Can i host an event at The restaurant?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              Is valet parking available at the restaurant?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              When are the happy hours of your bar?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
            <div class="accordion-item p-6 bg-[#242424] border border-[#242424] hover:border hover:border-[#DCCA87] transition-all duration-300">
              <div class="accordion-question text-[23px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize">
              Is seafood available at the restaurant?
              </div>
              <div class="accordion-answer">
                <P>
                <br />
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br /> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br /> consequat sunt nostrud amet.
                </P>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}

export default FAQ