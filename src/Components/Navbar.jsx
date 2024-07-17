import React from 'react'
import Container from '../Layers/Container'

const Navbar = () => {
  return (
    <nav>
      <Container className='flex justify-between items-center'>
        <div className="logo">logo</div>
        <div className="logo">menu</div>
        <div className="logo">button</div>
      </Container>
    </nav>
  )
}

export default Navbar