"use client";
import { useState } from "react";
import "../app/globals.css";
import Client from "./client";

function Testimonial() {
  return (
    <div className="testimonial">
      <img className="mt-3 mb-2" width="100px" src="/images/leaf.png" />
      <p className="text-danger fw-bold fs-5">Customer Feedback</p>
      <h3 className="fw-bold fs-3">Client Testimonials</h3>
      <div className="clients">
        <Client name="Takar Bowa" img="/images/client3.jpg" />
        <Client name="Takar Bowa" img="/images/client2.jpg" />
        <Client name="Takar Bowa" img="/images/client3.jpg" />
        <Client name="Takar Bowa" img="/images/client4.jpg" />
      </div>
    </div>
  );
}

export default Testimonial;
