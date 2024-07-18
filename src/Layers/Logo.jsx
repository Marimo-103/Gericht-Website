import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({src, className}) => {
  return (
    <Link className={`inline-block sm:w-[199px] w-[80px] ${className}`}>
        <img className='block w-full h-full' src={src} alt={src} />
    </Link>
  )
}

export default Logo