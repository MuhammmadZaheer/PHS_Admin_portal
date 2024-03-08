import React from "react";
import './dataContext.css'
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TrackingContainer from './TrackingContainer'

function DataPractice() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://phs.azzappointments.com/apis/public/api/admin/attendance-reports"
        );
        // console.log(response);
        // console.log(response.data);
        // console.log(response.data.data);
        if (response.data.data !== null || response.data.data !== undefined) {
          setUsers(response.data.data);
          
        } else {
          
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid main">
      {/* <div>
        {
          users.map((user, index) => <div key={index}>{user.name}</div>)}
      </div> */}

      <div className="card-container ">
        {users &&
          Object.entries(users).map(([id, user]) => (
            <div key={id} className="card-details">
              <span>
                <span className="id">{user.id}</span>
              </span>
              <span>
                <span className="name">{user.name}</span>
              </span>
              <div style={{ display: "flex" }} className="tracking-container  ">
                <ScrollerContainer user={user} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

function ScrollerContainer({ user }) {
  
  return (
    <div className="container-fluid ">
      <div
        style={{
          width: "100%",
          overflow: "scroll",
          scrollBehavior: "smooth",
        }}
      >
        <div className="content-box container-fluid">
          {
            user.trackings_data.map((tracking,index)=>(
              <TrackingContainer key={index} tracking={tracking} />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default DataPractice;
