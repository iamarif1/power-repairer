import React from 'react';

const Testimonial = ({review}) => {
    return (
      <div style={{ height: "400px" }} className="col-md-4 text-center">
          <p className="mt-5">"{review.description}"</p>
        <h4>__{review.name}</h4>
      </div>
    );
};

export default Testimonial;