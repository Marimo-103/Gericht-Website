import React from 'react'

const P = ({children, className}) => {
  return (
    <p className={`sm:text-base text-xs text-[#AAA] font-Open-Sans font-normal leading-[175%] tracking-[0.64px] ${className}`}>
        {children}
    </p>
  )
}

export default P