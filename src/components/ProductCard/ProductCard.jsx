import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <img src={product.product_image} alt={product.product_title} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-2 font-semibold">{product.product_title}</h2>
      <p>Price: {product.price}</p>
      <Link to={`/product/${product.product_id}`}>
        <button className="mt-2 p-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
