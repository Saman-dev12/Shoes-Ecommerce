import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main flex w-full ">
      <div className="first w-1/2 flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-950 text-white">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide mx-2">
            May Your Journey Be With Us...
          </h1>
          <p className="text-lg">
            Explore our latest collection of stylish shoes.
          </p>
          <div className="buttons pt-8">
            <Link
              to="/products"
              className="bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-black transition duration-300 ease-in-
          out transform hover:-translate-y-1 hover:scale-90"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      <div className="second w-1/2 flex justify-center items-center h-screen bg-gray-950">
        <div className="images grid grid-cols-2 gap-4 ">
          <div className="img1 h-64 relative overflow-hidden rounded-md shadow-md transform transition-transform hover:scale-110">
            <img
              src="img1.jpeg"
              alt="shoe"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="img2 h-48 relative overflow-hidden rounded-md shadow-md transform transition-transform hover:scale-110">
            <img
              src="img2.jpeg"
              alt="shoe"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="img3 h-52 relative overflow-hidden rounded-md shadow-md transform transition-transform hover:scale-110">
            <img
              src="img3.jpeg"
              alt="shoe"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="img1 h-64 relative overflow-hidden rounded-md shadow-md transform transition-transform hover:scale-110">
            <img
              src="img4.jpeg"
              alt="shoe"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
