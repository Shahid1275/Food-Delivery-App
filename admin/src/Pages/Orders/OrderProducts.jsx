import React from 'react'
import './OrderProducts.css'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { assets } from '../../assets/admin_assets/assets';

const OrderProducts = ({backendUrl}) => {

  const [orders, setorders] = useState([]);

  const fetchOrders = async()=>{
    const response = await axios.get(backendUrl+"/api/order/list");

    if(response.data.success){
      setorders(response.data.data);
      console.log(response.data.data);
      
    } else {
      toast.error("Error");
    }
  }

  const statusHandler = async(event, orderId)=>{
    const response = await axios.post(backendUrl + "/api/order/status", {
      orderId,
      status: event.target.value
  });

  if(response.data.success) {
    await fetchOrders();
  }
    
  }

  useEffect(()=>{
    fetchOrders();
  },[])


  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {
          orders.map((order, index)=>(
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {
                    order.items.map((item, index)=>{
                      if(index === order.items.length - 1) {
                        return item.name + " X " + item.quantity
                      } else {
                        return item.name + " X " + item.quantity + ", "
                      }
                    })
                  }
                </p>
                <p className='order-item-name'>{order.address.firstName +" " + order.address.lastName}</p>
                <div className="order-item-address">
                  <p>{order.address.street+ ","}</p>
                  <p>{order.address.city+ ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <p>Items: {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event, order._id)} value={order.status}>
                <option value="Food Proccessing">Food Proccessing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OrderProducts
