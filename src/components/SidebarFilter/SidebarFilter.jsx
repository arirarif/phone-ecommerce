import React from "react";

const SidebarFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md w-48">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`block w-full py-2 mb-2 text-left ${
            category === "All Products"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          } rounded hover:bg-purple-600 hover:text-white`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SidebarFilter;
