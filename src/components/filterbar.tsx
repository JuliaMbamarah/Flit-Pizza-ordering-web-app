"use client";
import { useState } from "react";
import "../app/globals.css";
import { LuListFilter } from "react-icons/lu";

function FilterBar() {
  return (
    <div className="filterbar mt-5 mb-4">
      <div>
        <button className="btn btn-warning p-1 text-white d-flex align-items-center gap-2 rounded-5 ps-3 pe-3 fw-bold">
          <LuListFilter style={{ color: "white", fontSize: "22px" }} />
          Filter
        </button>
      </div>
      <div className=" resultsdefault">
        <div>
          <p className="fw-bold">Showing all 9 results</p>
        </div>
        <div>
          <form className="" action="#">
            <select className="select pe-5 pt-1 pb-1 ps-2" name="sorting" id="sort">
              <option>Default Sorting</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
