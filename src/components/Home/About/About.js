import React from "react";
import AboutImg from "../../../images/about.jpg";

const About = () => {
  return (
    <div>
        <h3 className="text-center mb-3 fw-bold">
            About
        </h3>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mb-5">
          <div className="col-md-6 mt-5">
            <img src={AboutImg} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h6>WELCOME TO POWER REPAIRER</h6>
              <h1>We help more than 4 years serving customer car</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <button className="btn btn-warning border-0 text-white">
                About More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
