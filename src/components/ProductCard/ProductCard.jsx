// ProductCard.jsx
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <img src={product.product_image} alt={product.product_title} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 font-semibold">{product.product_title}</h2>
      <p>Price: {product.price}</p>
      <button className="mt-2 p-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
