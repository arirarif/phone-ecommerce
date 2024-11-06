import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; // Import icons

const NavBar = () => {
    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
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
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            {/* Right side - Icons */}
            <div className="navbar-end flex items-center space-x-4">
                <NavLink to="/cart" className="text-lg">
                    <FaShoppingCart className="hover:text-gray-500" />
                </NavLink>
                <NavLink to="/wishlist" className="text-lg">
                    <FaHeart className="hover:text-gray-500" />
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
