import React, { useContext } from 'react';
import { StoreContext } from '../../Components/Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { foodList, cartItems, removeFromCart, getTotalAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 gap-4 p-4 bg-gray-100 text-sm font-semibold">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          {foodList.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="grid grid-cols-6 gap-4 p-4 items-center border-b">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
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
              onClick={() => navigate('/order')}
              className="w-full bg-primary text-white p-2 rounded-md mt-4 hover:bg-primary-dark"
            >
              Proceed to Checkout
            </button>
          </div>
          <div className="flex-1">
            <p className="mb-2">If you have a promo code, enter it here</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 p-2 border rounded-l-md"
              />
              <button className="bg-primary text-white p-2 rounded-r-md hover:bg-primary-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;