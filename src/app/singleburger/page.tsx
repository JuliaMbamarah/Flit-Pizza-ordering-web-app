"use client";
import Food from "@/components/food";
import data from "../../../public/data.json";
import FoodItem from "@/components/fooditem";
import ProductItem from "@/components/ProductItems";
import Layout from "../layout";
import { FaRegHeart } from "react-icons/fa6";
import { useState } from "react";
import React from "react";
import NavBar from "@/components/nav";

function SingleBurger() {
  return (
    <div>
      <div className="singleburger">
        <div className="burgerpizzaimg">
          <img src="/images/burgerpizza.jpg" alt="" />
        </div>
        <div className="burgerpizzatext lh-lg">
          <p className="fw-bold fs-2">Burga pizza</p>
          <p className="text-ash fw-bold mb-1">
            <span className="text-danger fw-bold me-3">$20</span> 8 Reviews
          </p>
          <p>This is burga pizza</p>
          <p>Category: Chicken, Launch, Pizza, Burger</p>
          <p>Tags: Healthy, Organic, Chicken, Sauce</p>
          <p className="fw-bold fw-5 mt-2">Choose Pizza Size</p>
          <div className="pizzasizes d-flex align-items-center justify-content-around">
            <div className="small">
              <div>
                <img src="/images/pizzasizes.png" alt="Small" width="50px" />
              </div>
              <div className="tag bg-danger rounded-4 ps-1 pe-1">
                <p className="text-white text-center">Small</p>
              </div>
            </div>
            <div className="medium">
              <div>
                <img src="/images/pizzasizes.png" alt="Medium" width="75px" />
              </div>
              <div className="tag bg-danger rounded-4 ps-1 pe-1">
                <p className="text-white text-center">Medium</p>
              </div>
            </div>
            <div className="large">
              <div>
                <img src="/images/pizzasizes.png" alt="Large" width="100px" />
              </div>
              <div className="tag bg-danger rounded-4 ps-1 pe-1">
                <p className="text-white text-center">Large</p>
              </div>
            </div>
          </div>
          <p className="fw-bold mt-3">Choose additional ingredients</p>
          <input type="checkbox" name="Sauce" id="sauce" />
          Sauce
          <div className="addcart mt-5">
            <input
              className="inputcart border border-1 border-black ps-2 me-3"
              id="inputcart"
              type="number"
              value="1"
            />
            <button
              className="addcartbtn btn btn-warning ps-3 pe-3 me-3 rounded-5 text-white fw-bold"
              
            >
              ADD TO CART
            </button>
            <div className="heart rounded-circle p-2 border border-dark border-1">
              <FaRegHeart style={{ width: "13px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBurger;
