import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgSearch } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" bg-gray-950 h-24 text-white flex justify-around items-center w-full">
      <div className="first">
        <div className="logo w-20 ">
          <Link to="/">
            <img
              className="hover:scale-110 transition-all"
              src="logo.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <div className="second hidden md:flex">
        <nav>
          <ul className="flex space-x-10 ">
            <li className="relative group">
              <Link to="/">Home</Link>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="relative group">
              <Link to="/products">Products</Link>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="relative group">
              <Link to="/about">About</Link>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
            <li className="relative group">
              <Link to="/contact">Contact</Link>
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="third hidden md:flex space-x-6 items-center ">
        {/* <CgSearch className="cursor-pointer" /> */}
        <Link to="/cart">
          {" "}
          <LuShoppingCart className="cursor-pointer" />
        </Link>
        <Link
          to="/signin"
          className="bg-[#202020] px-4 py-2 rounded-md bg-gray-90 hover:bg-black"
        >
          Shop Now
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="z-10 md:hidden absolute top-24 left-0 right-0 bg-[#141414] text-white py-2">
          <ul className="flex flex-col items-center">
            <li className="py-2">
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link to="/products" onClick={toggleMenu}>
                Products
              </Link>
            </li>
            <li className="py-2">
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="py-2">
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            {/* <li className="py-2 cursor-pointer">
              <CgSearch />
            </li> */}
            <li className="py-2 cursor-pointer">
              <LuShoppingCart />
            </li>
            <li className="py-2">
              <Link
                to="/signin"
                className="bg-[#202020] px-4 py-2 rounded-md bg-gray-90 hover:bg-black"
                onClick={toggleMenu}
              >
                Shop Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
