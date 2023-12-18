"use client";
import "../app/globals.css";
import { FaCartShopping } from "react-icons/fa6";
import React from "react";

interface OrderProps {
  togglePopup: () => void;
}

function Order({ togglePopup }: OrderProps) {
  const openWindows = () => {
    window.open("https://www.sandbox.paypal.com/signin", "_blank");
  };

  function popup(mylink: string | HTMLAnchorElement, windowname: string) {
    if (!window.focus) return true;
    var href = typeof mylink === "string" ? mylink : mylink.href;
    var width = 400;
    var height = 200;

    var left = window.innerWidth / 2 - width / 2 + window.screenX;
    var top = window.innerHeight / 2 - height / 2 + window.screenY;

    window.open(
      href,
      windowname,
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`
    );
    return false;
  }

  return (
    <div>
      <div>
        <button
          className="btn fw-bold mb-2 mt-2 cashdelivery bg-white text-blue d-block"
          onClick={togglePopup}
        >
          CASH ON DELIVERY
        </button>

        <a
          href="https://www.sandbox.paypal.com/signin"
          className="paypalanchor btn paypal bg-warning d-block fw-bold"
          id="paypop"
          onClick={(e) => {
            e.preventDefault();
            popup(e.currentTarget, "Paypal");
          }}
        >
          Pay<span>Pal</span>
        </a>
      </div>
    </div>
  );
}

export default Order;
