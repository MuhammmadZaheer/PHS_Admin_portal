import React from "react";
import Header from "../components/Header";
import Side from "../components/Side";
import FileUploader from "./FileUploader";
import DataContext from '../fetchingData/DataContext'
import "./attendenceReport.css";

const AttendenceReport = () => {
  return (
    <>
      <Header />
      <Side />
      <div className="container-fluid attendence-report-container">
        <h3 className="heading-report">Attendance reports</h3>
        <div className="upload-button-container "> 
          <FileUploader />
        </div>
      </div>
      <div className="dataContext">
      <DataContext /> 
      </div>
     
    </>
  );
};

export default AttendenceReport;
