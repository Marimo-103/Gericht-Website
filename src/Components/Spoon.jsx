import React from 'react'
import spoon from '/Common Images/Spoon.png'

const Spoon = ({className}) => {
  return (
    <div className={`sm:w-[40px] sm:h-[9px] w-7 h-[6px] sm:my-2 my-1 ${className}`}>
        <img src={spoon} alt="" className='block w-full h-full' />
    </div>
  )
}

export default Spoon