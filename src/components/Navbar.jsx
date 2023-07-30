import React from 'react'
import './../assets/styles/Navbar.css'
import {FiSearch} from 'react-icons/fi'
import {IoApps} from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='nav-bg'>
        <nav className='navbar-div'>
            <a href="#Home">Home</a>
            <a href="#About">About us</a>
            <a href="#Service">Service</a>
            <a href="#Pages">Pages</a>
            <a href="Blog">Blog</a>
            <a href="Contact">Contact us</a>
        </nav>
        <div className='nav-right-div'>
          <FiSearch className='search-icon'/>
          <hr />
          <IoApps className='apps-icon'/>
        </div>
    </div>
  )
}

export default Navbar
