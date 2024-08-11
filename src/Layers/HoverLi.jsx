import React from 'react'
import { Link } from 'react-router-dom'

const HoverLi = ({to, className, value, children}) => {
    return (
        <li>
            <Link to={to} className={`text-base lg:text-xs lg:p-[2px] font-Open-Sans font-normal leading-[175%] tracking-[0.64px] pl-2 hover:bg-[#0C0B08] hover:text-white block text-[#0C0B08] transition-all duration-300 ${className}`}>
                {value} 
                {children}
            </Link>
        </li>
    )
}

export default HoverLi