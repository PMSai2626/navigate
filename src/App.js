import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';


const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      
      
      <Routes>
        <Route exact path= "/"  element={<Home />} />
        <Route exact path= "/about"  element={<About />} />
        <Route exact path="/login" element = {<Login />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
