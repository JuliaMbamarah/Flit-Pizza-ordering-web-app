"use client";
import { useState } from "react";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";

function Button() {

  

  return (
    <button className=" ps-3 pe-3 p-2 rounded-5">
      <div className="d-flex gap-2 align-items-center">
        <FaCartShopping style={{ color: "white", fontSize: "17px" }} />
        <p>ORDER NOW</p>
      </div>
    </button>
  );
}

export default Button;
