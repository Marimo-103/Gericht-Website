import React from 'react'
import rotating_img from '/Common Images/Rotation.png' 


const Rotating = ({className}) => {
  return (
    <div className={`h-[146px] w-[146px] hidden sm:block absolute ${className}`}>
        <img src={rotating_img} alt="" className='w-full h-full block animate-rotate'/>
    </div>
  )
}

export default Rotating