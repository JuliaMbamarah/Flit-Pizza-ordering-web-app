"use client";
import PropTypes from 'prop-types';
import { useState } from "react";
import "../app/globals.css";
import Button from "./button";

function Food({ name, price, img, description }) {
  return (
    <div className="food">
      <img src={img} />
      <div className="nameprice mb-2">
        <h4 className="foodname fw-bold">{name}</h4>
        <p className="foodprice text-danger fw-bold">${price}</p>
      </div>
      ⭐⭐⭐⭐⭐
      <p className="mt-2 mb-3">This is {description}</p>
      <Button />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
};

export default Food;
  
