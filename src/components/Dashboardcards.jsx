import React from "react";
 import "./dashboardcards.css";

function Dashboardcards() {
  return (
    <div className="dashboard-section">
      <div className="dashboard-cards">
        <div class="container-fluid">
          <div className="row">
            <div class="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Employees</h5>
                  <p className="card-text">Table of Employees Detail.</p>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Attendence_Reports</h5>
                  <p className="card-text">Information about Attendence.</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Updates</h5>
                  <p className="card-text">Latest Updates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="dashboard-h1"> Recently Joined Employees</h3>

      <table className="table  table-striped " id="tabel-card">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Default</td>
            <td>Defaultson</td>
            <td>def@somemail.com</td>
            <td>London</td>
          </tr>
          <tr>
            <td>Primary</td>
            <td>Joe</td>
            <td>joe@example.com</td>
            <td>Uk</td>
          </tr>
          <tr>
            <td>Success</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>Palistine</td>
          </tr>
          <tr>
            <td>Danger</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td>Pakistan</td>
          </tr>
          <tr>
            <td>Info</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td>India</td>
          </tr>
          <tr>
            <td>Warning</td>
            <td>Refs</td>
            <td>bo@example.com</td>
            <td>Saudi</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>Activeson</td>
            <td>act@example.com</td>
            <td>Mascat</td>
          </tr>
          <tr>
            <td>Secondary</td>
            <td>Secondson</td>
            <td>sec@example.com</td>
            <td>Dubai</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboardcards;
