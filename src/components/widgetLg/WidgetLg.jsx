import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./widgetLg.css";
import axios from "axios";

export default function WidgetLg() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try{
        // const res = await userRequest.get("/orders")
        const res = await axios.get(
          "http://localhost:3001/api/orders")
        
        setOrders(res.data)
      } catch(err) {
        console.log(err)
        console.log("err")
      }
    }
    getOrders();
  }, [] )

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map(order =>(

          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{order.createdAt}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type="{order.status}" />
          </td>
        </tr>
              ))}
      </table>
    </div>
  );
}
