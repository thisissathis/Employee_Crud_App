import React from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ViewEmployee } from "./Api/api";

export default function EmployeeDetails() {
  const { empid } = useParams();
  let currentState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(empid);
    dispatch(ViewEmployee(empid));
  }, []);
  return (
    <div className="EmployeeDetails__container">
    <h1>Employee Details</h1>
    <div className="EmployeeDetails__container_card">
    
    <div className="EmployeeDetails__card">
      <h2>Emplyoee Name</h2>
      <p>{currentState?.viewemployee?.name}</p>
    </div>
    <div className="EmployeeDetails__card">
      <h2>Employee ID</h2>
      <p>{currentState?.viewemployee?.employeeid}</p>
    </div>
    <div className="EmployeeDetails__card">
      <h2>Emplyoee DOB</h2>
      <p>{currentState?.viewemployee?.dob}</p>
    </div>
    <div className="EmployeeDetails__card">
      <h2>Emplyoee Joining Date</h2>
      <p>{currentState?.viewemployee?.joiningdate}</p>
    </div>
    <div className="EmployeeDetails__card">
      <h2>Emplyoee Email ID</h2>
      <p>{currentState?.viewemployee?.emailid}</p>
    </div>
      
    </div>
    
    </div>
  );
}
