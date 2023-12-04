"use client";
import { useState } from "react";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import SingleBurger from "@/app/singleburger/page";

function NavBar() {
  const [cartItems, setCartItems] = useState(0);
  
    function addtocart() {
      setCartItems(cartItems + 1);
    }

    function removefromcart() {
      if (cartItems > 0) {
        setCartItems(cartItems - 1);
      } else {
        setCartItems(0);
      }
    }
  

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <img src="/images/pizzalogo.png" alt="" />
      </div>

      <img className="pizzaheader" src="/images/pizzaheader.png" alt="" />

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">Pages</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a className="search-icon mt-1">
          <FiSearch />
        </a>
        <a href="/cart" className="cartbadge">
          <FaCartShopping style={{ color: "blue", fontSize: "27px" }} />
        </a>
        <div className="indices bg-danger border border-danger pe-1 ps-1 rounded-circle text-white">
          {cartItems}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
