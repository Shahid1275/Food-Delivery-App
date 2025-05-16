import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({ id, image, name, price, description }) => {
  const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext);

  // Debug: Log item data
  console.log('FoodItem - Rendering:', { id, name, image, price, cartItems: cartItems[id] });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={`${url}/images/${image}`}
          alt={name}
        />
        {!cartItems[id] ? (
          <button
            onClick={() => addToCart(id)}
            className="absolute bottom-2 right-2 p-2 bg-[#ff6347] rounded-full text-white hover:bg-[#e5533d]"
          >
            <img src={assets.add_icon_white} alt="Add to cart" className="w-6 h-6" />
          </button>
        ) : (
          <div className="absolute bottom-2 right-2 flex items-center space-x-2 bg-white rounded-full p-1 shadow">
            <button onClick={() => removeFromCart(id)}>
              <img
                src={assets.remove_icon_red}
                alt="Remove from cart"
                className="w-6 h-6"
              />
            </button>
            <span className="text-sm font-semibold">{cartItems[id]}</span>
            <button onClick={() => addToCart(id)}>
              <img src={assets.add_icon_green} alt="Add more" className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <img src={assets.rating_starts} alt="Rating" className="h-5" />
        </div>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        <p className="text-[#ff6347] font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;