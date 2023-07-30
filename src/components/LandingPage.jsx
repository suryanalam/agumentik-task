import React from "react";
import "./../assets/styles/LandingPage.css";
import img from "./../assets/images/hero-image1.png";
import { BsArrowRightShort, BsPlayCircle } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div className="hero-bg">
      <div className="hero-text-main-div">
        <div className="hero-text-div">
          <div className="title1-div">
            <p className="title1">Provide the best services</p>
          </div>
          <h3 className="title2">
            Consulting <br />
            and find the best <br />
            business solution
          </h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="cta-buttons-div">
            <button className="cta-btn1">
              <div>
                Free Consulting
                <BsArrowRightShort className="cta-btn-icon" />
              </div>
            </button>
            <div className="intro-div">
              <BsPlayCircle className="intro-icon" />
              <p>Watch Intro</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img-div">
        <img src={img} alt="hero-pic" />
      </div>
    </div>
  );
};

export default LandingPage;
