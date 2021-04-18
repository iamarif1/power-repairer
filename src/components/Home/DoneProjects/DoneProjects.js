import React from 'react';
import work1 from '../../../images/work-1.jpg'
import work2 from '../../../images/work-2.jpg'
import work3 from '../../../images/work-3.jpg'
import work4 from '../../../images/work-4.jpg'

const DoneProjectsData = [
  {
    name: "Work4",
    img: work1,
  },
  {
    name: "Work4",
    img: work2,
  },
  {
    name: "Work4",
    img: work3,
  },
  {
    name: "Work4",
    img: work4,
  },
];

const DoneProjects = () => {
    return (
      <section>
        <p className="text-center text-warning fw-bold">Projects</p>
        <h3 className="text-center fw-bold">Done Projects</h3>
        <div className="d-flex justify-content-center mt-5">
          <div className="row">
            {DoneProjectsData.map((doneProject) => (
              <div className="col-md-3">
                <img
                  src={doneProject.img}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default DoneProjects;