import React from 'react'

const H5 = ({children, className}) => {
  return (
    <h5 className={`text-[23px] text-[#FFF] font-Cormorant font-bold leading-[130%] tracking-[0.92px] capitalize ${className}`}>
      {children}
    </h5>
  )
}

export default H5