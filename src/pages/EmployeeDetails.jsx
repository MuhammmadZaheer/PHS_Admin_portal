import React from "react";
import "./employeeDetails.css";
import Header from "../components/Header";
import Side from "../components/Side";

const EmployeeDetails = () => {
  return (
    <>
      <div>
        <Header />
        <Side />
      </div>

      <div className=" container-fluid emp-details ">
        <div className="employee-details">
          <h1>this is employee details</h1>
          <h1>this is employee details</h1>
          <h1>this is employee details</h1>
          <h1>this is employee details</h1>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
