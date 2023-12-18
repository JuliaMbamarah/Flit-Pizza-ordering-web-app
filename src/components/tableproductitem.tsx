"use client";
import "../app/globals.css";
import TableProduct from "./tableproducts";
import data from "../../public/data.json";
import { v4 as uuidv4 } from "uuid";

/**
 * @component
 */

const TableProductsItem = () =>
  data.map((data, index) => (
    <TableProduct
      key={uuidv4()}
      name={data.name}
      img={data.img}
      price={data.price}
    />
  ));

  const uniqueKey = uuidv4();
  console.log(uniqueKey);

export default TableProductsItem;
