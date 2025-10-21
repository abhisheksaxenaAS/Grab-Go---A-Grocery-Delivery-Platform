import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const {
    user,
    setUser,
    setShowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
    axios,
    setCartItems,
  } = useAppContext();

  // Logout function
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        toast.success(data.message);
        setUser(null);
        setCartItems({});
        localStorage.removeItem("cartItems");
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Navigate to products page on search
  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-menu")) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white shadow-sm transition-all">

      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <h1 className="text-3xl font-bold text-primary">
          Grab<span className="text-gray-800">&</span>Go
        </h1>
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All Product</NavLink>
        <NavLink to="/about">About Us</NavLink>

        {/* Search bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <FiSearch className="text-gray-500 w-4 h-4" />
        </div>

        {/* Cart */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <FiShoppingCart className="w-6 h-6 text-gray-700 opacity-80 hover:text-primary transition" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {/* User / Login */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative profile-menu">
            {/* Profile Icon */}
            <div
              onClick={() => setShowProfileMenu((prev) => !prev)}
              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full cursor-pointer"
            >
              <FiUser className="text-primary text-2xl" />
            </div>

            {/* Dropdown */}
            {showProfileMenu && (
              <ul className="absolute top-12 right-0 bg-white shadow border border-gray-200 py-2.5 w-36 rounded-md text-sm z-[9999]">
                <li
                  onClick={() => {
                    navigate("/my-orders");
                    setShowProfileMenu(false);
                  }}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  My Orders
                </li>
                <li
                  onClick={() => {
                    logout();
                    setShowProfileMenu(false);
                  }}
                  className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Mobile Icons */}
      <div className="flex items-center gap-6 sm:hidden">
        {/* Cart Icon */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <FiShoppingCart className="w-6 h-6 text-gray-700 opacity-80 hover:text-primary transition" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>

        {/* Menu Icon */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
          className="text-gray-700 hover:text-primary transition"
        >
          <FiMenu className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-3 px-6 text-sm md:hidden z-50">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="w-full py-2 border-b border-gray-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="w-full py-2 border-b border-gray-100"
          >
            All Products
          </NavLink>

          {user && (
            <NavLink
              to="/my-orders"
              onClick={() => setOpen(false)}
              className="w-full py-2 border-b border-gray-100"
            >
              My Orders
            </NavLink>
          )}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="w-full py-2 border-b border-gray-100"
          >
            Contact
          </NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer w-full text-center px-6 py-2 mt-3 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="cursor-pointer w-full text-center px-6 py-2 mt-3 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
