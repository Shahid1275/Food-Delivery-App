import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../assets/frontend_assets/assets";

const Header = () => {

  const [menu, setMenu] = useState('');


  return (
    <div className="header">
      <img className="new-year-icon" src={assets.new_year} alt="" />
      <div className="header-contents">
        <h2>Order your <br /> favorite food here</h2>
        <p>
        Craving something delicious? Explore a wide variety of cuisines and dishes from top restaurants near you. Fresh, fast, and delivered right to your doorstep—satisfy your hunger in just a few clicks!
        </p>
        <a className="header-btn" href='#explore-menu' onClick={()=>setMenu('menu')}>View Menu</a>
      </div>
    </div>
  );
};

export default Header;
