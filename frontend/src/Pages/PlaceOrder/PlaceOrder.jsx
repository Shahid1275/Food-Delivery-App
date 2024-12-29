import React, { useContext } from 'react'
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { StoreContext } from '../../Components/Context/StoreContext';

const PlaceOrder = () => {

  const {getTotalAmount} = useContext(StoreContext);


  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <input type="email" placeholder='Email Address' required />
        <input type="text" placeholder='Street' required />
      
      
      <div className="multi-fields">
        <input type="text" placeholder='City' required />
        <input type="text" placeholder='State' required />
      </div>
      
      <div className="multi-fields">
        <input type="text" placeholder='Zip code' required />
        <input type="text" placeholder='Country' required />
      </div>
      
      <input type="number" placeholder='Phone' required />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
            </div>
              <button type="submit">PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
