"use client";
import "../app/globals.css";
import ProductFood from "./productfood";
import data from "../../public/data.json";
import ProductItem from "./ProductItems";

function MenuItem() {
  return (
    <div>
      <div className="menu">
        <ProductItem />
      </div>
    </div>
  );
}

export default MenuItem;
