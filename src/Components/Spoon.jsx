import React from 'react'
import spoon from '/Common Images/Spoon.png'

const Spoon = ({className}) => {
  return (
    <div className={`w-[40px] h-[9px] ${className}`}>
        <img src={spoon} alt="" className='block w-full h-full' />
    </div>
  )
}

export default Spoon