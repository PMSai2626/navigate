import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"


const Home = () => {
 const navigate = useNavigate();
  const gotonavigate = () =>{
    navigate("/login")
  }

  return (
    <div>
        <center>
      <h1>Home</h1>
      <button className='click' onClick={() => gotonavigate()} >click me</button>
      </center>
    </div>
  )
}

export default Home
