import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import FilterBar from "@/components/filterbar";
import "../../app/globals.css";
import MenuItem from "@/components/ProductMenu";
import { useState } from "react";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Blog() {
  const [username, setUsername] = useState("Johndoe22@gmail.com");
  const [password, setPassword] = useState("3456778567890345");

  if (typeof window !== "undefined") {
    let input = document.getElementById("username") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
  }

  const router = useRouter();

  const [admin, setAdmin] = useState(true);

  function handleclick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (username === "Johndoe22@gmail.com" && password === "3456778567890345") {
      router.push("/blog/dashboard/page");
    } else {
      setAdmin(false);
    }
  }

  return (
    <div className="blog mt-5">
      <p className="text-center fw-bold fs-3 mb-3">Admin Dashboard</p>
      <form action="">
        <div className="inputcover text-center mb-3">
          <label htmlFor="username">
            <input
              className=" bloginput border border-dark p-2"
              type="text"
              value={username}
              width="200px"
              placeholder=""
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="inputcover text-center mb-3">
          <label htmlFor="password">
            <input
              className=" bloginput border border-dark p-2"
              type="password"
              value={password}
              width="200px"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="text-center">
          <button
            className="blogbtn btn btn-success pe-5 ps-5"
            onClick={handleclick}
          >
            Sign In
          </button>
        </div>

        {admin ? (
          <p></p>
        ) : (
          <div>
            <p className="text-danger text-center">Wrong Credentials!</p>
          </div>
        )}
      </form>
    </div>
  );
}
