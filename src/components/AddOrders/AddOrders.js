import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useContext } from 'react';
import { userContext } from '../../App';

const AddOrders = () => {
      const [loggedInUser, setLoggedInUser] = useContext(userContext);

      const [info, setInfo] = useState({});
      const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
      };

      const handleSubmit = () => {
        const formData = new FormData();
        formData.append("name", info.name);
        formData.append("price", info.price);
        formData.append("email", info.email);
        formData.append("service", info.service)

        fetch("https://power-repairer.herokuapp.com/addOrder", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
    return (
      <section className="container-fluid row">
        <Sidebar />
        <div
          className="col-md-5 p-4 pr-5"
          style={{
            position: "absolute",
            left: 300,
            backgroundColor: "#F4FDFB",
          }}
        >
          <h5 className="text-brand">Book</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                defaultValue={loggedInUser.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
                defaultValue={loggedInUser.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Price</label>
              <input
                onBlur={handleBlur}
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Service</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="service"
                placeholder="Service"
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-warning text-white border-0"
            >
              Submit
            </button>
          </form>
          <div className="mt-5">
              <h3 className="mb-4">Pay Now</h3>
              <ProcessPayment/>
          </div>
        </div>
      </section>
    );
};

export default AddOrders;