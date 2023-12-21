"use client";
import { useState } from "react";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import SingleBurger from "@/pages/singleburger/page";
import Link from "next/link";

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
        <Link href="/">Home</Link>
        <Link href="/products/page">Products</Link>
        <Link href="/">Pages</Link>
        <Link href="/blog/page">Blog</Link>
        <Link href="/">Contact</Link>
        <a className="search-icon mt-1">
          <FiSearch />
        </a>
        <div className="homecartcontainer">
          <Link href="/cart/page" legacyBehavior>
            <a className="cartbadge">
              <FaCartShopping style={{ color: "blue", fontSize: "27px" }} />
            </a>
          </Link>
          <div className="indices bg-danger border border-danger pe-1 ps-1 rounded-circle text-white">
            {cartItems}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
