import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
      <section className="contact my-5 py-5">
        <div className="container">
          <div className="section-header text-center text-white mb-5">
            <h5 className="text-primary">Contact</h5>
            <h1 className="text-dark">Always connect with us</h1>
          </div>
          <div className="col-md-9 mx-auto">
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Address *"
                />
              </div>
              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject *"
                />
              </div>
              <div className="form-group m-2">
                <textarea
                  name=""
                  className="form-control"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message *"
                ></textarea>
              </div>
              <div className="form-group text-center">
                <button
                  type="button"
                  style={{border: "none" }}
                  className="btn-lg btn-warning text-white"
                >
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Contact;