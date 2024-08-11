import React from 'react'

const H3 = ({children, className}) => {
    return (
      <h3 className={`sm:text-[32px] text-[#DCCA87] font-Cormorant font-normal sm:leading-[130%] sm:tracking-[1.28px] capitalize ${className}`}>
          {children}
      </h3>
    )
}

export default H3