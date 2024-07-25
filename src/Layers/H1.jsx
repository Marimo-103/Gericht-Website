import React from 'react'

const H1 = ({children, className}) => {
  return (
    <h1 className={`text-[90px] text-[#DCCA87] font-Cormorant font-bold leading-[130%] tracking-[3.6px] capitalize ${className}`}>
        {children}
    </h1>
  )
}

export default H1