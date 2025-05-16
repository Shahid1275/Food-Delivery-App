import React from "react";
import './Footer.css'
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <img className="footer-logo" src={assets.footer_logo} alt="Company Logo" />
            <p className="footer-about-text">
              We are committed to delivering exceptional culinary experiences. 
              Our passion for quality ingredients and innovative recipes sets us apart.
            </p>
            <div className="footer-social-icons">
              <a href="https://web.facebook.com/profile.php?id=100066694849448" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 aria-label="Facebook">
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="https://wa.me/923217077229"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="WhatsApp">
                <img src={assets.whatsapp_icon} alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com/in/arslan-haider-a0b297257/"
                 target="_blank"
                 rel="noopener noreferrer"
                 aria-label="LinkedIn">
                <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/delivery">Delivery</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2 className="footer-heading">Contact Us</h2>
            <ul className="footer-contact-info">
              <li className="footer-contact-item">
                <i className="fas fa-phone"></i> +92 321-7077229
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-envelope"></i> arslanhaiderchand88@gmail.com
              </li>
              <li className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i> Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <hr className="footer-divider" />
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Cooking-Food. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;