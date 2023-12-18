"use client";
import React, { useState } from "react";
import Food from "@/components/food";
import data from "../../../public/data.json";
import FoodItem from "@/components/fooditem";
import ProductItem from "@/components/ProductItems";
import Layout from "../layout";
import Order from "@/components/processingorderbtn";
import "../../app/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

function Cart() {
  const [buttonInfo, setButtonInfo] = useState(true);

  function togglePopup() {
    var blur = document.getElementById("blur")!;
    blur.classList.toggle("active");

    var popup = document.getElementById("popup")!;
    popup.classList.toggle("active");
  }

  const router = useRouter();

  function handleclick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    router.push("/cart/order/page");
  }

  return (
    <div className="cartcontainer">
      <Layout>
        <div className="cart pe-5 ps-2 mt-5" id="blur">
          <div className="carttable">
            <table>
              <tr>
                <td className="fw-bold">Product</td>
                <td className="fw-bold">Name</td>
                <td className="fw-bold">Extra</td>
                <td className="fw-bold">Price</td>
                <td className="fw-bold">Quantity</td>
                <td className="fw-bold">Total</td>
              </tr>
              <tr>
                <td>
                  <img src="/images/burgerpizza.jpg" width="100px" />
                </td>
                <td>Burga pizza</td>
                <td></td>
                <td>$40</td>
                <td>4</td>
                <td>$160</td>
              </tr>
            </table>
          </div>

          <div className="cartpayout bg-dark p-4 text-white">
            <p className="fw-bold fs-2 pb-2 text-white">CART TOTAL</p>
            <p>
              <span className="fw-bold text-white">Subtotal: $</span>160
            </p>
            <p>
              <span className="fw-bold text-white">Discount: $</span>79.60
            </p>
            <p>
              <span className="fw-bold text-white">Total: $</span>160
            </p>
            {buttonInfo ? (
              <button
                onClick={() => setButtonInfo(false)}
                className="btn bg-warning text-white w-100 d-block fw-bold rounded-4"
              >
                CHECKOUT NOW!
              </button>
            ) : (
              <Order togglePopup={togglePopup} />
            )}
          </div>
        </div>

        <div className="popup border mx-auto w-50 rounded" id="popup">
          <div className="p-3 mx-auto">
            <p className="fs-1">You will pay $12 on delivery</p>
            <p>Name Surname</p>
            <input
              type="text"
              placeholder="John Doe"
              className="fullname mt-2 mb-3 border border-dark w-100"
            />
            <br />
            <p>Phone Number</p>
            <input
              type="number"
              placeholder="+234 703 46 36"
              className="phone mt-2 mb-3 border border-dark w-100"
            />
            <br />
            <p>Address</p>
            <input
              type="text"
              placeholder="10 John street"
              className="adrress border mt-2 mb-3 lh-lg border-dark w-100"
            />{" "}
            <br />
            <button
              className="btn mx-auto btn-warning rounded border border-dark d-block p-1 ps-2 pe-2"
              onClick={handleclick}
            >
              Order
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
