"use client";
import "../app/globals.css";
import Food from "./food";
import data from "../../public/data.json";

/**
  * @component
 */

const FoodItem = () =>
  data.map((data, index) => (
    <Food
      key={index} 
     name={data.name}
      img={data.img}
      price={data.price}
      description={data.description}
    />
  ));

export default FoodItem;
