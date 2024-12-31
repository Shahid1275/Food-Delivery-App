import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { StoreContext } from '../../Components/Context/StoreContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {

  const {getTotalAmount, token, food_list, cartItems, url} = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]: value}))
  }

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item)=>{
      if(cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount()+2,

    }

    console.log(orderData);
    
    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}});
    console.log(response.data);
    
    if(response.data.success){
      const {session_url} = response.data;
      window.location.replace(session_url);
    } else {
      toast.error("An unexpected error occurred.");

      
    }
    
  }


  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input onChange={onChangeHandler} name='firstName' value={data.firstName} type="text" placeholder='First Name' required />
          <input onChange={onChangeHandler} name='lastName' value={data.lastName} type="text" placeholder='Last Name' required />
        </div>
        <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='Email Address' required />
        <input onChange={onChangeHandler} name='street' value={data.street} type="text" placeholder='Street' required />
      
      
      <div className="multi-fields">
        <input onChange={onChangeHandler} name='city' value={data.city} type="text" placeholder='City' required />
        <input onChange={onChangeHandler} name='state' value={data.state} type="text" placeholder='State' required />
      </div>
      
      <div className="multi-fields">
        <input onChange={onChangeHandler} name='zipcode' value={data.zipcode} type="text" placeholder='Zip code' required />
        <input onChange={onChangeHandler} name='country' value={data.country} type="text" placeholder='Country' required />
      </div>
      
      <input onChange={onChangeHandler} name='phone' value={data.phone} type="number" placeholder='Phone' required />
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
              <button type="submit" >PROCEED TO PAYMENT</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
