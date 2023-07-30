import React from 'react'
import './../assets/styles/Banner.css'

import {LuClock2} from 'react-icons/lu'
import {FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='banner-bg'>
        <div className='banner-main-div'>
            <div className='office-timings-div'>
                <LuClock2 className='office-timings-icon'/>
                <p>Office Hour: Mon-Fri: 09:00 am - 06:00 pm</p>
            </div>
            <div className='connect-div'>
                <div className='social-media-icons-div'>
                    <FaFacebookF className='social-media-icon'/>
                    <FaTwitter className='social-media-icon'/> 
                    <FaLinkedinIn className='social-media-icon'/>
                    <FaYoutube className='social-media-icon'/>
                </div>
                <button>Make Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default Banner
