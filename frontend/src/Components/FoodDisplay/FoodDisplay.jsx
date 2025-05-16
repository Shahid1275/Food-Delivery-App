import React, { useContext, useState } from 'react';
import { StoreContext } from '../Context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({ category }) => {
  const { foodList, fetchFoodList, token, setShowLogin } = useContext(StoreContext);
  const [error, setError] = useState(null);

  // Debug: Log foodList, category, token, and error
  console.log('FoodDisplay - foodList:', foodList, 'Category:', category, 'Token:', token, 'Error:', error);

  // Retry fetch with error handling
  const handleRetry = async () => {
    try {
      setError(null);
      await fetchFoodList();
    } catch (err) {
      console.error('Retry failed:', err);
      setError(err.response?.data?.message || 'Failed to connect to backend. Ensure backend is running on http://localhost:3000.');
    }
  };

  // Show loading spinner if foodList is undefined
  if (foodList === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-[#ff6347] rounded-full animate-spin"></div>
      </div>
    );
  }

  // Filter items based on category
  const filteredItems = foodList.filter(
    (item) => category === 'All' || category === item.category
  );

  // Show message if no items or error
  if (filteredItems.length === 0 || error) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Dishes Near You</h2>
        <p className="text-gray-600 mb-4">
          {error
            ? error
            : foodList.length === 0
              ? token
                ? 'Unable to load dishes. Ensure backend is running.'
                : 'Please log in to view dishes.'
              : `No dishes found in the "${category}" category.`}
        </p>
        <div className="flex justify-center space-x-4">
          {!token && foodList.length === 0 && !error && (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-[#ff6347] text-white px-4 py-2 rounded-md hover:bg-[#e5533d]"
            >
              Log In
            </button>
          )}
          {(error || foodList.length === 0) && (
            <button
              onClick={handleRetry}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Dishes Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <FoodItem
            key={item._id}
            id={item._id}
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;