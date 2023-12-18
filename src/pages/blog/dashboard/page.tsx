import DailyFresh from "@/components/dailyfresh";
import Menu from "@/components/menu";
import Strength from "@/components/strength";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import FilterBar from "@/components/filterbar";
import MenuItem from "@/components/ProductMenu";
import TableProductsItem from "@/components/tableproductitem";
import TableOrdersItem from "@/components/tableordersitem";
import Layout from "@/pages/layout";

export default function Dashboard() {
  return (
    <Layout>
      <div className="dashboard d-flex gap-5">
        <div className="productstable">
          <h4>Products</h4>
          <table>
            <thead>
              <tr>
                <td>Image</td>
                <td>Id</td>
                <td>Title</td>
                <td>Price</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <TableProductsItem />
            </tbody>
          </table>
        </div>

        <div className="orderstable">
          <h4>Orders</h4>
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Customer</td>
                <td>Total</td>
                <td>Payment</td>
                <td>Status</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              <TableOrdersItem />
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
