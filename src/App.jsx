import React from 'react'


import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'



const App = () => {
  return (
    <>
      <Navbar/>
      <Home/> 
      <About/>
      <Testimonials/>
      <Blog/>
      <Contact/>     
    </>
  )
}

export default App
