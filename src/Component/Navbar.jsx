import React, { useState } from "react";
import { MapPin, Heart, ShoppingCart, Bell, Search, Menu, X } from "lucide-react";
import petyo from "../assets/petyologo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full shadow-md bg-white px-6 py-3 flex items-center justify-between">
        {/* Left Section: Logo & Location */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="flex items-center">
            <img src={petyo} alt="logo" className="h-14 object-contain" />
          </div>

          {/* Location (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-1 text-gray-600">
            <MapPin size={22} />
            <span className="text-sm">Kochi, India</span>
          </div>
        </div>

        {/* Middle Section: Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xl mx-auto shadow-sm">
            <Search size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search item"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-gray-600">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Heart className="cursor-pointer hover:text-red-500" size={22} />
            <ShoppingCart className="cursor-pointer hover:text-blue-500" size={22} />
            <Bell className="cursor-pointer hover:text-yellow-500" size={22} />

            {/* Account */}
            <div className="flex items-center space-x-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="account"
                className="w-10 h-10 rounded-full border"
              />
              <h1 className="text-sm font-medium">John</h1>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 md:hidden z-50">
            {/* Search Bar */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full">
              <Search size={20} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search item"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center justify-around text-gray-600">
              <Heart className="cursor-pointer hover:text-red-500" size={22} />
              <ShoppingCart className="cursor-pointer hover:text-blue-500" size={22} />
              <Bell className="cursor-pointer hover:text-yellow-500" size={22} />
            </div>

            {/* Account */}
            <div className="flex items-center space-x-2 border-t pt-4">
              <img
                src="https://i.pravatar.cc/40"
                alt="account"
                className="w-10 h-10 rounded-full border"
              />
              <h1 className="text-sm font-medium">John</h1>
            </div>
          </div>
        )}
      </nav>
      <div className="w-full bg-[#E3CBA3] shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between px-6 py-3 text-sm font-medium text-gray-800">
          <Link to="home" className="hover:text-black">Home</Link>
          <Link to="chat" className="hover:text-black">Chat</Link>
          <Link to="pet" className="hover:text-black">Pets</Link>
          <Link to="adoption" className="hover:text-black">Adoption</Link>
          <Link to="service" className="hover:text-black">Service</Link>
          <Link to="community" className="hover:text-black">Community</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
