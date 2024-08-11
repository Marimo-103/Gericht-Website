import React from 'react'

const H1 = ({children, className}) => {
  return (
    <h1 className={`sm:text-[90px] text-[60px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] sm:tracking-[3.6px] tracking-[2.6px] capitalize ${className}`}>
        {children}
    </h1>
  )
}

export default H1