import React from 'react'

const HoverUL = ({children, className}) => {
  return (
    <ul className={`flex flex-col p-1 lg:p-[2px] bg-[#DCCA87] w-28 lg:w-20 absolute top-full translate-y-2 left-[-75%] translate-x-half opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible rounded-[4px] lg:rounded-[2px] ${className}`}>
        {children}
    </ul>
  )
}

export default HoverUL