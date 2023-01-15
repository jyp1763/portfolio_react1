import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] =useState(false)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F01BA9] text-black'>
        <div>
            <ul className='flex'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/work'>Work</a>
                </li>
                <li>
                  <a href='/skills'>Skills</a>
                </li>
                <li>
                  <a href='/contact'>Contact Me</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar