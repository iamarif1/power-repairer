import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';


const AddAdmin = () => {
      const [info, setInfo] = useState({});
      const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
      };

      const handleSubmit = () => {
        const formData = new FormData();
        formData.append("email", info.email);

        fetch("https://power-repairer.herokuapp.com/addAdmin", {
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
          <h5 className="text-brand">Make Admin</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="email"
                placeholder="Email"
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
        </div>
      </section>
    );
};

export default AddAdmin;