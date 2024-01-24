import React from "react";

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={item.image} alt={item.name} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{item.name}</span>
          <span className="text-red-500 text-xs">{item.category}</span>
          <button
            onClick={() => removeFromCart(item.id)}
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
        />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
};

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Check if cartItems is undefined or not an array
  if (!cartItems || !Array.isArray(cartItems)) {
    return (
      <div className="my-10">
        <div className="flex justify-center items-center text-red-500">
          No Items here
        </div>
      </div>
    );
  }

  // If cartItems is valid, proceed with calculations
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="my-10">
      <div className="flex shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <div className="flex items-center">
              <button className="text-gray-500 text-sm mr-6">
                Continue Shopping
              </button>
              <button className="text-blue-500 text-sm mr-6">
                Clear Shopping Cart
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm lg:text-xl font-bold">Total Cost:</span>
              <span className="text-sm lg:text-xl font-bold ml-2">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
