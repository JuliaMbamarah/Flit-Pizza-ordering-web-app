"use client";
import PropTypes from "prop-types";
import { FC } from "react";

interface TableProductsProps {
  name?: string;
  price?: number;
  img?: string;
  description?: string;
  key?: string;
}

const TableProducts: FC<TableProductsProps> = ({ name, price, img, key }) => {
  return (
    <tr className="tableproductsrow">
      <td>
        <img className="tableproductimage" src={img} alt="" />
      </td>
      <td>{key}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>
        <div className="d-flex gap-2">
          <div>
            <button className="bg-success text-white border">Edit</button>
          </div>
          <div>
            <button className="bg-danger text-white border">Delete</button>
          </div>
        </div>
      </td>
    </tr>
  );
};

TableProducts.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  key: PropTypes.string,
};

export default TableProducts;
