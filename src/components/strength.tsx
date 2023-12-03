"use client";
import "../app/globals.css";
import Food from "./food";
import data from "../../public/data.json";
import Values from "./values";

function Strength() {
  return (
    <div className="strength p-5">
      <p className="text-danger fw-bold fs-5">Our Strength</p>
      <h3 className="fw-bold fs-3">Why We Are The Best?</h3>
      <div className="values">
        <Values
          logo="/images/value1.png"
          description="All Kinds of Foods"
          text="Lorem ipsum is simply dummy text of the printing and type setting industry"
        />
        <Values
          logo="/images/value2.png"
          description="All Kinds of Foods"
          text="Lorem ipsum is simply dummy text of the printing and type setting industry"
        />
        <Values
          logo="/images/value3.png"
          description="All Kinds of Foods"
          text="Lorem ipsum is simply dummy text of the printing and type setting industry"
        />
        <Values
          logo="/images/value4.png"
          description="All Kinds of Foods"
          text="Lorem ipsum is simply dummy text of the printing and type setting industry"
        />
      </div>
      <div className="pizzastrength">
        <img
          width="290px"
          className="mt-3"
          src="/images/pizzastrength.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Strength;
