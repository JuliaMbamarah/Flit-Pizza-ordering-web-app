"use client";
import { useState } from "react";
import "../app/globals.css";
import Button from "./button";

function Homepage() {
  return (
    <div className="homepage pe-2 ps-2">
      <div className="textarea">
        <h1>
          Handmade, With an Extra Pinch of <span>Love</span>{" "}
        </h1>
        <p className="pb-4 fs-4">
          Lorem Ipsum dolor is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Button />
      </div>
      <div className="imgarea">
        <div className="yellow"></div>
        <div className="ingredients">
          <div className="pizza">
            <img className="pizzaimg" src="/images/pizzahomepage.png" alt="" />
          </div>
          <div className="loweringedients">
            <div className="onions">
              <img className="onionsimg" src="/images/pizzaonion.png" alt="" />
            </div>
            <div className="smallpizza">
              <img
                className="smallpizzaimg"
                src="/images/greekpizza.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
