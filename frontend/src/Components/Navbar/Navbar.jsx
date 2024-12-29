import React, { useState } from 'react';
import './Navbar.css';
import {assets} from "../../assets/frontend_assets/assets"
import {Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("");


  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==='home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu==='menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu('app-download')} className={menu==='app-download' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={()=>setMenu('contact')} className={menu==='contact' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="Search_Icon" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            
            <div className="dot">

            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
   </div>
  )
}

export default Navbar
