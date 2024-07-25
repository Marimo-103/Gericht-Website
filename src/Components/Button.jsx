import React from 'react'

const Button = ({children, className}) => {
  return (
    <button className={`py-2 px-8 bg-[#DCCA87] flex justify-center items-center text-base text-[#0C0B08] font-Cormorant font-bold leading-[175%] tracking-[0.64px] border border-[#DCCA87] transition-all duration-300 hover:bg-transparent hover:text-[#FFF] ${className}`}>
        {children}
    </button>
  )
}

export default Button