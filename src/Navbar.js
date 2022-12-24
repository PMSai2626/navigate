import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='card'>
        <Link to="/"><img src='https://res.cloudinary.com/doqm5spnb/image/upload/v1671860886/pdib9r9rk5j1m7oala1p_raldms.webp'
         alt='img' className='image' /> </Link>
      </div>
      <ul className='ul'>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/login"><li>login</li></Link>
      </ul>
      </nav>
  )
}

export default Navbar
