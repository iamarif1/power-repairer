import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faUserPlus, faPlus, faCommentDots, faCartPlus, faList } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';

const Sidebar = () => {
 const [loggedInUser, setLoggedInUser] = useContext(userContext);
 const [isAdmin, setIsAdmin] = useState(false)

 useEffect(() => {
   fetch("https://power-repairer.herokuapp.com/isAdmin", {
     method: 'POST',
     headers: {'content-type': 'application/json'},
     body: JSON.stringify({email: loggedInUser.email})
   })
   .then(res => res.json())
   .then(data => setIsAdmin(data))
 }, [])
    return (
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/AddOrders"
              className="text-white"
            >
              <FontAwesomeIcon icon={faCartPlus} /> <span>AddOrder</span>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/orderList"
              className="text-white"
            >
              <FontAwesomeIcon icon={faList} /> <span>Order List</span>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/AddReview"
              className="text-white"
            >
              <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
            </Link>
          </li>
          { isAdmin && (
          <div>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/addService"
                className="text-white"
              >
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/addAdmin"
                className="text-white"
              >
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/manageServices"
                className="text-white"
              >
                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
              </Link>
            </li>
          </div>
          )}
        </ul>
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/"
            className="text-white"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Back To Home</span>
          </Link>
        </div>
      </div>
    );
};

export default Sidebar;