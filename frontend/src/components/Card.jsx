import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="img aspect-w-16 aspect-h-9">
          <img
            className="w-full h-full object-cover"
            src="/img2.jpeg"
            alt="Sunset in the mountains"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Ravr</div>
          <p className="text-gray-700 text-base">Rs. 10000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
