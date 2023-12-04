"use client";
import PropTypes from 'prop-types';
import { FC } from 'react';
import Button from "./button";

interface FoodProps {
  name?: string;
  price?: number;
  img?: string;
  description?: string;
}

const Food: FC<FoodProps> = ({ name, price, img, description }) => {
  return (
    <div className="food">
      <img src={img} alt={`${name} Image`} />
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
    
