"use client";
import "../app/globals.css";
import TableOrders from "./tableorders";
import data from "../../public/data.json";
import orderData from "../../public/order.json";

/**
 * @component
 */

const TableOrdersItem = () => {
  return orderData.map((orderitem, index) => (
    <TableOrders
      key={index}
      num ={index}
      phone={orderitem.phone}
      description={orderitem.status}
      price={orderitem.price}
    />
  ));
};

export default TableOrdersItem;
