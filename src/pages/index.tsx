import NavBar from "@/components/nav";
import Homepage from "@/components/homepage";
import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import Layout from "./layout";
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Layout>
        <Homepage />
        <br />
        <DailyFresh />
        <br />
        <Menu />
        <br />
        <Strength />
        <Testimonial />
      </Layout>
    </div>
  );
}
