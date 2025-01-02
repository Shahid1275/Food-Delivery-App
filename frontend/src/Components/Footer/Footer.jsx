import React from "react";
import './Footer.css'
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src={assets.footer_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure
            illum rem necessitatibus vel architecto, id delectus iste
            asperiores! Amet!
          </p>
          <div className="footer-social-icons">
            <a className="footer-social-icon-facebook" href="https://web.facebook.com/profile.php?id=100066694849448" target="_blank"><img className="footer-social-icon-facebook" src={assets.facebook_icon} alt="" /></a>
            <a href="https://wa.me/923217077229"
              target="_blank"><img className="footer-social-icon" src={assets.whatsapp_icon} alt="" /></a>
            <a href="https://www.linkedin.com/in/arslan-haider-a0b297257/"
              target="_blank"><img className="footer-social-icon" src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+92 321-7077229</li>
                <li>arslanhaiderchand88@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 &copy; Cooking-Food - All Right Reserved</p>
    </div>
  );
};

export default Footer;
