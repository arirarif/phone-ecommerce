// // ProductList.jsx
// import React, { useState, useEffect } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import SidebarFilter from "../SidebarFilter/SidebarFilter";

// // Sample JSON Data (use actual data fetching in a real project)
// const productData = [
//   {
//     product_id: 1,
//     product_title: "Dell XPS 13",
//     product_image: "image1.jpg",
//     category: "Laptops",
//     price: "99.99",
//     description: "High-quality laptop",
//     specification: ["8GB RAM", "256GB SSD"],
//     availability: true,
//     rating: 4.5,
//   },
//   // ...other products
// ];

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All Products");

//   useEffect(() => {
//     // Fetch and set product data here, if you're fetching from an API
//     setProducts(productData);
//     setFilteredProducts(productData);
//   }, []);

//   const categories = [
//     "All Products",
//     "Laptops",
//     "Phones",
//     "Accessories",
//     "Smart Watches",
//     "MacBook",
//     "Iphone",
//   ];

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     if (category === "All Products") {
//       setFilteredProducts(products);
//     } else {
//       setFilteredProducts(
//         products.filter((product) => product.category === category)
//       );
//     }
//   };

//   return (
//     <div className="flex gap-4">
//       <SidebarFilter
//         categories={categories}
//         onSelectCategory={handleCategorySelect}
//       />
//       <div className="grid grid-cols-3 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductCard key={product.product_id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import SidebarFilter from "../SidebarFilter/SidebarFilter";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch product data
    fetch("/productsData.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });

    // Fetch categories data
    fetch("/categoriesData.json")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <div className="flex gap-4">
      <SidebarFilter
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />
      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.product_id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
