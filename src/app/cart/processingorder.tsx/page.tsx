"use client";
import Food from "@/components/food";
import data from "../../../../public/data.json";
import FoodItem from "@/components/fooditem";
import ProductItem from "@/components/ProductItems";
import Layout from "../../layout";

function ProcessingOrder() {
  return (
    <div className="processingorder">
      <div className="cart pe-5 ps-2 mt-5">
        <div className="carttable">
          <table>
            <tr>
              <td className="fw-bold">Order ID</td>
              <td className="fw-bold">Customer</td>
              <td className="fw-bold">Address</td>
              <td className="fw-bold">Total</td>
            </tr>
            <tr>
              <td> 6553e94e99e1964952785a2</td>
              <td>08162648391</td>
              <td>10 John Street</td>
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
            <span className="fw-bold text-white">Discount: $</span>0.00
          </p>
          <p>
            <span className="fw-bold text-white">Total: $</span>160
          </p>
          <button className="btn paypal bg-warning d-block fw-bold">
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProcessingOrder;
