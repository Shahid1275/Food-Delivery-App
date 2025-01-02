import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { ToastContainer } from 'react-toastify';
import Verify from "./Pages/Verify/Verify";
import MyOrders from "./Pages/MyOrders/MyOrders.jsx";

const App = () => {


  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    <ToastContainer />
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
      <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
