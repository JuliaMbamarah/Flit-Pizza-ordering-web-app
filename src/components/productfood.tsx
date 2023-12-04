"use client";
import { FC } from 'react';
import Button from "./button";
import Link from "next/link";
import "../app/globals.css";

interface ProductFoodProps {
  name?: string;
  price?: number;
  img?: string;
  description?: string;
  link?: string;
}

const ProductFood: FC<ProductFoodProps> = ({ name, price, img, description, link }) => {
  // Convert string link to URL object
  

  return (
    <div className="food">
      <Link href={href}>
        <img src={img} alt={`${name} Image`} />
      </Link>
      <div className="nameprice mb-2">
        <h4 className="foodname fw-bold">{name}</h4>
        <p className="foodprice text-danger fw-bold">${price}</p>
      </div>
      ⭐⭐⭐⭐⭐
      <p className="mt-2 mb-3">This is {description}</p>
      <Button />
    </div>
  );
}

export default ProductFood;
