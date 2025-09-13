import React from "react";

const Filters = () => {
  return (
    <aside className="w-full md:w-1/4 bg-white p-4 border-r border-gray-200">
      <h2 className="font-semibold text-lg mb-4">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-blue-500" />
          <span>Pets</span>
        </label>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price</h3>
        <input type="range" min="0" max="50000" className="w-full" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹0</span>
          <span>₹50,000+</span>
        </div>
      </div>

      {/* Breed */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Breed</h3>
        <input
          type="text"
          placeholder="Search Breed"
          className="w-full p-2 border rounded text-sm"
        />
        <div className="mt-2 space-y-1 text-sm text-gray-700">
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Rottweiler</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Retriever</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Labrador</span>
          </label>
          <p className="text-blue-600 text-xs cursor-pointer">+20 more</p>
        </div>
      </div>

      {/* Customer Ratings */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Customer Ratings</h3>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>4★ & above</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>3★ & above</span>
        </label>
      </div>

      {/* Age */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Age</h3>
        <input type="range" min="0" max="10" className="w-full" />
        <div className="flex justify-between text-sm text-gray-600">
          <span>Min</span>
          <span>8+ years</span>
        </div>
      </div>

      {/* Color */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Color</h3>
        <div className="space-y-1 text-sm text-gray-700">
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Beige</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Black</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Brown</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" /> <span>Maroon</span>
          </label>
          <p className="text-blue-600 text-xs cursor-pointer">+10 more</p>
        </div>
      </div>

      {/* Health Status */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Health Status</h3>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>Verified</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>Vaccinated</span>
        </label>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Availability</h3>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>Immediate</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" /> <span>Pre-order</span>
        </label>
      </div>
    </aside>
  );
};

export default Filters;
