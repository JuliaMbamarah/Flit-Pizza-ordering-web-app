import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import FilterBar from "@/components/filterbar";
import "../../app/globals.css";
import MenuItem from "@/components/ProductMenu";

export default function Blog() {
  return (
    <div className="blog mt-5">
      <p className="text-center fw-bold fs-3 mb-3">Admin Dashboard</p>
      <form action="">
        <div className="inputcover text-center mb-3">
          <label htmlFor="name">
            <input
              className=" bloginput border border-dark p-2"
              type="text"
              value="Johndoe22@gmail.com"
              width="200px"
            />
          </label>
        </div>
        <div className="inputcover text-center mb-3">
          <label htmlFor="password">
            <input
              className=" bloginput border border-dark p-2"
              type="password"
              value="3456778567890345"
              width="200px"
            />
          </label>
        </div>
        <div className="text-center">
          <button className="blogbtn btn btn-success pe-5 ps-5">Sign In</button>
        </div>
      </form>
    </div>
  );
}
