"use client";
import PropTypes from "prop-types";
import { FC } from "react";

interface TableOrdersProps {
  phone: string;
  price: number;
  description?: string;
  num?: number;
}

const TableOrders: FC<TableOrdersProps> = ({ phone, price, num, description }) => {
  return (
    <tr className="tableordersrow">
      <td>{num}</td>
      <td>{phone}</td>
      <td>${price}</td>
      <td>cash</td>
      <td>{description}</td>
      <td>
        <button className="bg-success text-white border">Next Stage</button>
      </td>
    </tr>
  );
};

TableOrders.propTypes = {
  phone: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  num: PropTypes.number,
};

export default TableOrders;
