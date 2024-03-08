import { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./apiPostScreenshots.css";

const ApiPostScreenshots = () => {
  const [response, setResponse] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Function to open modal and set selected image
  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    axios
      .post("https://phs.azzappointments.com/apis/public/api/admin/app-usage", {
        user_id: "173",
      })
      .then((res) => {
        console.log("response", res.data);

        setResponse(res.data); // Extracting data from the response
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []); // Make sure to include url in the dependency array to prevent infinite loop
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${date.getDate()}-${(date.getMonth() + 1)
      .toString()
      .padStart(
        2,
        "0"
      )}-${date.getFullYear()} ${formattedHours}:${formattedMinutes}${ampm}`;
  };
  const formatUsageTime = (usage) => {
    const minutes = Math.floor(usage / 60);
    return `${minutes} miuntes`;
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <img src={selectedImage} alt="Screenshot" />
        <button onClick={closeModal}>Close</button>
      </Modal>
      {response && (
        <div>
          {/* <p>Screenshot Path: {response.screenshot_path}</p> */}
          {response.app_usage &&
            response.app_usage.map((usage, index) => (
              <div key={index}>
                {usage.app_usage &&
                  usage.app_usage.map((appData, appIndex) => (
                    <div key={appIndex} className="app-details-cards">
                      <p className="app-details-cards-app">
                        <b>{appData.app}</b>
                      </p>
                      <p className="app-details-card-usage">
                        {formatUsageTime(appData.usage)}
                      </p>
                    </div>
                  ))}
                {/* <p>Used App: {usage.app}</p> 
                         <p>Usage Time: {usage.usage}</p>  */}
                {/* <p>Tracking ID: {usage.tracking_id}</p> */}
                {/* <p>Created At: {usage.created_at}</p>
                        <p>Updated At: {usage.updated_at}</p> */}
                <br />
                {usage.screen_shots &&
                  usage.screen_shots.map((shot, shotIndex) => (
                    <div key={shotIndex} className="screen-shots">
                      {/* <p>Screen Shot ID: {shot.id}</p> */}
                      <img
                        src={`${response.screenshot_path}${shot.image}`}
                        alt={`Screenshot ${shotIndex}`}
                       className="shots-img"
                        onClick={() =>
                          openModal(
                            `${response.screenshot_path}${shot.image}`
                          )
                        }
                      />
                      <p> {formatDate(shot.created_at)}</p>
                      {/* <p>Updated At: {formatDate(shot.updated_at)}</p> */}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ApiPostScreenshots;
