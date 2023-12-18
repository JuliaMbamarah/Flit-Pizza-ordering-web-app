"use client";
import "../app/globals.css";
import TableOrders from "./tableorders";
import data from "../../public/data.json";
import order from "../../public/order.json";
import { v4 as uuidv4 } from "uuid";

/**
 * @component
 */

const TableOrdersItem = () =>
  order.map((order) => (
    <TableOrders
      key={uuidv4()}
      phone={order.phone}
      description={order.status}
      price={order.price}
    />
  ));

const uniqueKey = uuidv4();
console.log(uniqueKey);

export default TableOrdersItem;
