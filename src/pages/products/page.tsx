import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import FilterBar from "@/components/filterbar";
import MenuItem from "@/components/ProductMenu";
import Layout from "@/pages/layout";
import "../../app/globals.css";

export default function Home() {
  return (
    <div>
      <Layout>
        <FilterBar />
        <MenuItem />
      </Layout>
    </div>
  );
}
