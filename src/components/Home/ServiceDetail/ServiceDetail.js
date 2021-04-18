import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    return (
      <div style={{ height: "450px" }} className="col-md-4 text-center">
        <div className="animation">
          {service.image ? (
            <img src={`data:image/png;base64,${service.image.img}`} alt="" />
          ) : (
            <img
              className="img-fluid m-5"
              src={`https://power-repairer.herokuapp.com/${service.img}`}
              alt=""
            />
          )}
        </div>
        <h4>{service.name}</h4>
        <h6>$ {service.price}</h6>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
        <Link to="/addOrders">
          <button className="btn btn-warning border-0">Get Service</button>
        </Link>
      </div>
    );
};

export default ServiceDetail;