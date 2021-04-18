import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://power-repairer.herokuapp.com/orders")
        .then(res =>res.json())
        .then(data => setOrders(data))
    }, [])
    return (
      <section className="container-fluid row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div
          className="col-md-7 p-4 pr-5"
          style={{
            position: "absolute",
            left: 300,
            backgroundColor: "#F4FDFB",
          }}
        >
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Service
                </th>
                <th className="text-secondary" scope="col">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.service}</td>
                  <td>{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default OrderList;