import React, { useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddReview = () => {
    const [info, setInfo] = useState({});
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("name", info.name);
    formData.append("description", info.description);

    fetch("https://power-repairer.herokuapp.com/addReview", {
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
          <h5 className="text-brand">Review</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Your Review</label>
              <textarea
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="description"
                cols="30"
                rows="5"
                placeholder="Description"
              > </textarea>
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

export default AddReview;