"use client";
import "../app/globals.css";
import ProductFood from "./productfood";
import data from "../../public/data.json";

/**
  * @component
 */

const ProductItem = () =>
  data.map((data) => (
    <ProductFood
      name={data.name}
      img={data.img}
      price= {65}
      description={data.description}
      link = {data.link}
    />
  ));

export default ProductItem;
