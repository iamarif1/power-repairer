import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const ManageServices = () => {
    const [manageServices, setManageServices] = useState([])

    useEffect(() => {
        fetch("https://power-repairer.herokuapp.com/services")
        .then(res => res.json())
        .then(data => setManageServices(data))
    }, [])

    const handleDeleteService = (id) => {
        fetch(`https://power-repairer.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result =>{
            console.log("delete successfully")
        })
    }
    return (
      <section className="container-fluid row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div
          className="col-md-7 p-4 pr-5"
          style={{
            position: "absolute",
            left: 300,
            backgroundColor: "#F4FDFB",
          }}
        >
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Price
                </th>
                <th className="text-secondary" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {manageServices.map((manageService, index) => (
                <tr>
                  <td>{manageService.name}</td>
                  <td>{manageService.price}</td>
                  <td>
                    <button className="btn btn-warning border-0" onClick={() => handleDeleteService(manageService._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default ManageServices;