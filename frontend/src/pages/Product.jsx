import React from "react";

const ProductDetail = ({ product }) => {
  // Sample data for colors and sizes
  const sampleColors = ["red", "blue", "green", "yellow"];
  const sampleSizes = ["S", "M", "L", "XL"];

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="mt-4">
              <img
                src="/img3.jpeg"
                alt="product.name"
                className="w-full h-full object-center object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="max-w-xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:pt-16 lg:pb-0 lg:px-0 lg:max-w-none">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              product.name
            </h1>
            <div className="mt-3">
              <h2 className="text-3xl text-gray-900">Rs. {"10000"}</h2>
            </div>

            {/* Description and details */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-700">
                Description
              </h3>
              <p className="text-base text-gray-700 mt-2">
                product.description
              </p>
            </div>

            <form className="mt-6">
              {/* Colors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Color</h3>
                <div className="flex items-center space-x-3 mt-2">
                  {sampleColors.map((color, index) => (
                    <label
                      key={index}
                      className={`bg-${color}-600 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer border-2 border-white`}
                    >
                      <input
                        type="radio"
                        name="color-choice"
                        value={color}
                        className="sr-only"
                        aria-labelledby={`color-choice-${index}-label`}
                      />
                      <span
                        id={`color-choice-${index}-label`}
                        className="sr-only"
                      >
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-700">Size</h3>
                  <a
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <div className="grid grid-cols-4 gap-4 mt-2">
                  {sampleSizes.map((size, index) => (
                    <label
                      key={index}
                      className="relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase cursor-pointer focus:outline-none bg-white hover:bg-gray-100"
                    >
                      <input
                        type="radio"
                        name="size-choice"
                        value={size}
                        className="sr-only"
                        aria-labelledby={`size-choice-${index}-label`}
                      />
                      <span id={`size-choice-${index}-label`}>{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add to cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
