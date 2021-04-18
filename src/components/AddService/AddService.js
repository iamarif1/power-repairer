import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("price", info.price);

    fetch("https://power-repairer.herokuapp.com/addService", {
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
      <Sidebar/>
      <div
        className="col-md-5 p-4 pr-5"
        style={{ position: "absolute", left: 300, backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add a Service</h5>
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
            <label htmlFor="exampleInputPassword1">Upload a image</label>
            <input
              onChange={handleFileChange}
              type="file"
              className="form-control"
              placeholder="Picture"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-warning text-white border-0">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddService;
