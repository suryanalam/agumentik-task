import React from "react";
import "./../assets/styles/Header.css";
import logo from "./../assets/images/logo.png";
import { IoLocationOutline} from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="header-main-div">
        <div className="header-logo-div">
          <img
          className="header-logo"
            src={logo}
            alt="Docplanner Group"
          />
        </div>
        <div className="contact-div">
          <div className="contact-sub-div">
            <IoLocationOutline className="contact-icon" />
            <div className="contact-details">
              <h3>Location</h3>
              <p>Warsaw, Poland</p>
            </div>
          </div>
          <div className="contact-sub-div">
            <MdOutlineMailOutline className="contact-icon" />
            <div className="contact-details">
              <h3>Email us</h3>
              <p>
                <a href="mailto:agumentik@gmail.com">augumentik@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="contact-sub-div">
            <FiPhoneCall className="contact-icon" />
            <div className="contact-details">
              <h3>Call us</h3>
              <p>
                <a href="tel:+48 22 389 77 99">(+48) 22 389 77 99</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
