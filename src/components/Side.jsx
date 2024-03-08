import React from "react";
import "./side.css";
import { Link } from "react-router-dom";

function Side() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Employees_Attendance</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                {/* <p>Attendence-Report</p> */}
                 <Link to="/reports">Attendance_Report</Link> 
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#forms-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-journal-text"></i>
            <span>Employees</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="forms-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                   <Link to="/add">Add Employees</Link>   
              </a>
            </li>
            <li>
              <a href="#">
               <Link to="/details"> Employee_Details</Link>
                
             {/* <Link to="/Employee_Details">Employees Details</Link>  */}
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#tables-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-layout-text-window-reverse"></i>
            <span>Tables</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="tables-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>General Tables</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Data Tables</span>
              </a>
            </li>
          </ul>
        </li>

        {/* <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#charts-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-bar-chart"></i>
            <span>Charts</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="charts-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Charts.js</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>ApexCharts</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a
            href="#"
            className="nav-link collapsed"
            data-bs-target="#icons-nav"
            data-bs-toggle="collapse"
          >
            <i className="bi bi-gem"></i>
            <span>Icons</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="icons-nav"
            className="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Bootstrap Icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Remix icons</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-circle"></i>
                <span>Boxicons</span>
              </a>
            </li>
          </ul>
        </li> */}
      </ul>
    </aside>
  );
}

export default Side;
