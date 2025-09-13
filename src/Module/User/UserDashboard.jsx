import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PetDetailPage from "./UserPetDetails";

const Dashboard = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* ===== Top Banner / Carousel ===== */}
      <div className="relative bg-[#E3CBA3] py-10 flex items-center justify-center text-center">
        <button className="absolute left-4 p-2 bg-white rounded-full shadow-md">
          <ChevronLeft />
        </button>

        <div>
          <h1 className="text-3xl font-bold">Great Sale</h1>
          <p className="text-sm mt-1">12 - 14 July</p>
          <p className="text-lg mt-2">
            Up to <span className="font-semibold">50%-60% off</span>
          </p>
          <p className="text-lg font-medium">Pet Beds</p>
        </div>

        <button className="absolute right-4 p-2 bg-white rounded-full shadow-md">
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        </div>
      </div>

      {/* ===== Shop by Category ===== */}
      <div className="bg-white shadow-sm p-6 mt-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Shop by Category</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Explore all categories
          </a>
        </div>

        <div className="flex justify-around">
          {[
            { label: "Dogs", img: "https://placedog.net/100/100?id=1" },
            { label: "Cats", img: "https://placekitten.com/100/100" },
            { label: "Birds", img: "https://loremflickr.com/100/100/bird" },
            { label: "Exotic Pets", img: "https://loremflickr.com/100/100/hedgehog" },
            { label: "Services", img: "https://loremflickr.com/100/100/dog,cat" },
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
              />
              <p className="mt-2 text-sm font-medium">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Deals Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-md font-semibold mb-4">
            Exclusive discounts on grooming, training & more
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placedog.net/200/150?id=5"
              alt="Deal"
              className="rounded-md object-cover"
            />
            <img
              src="https://placedog.net/200/150?id=6"
              alt="Deal"
              className="rounded-md object-cover"
            />
            <img
              src="https://placedog.net/200/150?id=7"
              alt="Deal"
              className="rounded-md object-cover"
            />
            <img
              src="https://placedog.net/200/150?id=8"
              alt="Deal"
              className="rounded-md object-cover"
            />
          </div>
          <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
            See all deals
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-md font-semibold mb-4">
            Blockbuster deals on premium pet products
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placedog.net/200/150?id=9"
              alt="Product"
              className="rounded-md object-cover"
            />
            <img
              src="https://placedog.net/200/150?id=10"
              alt="Product"
              className="rounded-md object-cover"
            />
          </div>
          <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
            View All
          </a>
        </div>
      </div>

      {/* ===== Offer Zone ===== */}
      <div className="bg-green-100 p-10 text-center mt-4">
        <h2 className="text-2xl font-bold">OFFER ZONE</h2>
        <p className="text-sm text-gray-600 mt-2">
          Best deals on pet products and services
        </p>
      </div>
      <PetDetailPage/>
    </div>
  );
};

export default Dashboard;
