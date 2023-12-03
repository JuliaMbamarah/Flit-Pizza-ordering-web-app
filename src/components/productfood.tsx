"use client";
import { useState } from "react";
import Button from "./button";
import Link from "next/link";
import "../app/globals.css";

function ProductFood({ name, price, img, description, link }) {
  return (
    <div className="food">
    <Link href={link}>
        <img src={img} />
      </Link>
      <div className="nameprice mb-2">
        <h4 className="foodname  fw-bold">{name}</h4>
        <p className="foodprice text-danger fw-bold">${price}</p>
      </div>
      ⭐⭐⭐⭐⭐
      <p className="mt-2 mb-3">This is {description}</p>
      <Button />
    </div>
  );
}

export default ProductFood;
