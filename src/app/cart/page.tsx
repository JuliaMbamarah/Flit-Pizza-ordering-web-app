"use client";
import { useState } from "react";
import Food from "@/components/food";
import data from "../../../public/data.json";
import FoodItem from "@/components/fooditem";
import ProductItem from "@/components/ProductItems";
import Layout from "../layout";
import Order from "@/components/processingorderbtn";

function Cart() {
  const [buttonInfo, setButtonInfo] = useState(false);

  return (
    <div>
      <div className="cart pe-5 ps-2 mt-5">
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

        <div className="paymentcard">
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
                className="btn paypal bg-warning d-block fw-bold"
              >
                CHECKOUT NOW!
              </button>
            ) : (
              <Order />
            )}
          </div>
        </div>
      </div>

      <div className="popup border border-dark mx-auto w-50 rounded">
        <div className="p-5 mx-auto w-100 ">
          <p className="fs-1">You will pay $12 on delivery</p>
          <p>Name Surname</p>
          <input
            type="text"
            className="fullname mt-2 mb-3 border border-dark w-75"
          />
          <br />
          <p>Phone Number</p>
          <input
            type="number"
            className="phone mt-2 mb-3 border border-dark w-75"
          />
          <br />
          <p>Address</p>
          <input
            type="text"
            className="adrress border mt-2 h-25 mb-3 border-dark w-75"
          />{" "}
          <br />
          <button
            className=" btn mx-auto btn-warning rounded border border-dark d-block"
            p-1
            ps-2
            pe-2
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
