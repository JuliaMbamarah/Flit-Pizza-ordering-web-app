"use client";
import "../app/globals.css";
import TableProduct from "./tableproducts";
import data from "../../public/data.json";

/**
 * @component
 */

const TableProductsItem = () => {
  return data.map((dataitem, index) => (
    <TableProduct
      key={index}
      num = {index}
      name={dataitem.name}
      img={dataitem.img}
      price={dataitem.price}
    />
  ));
};

export default TableProductsItem;
