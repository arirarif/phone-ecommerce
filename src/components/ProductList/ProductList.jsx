import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import SidebarFilter from "../SidebarFilter/SidebarFilter";
import Banner from "../Banner/Banner";

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
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      {/* Banner Component */}
      <Banner />

      {/* Sidebar and Product List */}
      <div className="flex gap-4 mt-40">
        <SidebarFilter
          categories={categories}
          onSelectCategory={handleCategorySelect}
        />
        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              There is no data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
