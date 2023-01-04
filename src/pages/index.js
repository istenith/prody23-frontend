import React, {useState}from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/herosection/hero'

const Home=()=> {
const[isOpen, setIsOpen] = useState(false)

const toggle= ()=>{
  setIsOpen(!isOpen)
}
  return (
    <>
      <Sidebar isOpen= {isOpen} toggle={toggle} />
      <Navbar/>
      <Hero/>
    </>
  )
}

export default Home;
