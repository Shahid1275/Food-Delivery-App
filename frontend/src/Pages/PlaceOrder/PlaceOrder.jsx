import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Components/Context/StoreContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const { getTotalAmount, token, foodList, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = foodList
      .filter((item) => cartItems[item._id] > 0)
      .map((item) => ({ ...item, quantity: cartItems[item._id] }));

    const orderData = {
      address: data,
      items: orderItems,
      amount: getTotalAmount() + 2,
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      } else {
        toast.error('Failed to place order');
      }
    } catch (err) {
      console.error('Error placing order:', err);
      toast.error('An unexpected error occurred');
    }
  };

  useEffect(() => {
    if (!token || getTotalAmount() === 0) {
      navigate('/cart');
    }
  }, [token, getTotalAmount, navigate]);

  return (
    <form onSubmit={placeOrder} className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-farm8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Delivery Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                onChange={onChangeHandler}
                name="firstName"
                value={data.firstName}
                type="text"
                placeholder="First Name"
                className="p-2 border rounded-md"
                required
              />
              <input
                onChange={onChangeHandler}
                name="lastName"
                value={data.lastName}
                type="text"
                placeholder="Last Name"
                className="p-2 border rounded-md"
                required
              />
            </div>
            <input
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              onChange={onChangeHandler}
              name="street"
              value={data.street}
              type="text"
              placeholder="Street"
              className="w-full p-2 border rounded-md"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                onChange={onChangeHandler}
                name="city"
                value={data.city}
                type="text"
                placeholder="City"
                className="p-2 border rounded-md"
                required
              />
              <input
                onChange={onChangeHandler}
                name="state"
                value={data.state}
                type="text"
                placeholder="State"
                className="p-2 border rounded-md"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                onChange={onChangeHandler}
                name="zipcode"
                value={data.zipcode}
                type="text"
                placeholder="Zip Code"
                className="p-2 border rounded-md"
                required
              />
              <input
                onChange={onChangeHandler}
                name="country"
                value={data.country}
                type="text"
                placeholder="Country"
                className="p-2 border rounded-md"
                required
              />
            </div>
            <input
              onChange={onChangeHandler}
              name="phone"
              value={data.phone}
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>${getTotalAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded-md mt-4 hover:bg-primary-dark"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;