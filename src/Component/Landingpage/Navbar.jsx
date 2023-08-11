import React from 'react'
import saillogo from '../../Assests/sail-logo.png'
import Dropdown from '../Dashboardlayouts/Dropdown'
import { Link } from 'react-router-dom'

function Navbar() {
   
  return (
    <div className=' bg-[#ea580c] h-[8rem]'>

        <div className=' h-10 px-36 pt-7'>
          <img className=' h-20' src={saillogo} alt="" />
        </div>
        
        <div className=' flex place-items-end justify-end px-28 gap-64'>
          <a className=' font-Poppins font-bold' href="/about.html">About</a>
          
            <Dropdown />
          <div className=' flex justify-between gap-10'>
            <Link to = "/Logininpage"><button className=' bg-[cyan] rounded h-10 w-16 font-serif text-blue-900'>Login</button></Link>
            <Link to = "/Signuppage"><button className=' bg-[blue] rounded h-10 w-16 font-serif text-white'>Signup</button></Link>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar
