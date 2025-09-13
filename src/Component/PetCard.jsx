import React from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const PetCard = ({ name, breed, age, gender, location, price, oldPrice, img }) => {
  return (
    <Link to={`/user/details`} className="block">
      <div className="flex items-start justify-between bg-white p-4 rounded-lg shadow-sm border mb-4 hover:shadow-md transition cursor-pointer">
        {/* Left: Pet Image */}
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-contain rounded"
          />
        </div>

        {/* Middle: Pet Details */}
        <div className="flex-1 px-4">
          {/* Name + Breed + Wishlist */}
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-semibold">
              {name} <span className="text-gray-500 text-sm">({breed})</span>
            </h2>
            <Heart className="text-gray-500 cursor-pointer hover:text-red-500" />
          </div>

          {/* Info */}
          <p className="text-sm text-gray-700">Age: {age}</p>
          <p className="text-sm text-gray-700">Gender: {gender}</p>
          <p className="text-sm text-gray-700">Location: {location}</p>
        </div>

        {/* Right: Price & Seller */}
        <div className="text-right w-40">
          {/* Price */}
          <p className="text-lg font-semibold">₹{price.toLocaleString()}</p>
          <p className="text-sm text-gray-500 line-through">
            ₹{oldPrice.toLocaleString()}
          </p>
          <p className="text-xs text-green-600">50% off</p>
          <p className="text-xs text-blue-600 cursor-pointer">Bank Offer</p>

          {/* Seller Info */}
          <div className="flex items-center justify-end mt-2 space-x-1">
            <span className="text-blue-600 text-xs font-medium px-2 py-0.5 border border-blue-600 rounded-full">
              Verified Seller
            </span>
          </div>
          <p className="text-xs text-gray-600 mt-1">⭐ 4.5</p>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
