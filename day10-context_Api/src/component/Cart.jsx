import React from "react";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow rounded-xl p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>

                  <p className="text-gray-500">
                    Price: ${item.price}
                  </p>

                  <p className="text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-80 bg-white shadow rounded-xl p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between mb-6 text-xl font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;