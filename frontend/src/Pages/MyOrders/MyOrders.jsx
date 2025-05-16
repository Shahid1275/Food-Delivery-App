import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../Components/Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      setData(response.data.data || []);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      toast.error('Failed to load orders');
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      <div className="max-w-5xl mx-auto space-y-4">
        {data.map((order) => (
          <div
            key={order._id}
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:bg-gray-50"
          >
            <img src={assets.parcel_icon} alt="Order" className="h-10 mr-4" />
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                {order.items.map((item, index) =>
                  index === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                )}
              </p>
            </div>
            <p className="text-sm font-semibold">${order.amount}.00</p>
            <p className="text-sm mx-4">Items: {order.items.length}</p>
            <p className="text-sm flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              <b>{order.status}</b>
            </p>
            <button
              onClick={fetchOrders}
              className="ml-4 bg-primary text-white px-4 py-1 rounded-md hover:bg-primary-dark"
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;