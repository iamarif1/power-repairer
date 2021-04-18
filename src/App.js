import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddReview from "./components/AddReview/AddReview";
import AddService from "./components/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from './components/Home/Home/Home';
import AddAdmin from './components/AddAdmin/AddAdmin';
import { createContext, useState } from "react";
import Login from "./components/Login/Login/Login";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddOrders from "./components/AddOrders/AddOrders";
import OrderList from "./components/OrderList/OrderList";
import ManageServices from "./components/ManageServices/ManageServices";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/addOrders">
            <AddOrders />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
 