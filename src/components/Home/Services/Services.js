import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { useState, useEffect } from 'react';


const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://power-repairer.herokuapp.com/services")
    .then(res => res.json())
    .then(data => setServices(data))
  }, []);
    return (
      <section className="mt-5">
          <div className="text-center">
              <h6 className="mb-3">We Offer Services</h6>
              <h2>Our Car Services</h2>
          </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 row">
            {services.map((service) => (
              <ServiceDetail service={service} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services;