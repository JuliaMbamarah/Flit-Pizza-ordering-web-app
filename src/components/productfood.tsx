"use client";
import { FC } from "react";
import Button from "./button";
import Link from "next/link";
import "../app/globals.css";
import type { UrlObject } from "url";
import { Url } from "next/dist/shared/lib/router/router";

interface ProductFoodProps {
  name?: string;
  price?: number;
  img?: string;
  description?: string;
  link: Url;
}

const ProductFood: FC<ProductFoodProps> = ({
  name,
  price,
  img,
  description,
  link,
}) => {

  return (
    <div className="food">
      <Link href={link}>
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
};

export default ProductFood;
