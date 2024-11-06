import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa"; // Import icons

const NavBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);

  const cartRef = useRef(null);
  const wishlistRef = useRef(null);

  useEffect(() => {
    // Load initial counts from localStorage
    updateCounts();

    // Event listener for `storage` changes (supports other tabs)
    window.addEventListener("storage", updateCounts);

    // Event listener for clicks outside of the dropdowns
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("storage", updateCounts);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setCartCount(cart.length);
    setWishlistCount(wishlist.length);
    setCartItems(cart);
    setWishlistItems(wishlist);
  };

  const handleClickOutside = (event) => {
    // Close cart dropdown if clicking outside of it
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setShowCartDropdown(false);
    }
    // Close wishlist dropdown if clicking outside of it
    if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
      setShowWishlistDropdown(false);
    }
  };

  const toggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
    setShowWishlistDropdown(false); // Hide wishlist dropdown if open
  };

  const toggleWishlistDropdown = () => {
    setShowWishlistDropdown(!showWishlistDropdown);
    setShowCartDropdown(false); // Hide cart dropdown if open
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4 mx-w-7xl mx-auto">
      {/* Left side - Logo */}
      <div className="navbar-start">
        <a className="text-xl font-bold">Gadget Heaven</a>
      </div>

      {/* Center - Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right side - Icons with Counts */}
      <div className="navbar-end flex items-center space-x-4 relative">
        {/* Cart Icon with Count */}
        <div className="relative" ref={cartRef}>
          <button onClick={toggleCartDropdown} className="text-lg relative">
            <FaShoppingCart className="hover:text-gray-500 text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-purple-600 rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Cart Dropdown */}
          {showCartDropdown && cartItems.length > 0 && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
              <h4 className="font-semibold mb-2">Cart Items</h4>
              <ul>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.product_title}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Wishlist Icon with Count */}
        <div className="relative" ref={wishlistRef}>
          <button onClick={toggleWishlistDropdown} className="text-lg relative">
            <FaHeart className="hover:text-gray-500 text-2xl" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-yellow-500 rounded-full px-2 py-1">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Wishlist Dropdown */}
          {showWishlistDropdown && wishlistItems.length > 0 && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 z-10">
              <h4 className="font-semibold mb-2">Wishlist Items</h4>
              <ul>
                {wishlistItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>{item.product_title}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
