import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("https://power-repairer.herokuapp.com/reviews")
    .then(res => res.json())
    .then(data => setReviews(data))
  }, [])
    return (
      <section className="mt-5">
        <div className="text-center">
          <h6 className="mb-3">TESTIMONIES</h6>
          <h2>Happy Clients & Feedbacks</h2>
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-75 row">
            {reviews.map((review) => (
              <Testimonial review={review} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Testimonials;