import React from 'react'

const H5 = ({children, className}) => {
  return (
    <h5 className={`sm:text-[23px] text-lg text-[#FFF] font-Cormorant sm:font-bold font-semibold leading-[130%] tracking-[0.92px] capitalize ${className}`}>
      {children}
    </h5>
  )
}

export default H5