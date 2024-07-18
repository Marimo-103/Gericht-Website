import React from 'react'

const HoverUL = ({children, className}) => {
  return (
    <ul className={`flex flex-col p-1 bg-[#DCCA87] w-28 absolute top-full translate-y-2 left-[-75%] translate-x-half opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible rounded-[4px] ${className}`}>
        {children}
    </ul>
  )
}

export default HoverUL