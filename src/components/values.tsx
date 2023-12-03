"use client";
import { useState } from "react";
import React from "react";
import "../app/globals.css";
import Button from "./button";

function Values({ logo, description, text }) {
  return (
    <div className="value m-2">
      <img width="40px" className="mb-2" src={logo} />
      <h6 className="fw-bold fs-6">{description}</h6>
      <p className="mt-2 mb-2">{text}</p>
    </div>
  );
}

export default Values;
