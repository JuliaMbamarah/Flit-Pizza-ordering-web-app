import NavBar from "../components/nav";
import HomePage from "../components/homepage";
import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import Layout from "./layout";

export default function Home() {
  return (
    <div>
      <HomePage />
      <br />
      <DailyFresh />
      <br />
      <Menu />
      <br />
      <Strength />
      <Testimonial />
    </div>
  );
}
