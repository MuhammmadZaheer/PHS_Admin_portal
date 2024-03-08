// export default UploadData;
import axios from "axios";
import React, { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(
    "Please select a file to upload.?"
  );
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.?");
      return;
    }

    const formData = new FormData();
    //console.log("file", selectedFile);
    formData.append("file", selectedFile);
    //console.log("formdata ", formData);
    var options = {
      data: { file: formData },
    };
    try {
      axios
        .post(
          "https://phs.azzappointments.com/apis/public/api/upload-biometric-sheet",
          formData
        )
        .then((response) => {
          console.log("response", response.data);
          setUploadStatus("File Uploaded.!");
          setTimeout(() => {
            setUploadStatus(" ");
            setTimeout(() => {
                setUploadStatus("Please select a file to upload.?");
              }, 1000);
          }, 3000);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus("Failed to upload file.");
    }
  };

  return (
    <div>
      <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
      <button onClick={handleUpload} className="btn btn-primary rounded-pill"  disabled={loading}>
        {loading ?setLoading(" Uploading....") : setLoading("Click to Upload")}
      </button>
      {uploadStatus && <p className="file-status">{uploadStatus}</p>}
    </div>
  );
}

export default FileUploader;
