"use client";
import { useState } from "react";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";

function Button() {
  return (
    <button className=" border rounded-5 bg-warning p-0 m-0">
      <div className=" d-flex gap-2 text-white align-items-baseline pt-2 ps-4 pe-4 ">
        <div>
          <FaCartShopping style={{ color: "white", fontSize: "17px" }} />
        </div>
        <div>
          <p>ORDER NOW</p>
        </div>
      </div>
    </button>
  );
}

export default Button;
