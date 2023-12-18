"use client";
import Food from "@/components/food";
import data from "../../../../public/data.json";
import FoodItem from "@/components/fooditem";
import ProductItem from "@/components/ProductItems";
import Layout from "@/pages/layout";
import "../../../app/globals.css";
import { GrDeliver } from "react-icons/gr";
import { MdPayment } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function ProcessingOrder() {
  return (
    <Layout>
      <div className="processingorder">
        <div className="cart pe-5 ps-2 mt-5">
          <div className="carttableorder">
            <table>
              <thead>
                <tr>
                  <td className="fw-bold">Order ID</td>
                  <td className="fw-bold">Customer</td>
                  <td className="fw-bold">Address</td>
                  <td className="fw-bold">Total</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 6553e94e99e1964952785a2</td>
                  <td>08162648391</td>
                  <td>10 John Street</td>
                  <td>$160</td>
                </tr>
              </tbody>
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
            <button className="btn rounded-4 bg-warning d-block fw-bold text-white  w-100">
              PAID
            </button>
          </div>

          <div className="processingicons d-flex">
            <div className="text-center">
              <MdPayment style={{ fontSize: "100px" }} /> <br />
              Payment <br />
              <FaCheckCircle style={{ color: "green", fontSize: "30px" }} />
            </div>
            <div className="text-center">
              <img
                className="preparing blink"
                src="../../../../images/preparing.png"
                alt=""
              />{" "}
              <br />
              Preparing
            </div>

            <div className="text-center">
              <img
                className="delivery"
                src="../../../../images/delivery.png"
                alt=""
              />{" "}
              <br />
              On the way
            </div>
            <div className="text-center">
              <GrDeliver style={{ fontSize: "100px", opacity: "0.4" }} />
              <br />
              On the way
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProcessingOrder;
