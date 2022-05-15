import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import App from "./App";
import EmployeeDetails from "./EmployeeDetails";
import Header from "./Header";

function Employee() {
  return (
    <div className="employee-details-body">
    <Header />
      <Router>
        <Routes>
        
          <Route exact path="/" element={<App />} />
          <Route path="/employeeslist/:empid" element={<EmployeeDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Employee;
