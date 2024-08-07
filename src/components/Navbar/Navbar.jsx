import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-items'>
        <a href='#home'><span className='underline'></span>Home</a>
        <a href='#about'><span className='underline'></span>About</a>
        <a href='#projects'><span className='underline'></span>projects</a>
        <a href='#contact'><span className='underline'></span>Contact</a>
      </ul>
    </div>
  )
}

export default Navbar