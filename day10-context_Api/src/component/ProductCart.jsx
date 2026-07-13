import React from "react";

const ProductCard = ({ product, setCartItems }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-3 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            onClick={() => setCartItems(prev => [...prev, product])}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;