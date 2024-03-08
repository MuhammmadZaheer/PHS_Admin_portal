import React from "react";
import "./employeeTracking.css";
 import Header from "../components/Header";
 import Side from "../components/Side";
import UserApiData from "../fetchingData/UserApiData";
import ApiPostScreenshots from "../fetchingData/ApiPostScreenshots";


const EmployeeTracking = () => {
  const  userDetails = UserApiData('https://phs.azzappointments.com/apis/public/api/admin/active-users')
  return (
    <>
     <Header />
    <Side /> 
      <div className=" EmployeeTrackings">
        <div className="user-list">
          
          {userDetails.map((user,index)=>(
            <ul key={index} className="emp_details">
            <p className="emp-user-name">{user.name}</p>
            <p className="emp-user-code">{user.emp_code}</p>
         
            </ul>
          ))}
        </div>
        <div className="app-info col" >
          <ApiPostScreenshots />

        {/* <div className="app-used row" >Here is the details of apps that are being used </div>
        <hr />
        <div className="app-screenshots row" >Here is the screenshots of the used apps</div> */}

        </div>
       
      </div>
    </>
  );
};

export default EmployeeTracking;
