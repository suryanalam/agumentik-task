import React from 'react'
import './../assets/styles/About.css';
import { BsArrowRightShort } from "react-icons/bs";
import mission from './../assets/images/mission-img.png';
import vision from './../assets/images/vision-img.png';
import about from './../assets/images/about.jpeg';

const About = () => {
  return (
    <div className='about-bg'>
      <div className='about-img-div'>
            <img src={about} alt='about-pic' />
      </div>
      <div className='about-text-main-div'>
        <div className="title1-div">
            <p className="title1">About us</p>
        </div>
        <h2>Get right solution for <br /> your business</h2>
        <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='mission-div'>
            <div className='icons-div'><img src={mission} alt='mission'/></div>
            <div className='mission-div-details'>
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div className='vision-div'>
            <div className='icons-div'><img src={vision} alt='vision'/></div>
            <div className='vision-div-details'>
                <h3>Our Mission</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <button className="cta-btn1">
              <div>
                Free Consulting
                <BsArrowRightShort className="cta-btn-icon" />
              </div>
        </button>
      </div>
    </div>
  )
}

export default About
