import React from 'react';
import image from '../../../images/HeaderMain.jpg'

const HeaderMain = () => {
    return (
      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h5 className="text-success">WE CARE ABOUT YOUR CAR</h5>
                <br />
                <h1 className="mb-3 text-uppercase fw-bold">
                  It's Time To <br /> Repair Your Cars..
                </h1>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Atque facere molestiae numquam nisi tempore <br/> sed? Lorem ipsum dolor sit amet.</p>
                <button className="btn text-white border-0 btn-warning">
                  Get Appointment
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-fluid rounded" src={image} alt="" />
            </div>
          </div>
        </div>
      </main>
    );
};

export default HeaderMain;