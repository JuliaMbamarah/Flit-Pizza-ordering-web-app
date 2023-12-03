"use client";
import { useState } from "react";
import "../app/globals.css";

function DailyFresh() {
  return (
    <div className="dailyfresh">
      <div className="pizzapan">
        <img src="/images/pizzapan.png" alt="" />
      </div>
      <div className="dtextarea">
        <h3>Daily fresh and always tasty</h3>
        <p>
          There are many variations of Lorem Ipsum available, but the majority
          haved
        </p>
      </div>
      <div className="pizzagarlic">
        <img src="/images/pizzagarlic.png" alt="" />
      </div>
      <div className="space"></div>
    </div>
  );
}

export default DailyFresh;
