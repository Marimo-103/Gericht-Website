import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({to, className, value, children}) => {
  return (
    <li>
        <Link to={to} className={`text-base text-white font-Open-Sans font-normal leading-[175%] tracking-[0.64px] transition-all duration-300 hover:text-[#DCCA87] ${className}`}>
            {value} 
            {children}
        </Link>
    </li>
  )
}

export default Li