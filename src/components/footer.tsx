"use client";
import { useState } from "react";
import "../app/globals.css";
import Client from "./client";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { TfiPinterest } from "react-icons/tfi";

function Footer() {
  return (
    <div className="footer pt-5 pb-3 ps-2 pe-2">
      <div className="info">
        <p className="fw-bold">INFORMATION</p>
        <ul className="lh-lg mt-3 text-ash fw-bold ash">
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="topitems">
        <p className="fw-bold ">TOP ITEMS</p>
        <ul className="lh-lg mt-3 text-ash fw-bold">
          <li>Pepperoni</li>
          <li>Swiss Mushroom</li>
          <li>Barbeque Chicken</li>
          <li>Vegetarian</li>
          <li>Ham & Cheese</li>
        </ul>
      </div>
      <div className="others">
        <p className="fw-bold">OTHERS</p>
        <ul className="lh-lg mt-3 text-ash fw-bold">
          <li>Checkout</li>
          <li>Cart</li>
          <li>Product</li>
          <li>Locations</li>
          <li>Legal</li>
        </ul>
      </div>
      <div className="social">
        <p className="fw-bold mb-3">SOCIAL MEDIA</p>
        <div className="icons d-flex mb-2">
          <TiSocialFacebook
            style={{
              color: "white",
              fontSize: "2em",
              backgroundColor: "darkblue",
              padding: "5px",
            }}
          />
          <TfiPinterest
            style={{
              color: "white",
              fontSize: "2em",
              backgroundColor: "red",
              padding: "5px",
            }}
          />
          <TiSocialTwitter
            style={{
              color: "white",
              fontSize: "2em",
              backgroundColor: "lightblue",
              padding: "5px",
            }}
          />
          <FaInstagram
            style={{
              color: "white",
              fontSize: "2em",
              backgroundColor: "darkorange",
              padding: "5px",
            }}
          />
        </div>
        <p>Signup and get exclusive offers and coupon codes</p>
        <button className="btn btn-warning text-white rounded-4 ps-3 pe-3 mt-3 ">
          SIGN UP
        </button>
      </div>
    </div>
  );
}

export default Footer;
