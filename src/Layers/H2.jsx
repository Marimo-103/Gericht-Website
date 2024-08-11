import React from 'react'

const H2 = ({children, className}) => {
  return (
    <h2 className={`sm:text-[64px] text-[36px] text-[#DCCA87] font-Cormorant font-semibold leading-[130%] tracking-[2.56px] capitalize ${className}`}>
        {children}
    </h2>
  )
}

export default H2