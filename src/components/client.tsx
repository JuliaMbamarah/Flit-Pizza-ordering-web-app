"use client";
import { useState } from "react";
import "../app/globals.css";

function Client({ name, img }) {
  return (
    <div className="client text-center">
      <img className="rounded-circle mb-2" src={img} />
      <h4 className="fs-6 fw-bold">{name}</h4>
      <p className="mt-2 mb-2 text-center">
        Lorem ipsum is simply dummy text of the print book. It has survived not
        only five centuries, but also the leap.
      </p>
    </div>
  );
}

export default Client;
