"use client";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";

function Order() {
  const openWindows = () => {
    window.open("https://www.sandbox.paypal.com/signin", "_blank");
  };

  function toggle() {
    window.opener.togglePopup();
  }

  return (
    <div>
      <button
        className="btn fw-bold mb-2 mt-2 cashdelivery bg-white text-blue d-block"
        onClick={toggle}
      >
        CASH ON DELIVERY
      </button>

      <a href="https://www.sandbox.paypal.com/signin" target="_parent">
        <button
          className="btn paypal bg-warning d-block fw-bold"
          onClick={openWindows}
        >
          Pay<span>Pal</span>
        </button>
      </a>
    </div>
  );
}

export default Order;
