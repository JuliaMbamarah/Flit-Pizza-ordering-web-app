"use client";
import PropTypes from "prop-types";
import { FC } from "react";

interface TableOrdersProps {
  phone?: string;
  price?: number;
  description?: string;
  key?: string;
}

const TableOrders: FC<TableOrdersProps> = ({
  phone,
  price,
  description,
  key,
}) => {
  return (
    <tr className="tableordersrow">
      <td>{key}</td>
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
  phone: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  key: PropTypes.string,
};

export default TableOrders;
