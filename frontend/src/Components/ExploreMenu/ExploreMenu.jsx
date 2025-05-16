import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';

// Mock menu_list (replace with actual menu_list from assets)
const menu_list = [
  { menu_name: 'Pizza', menu_image: 'pizza.jpg' },
  { menu_name: 'Burger', menu_image: 'burger.jpg' },
  { menu_name: 'Pasta', menu_image: 'pasta.jpg' },
  { menu_name: 'Salad', menu_image: 'salad.jpg' },
];

const ExploreMenu = ({ category, setCategory }) => {
  // Debug: Log current category
  console.log('ExploreMenu - Current category:', category);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
        Explore Our Menu
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Delicious dishes made fresh just for you. Savor every bite!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all ${
              category === item.menu_name
                ? 'bg-[#ff6347] text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            <img
              src={item.menu_image || assets.placeholder}
              alt={item.menu_name}
              className={`w-20 h-20 object-cover rounded-full mb-2 ${
                category === item.menu_name ? 'border-2 border-white' : ''
              }`}
            />
            <p className="text-sm font-semibold">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="mt-8 border-gray-200 max-w-5xl mx-auto" />
    </div>
  );
};

export default ExploreMenu;