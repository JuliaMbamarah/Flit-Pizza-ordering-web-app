"use client";
import "../app/globals.css";
import Food from "./food";
import data from "../../public/data.json";
import FoodItem from "./fooditem";

function Menu() {
  return (
    <div>
      <p className="text-danger fs-4 fw-bold">Popular Dishes</p>
      <h2 className="fw-bolder fs-2 mb-3">Browse our Menu</h2>
      <div className="menu">
        <FoodItem />
      </div>
    </div>
  );
}

export default Menu;
