import React from "react";
import { useState ,useEffect } from "react";
import * as XLSX from "xlsx";

const FileUploadButton = () => {
  const [fileData, setFileData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Please select a file.");
 
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }
    const fileName = file.name;
    const fileExtension = fileName.split('.').pop().toLowerCase();
    if (fileExtension !== 'xls' && fileExtension !== 'xlsx') {
      setErrorMessage("Please select a .xls or .xlsx file.");
      return;
    }
   

    reader.onload = (e) => {
      const data = e.target.result;
      const workBook = XLSX.read(data, { type: "binary" });
      const sheetName = workBook.SheetNames[0];
      const sheet = workBook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setFileData(parsedData);
      setErrorMessage("File Uploaded!");
      
    };

    reader.readAsBinaryString(file);
    
  };
  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
    setErrorMessage("");
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("uploadButton");
      if (button) {
        button.addEventListener("click", handleButtonClick);
      }
    });

    return () => {
      document.removeEventListener("DOMContentLoaded", handleButtonClick);
    };
  }, []);

  return (
    <div className="uploadFile">
    <button className="btn btn-primary rounded-pill" onClick={handleButtonClick}>
      Upload .XLSX File
    </button>
   
    <input 
      id="fileInput"
      type="file" 
      accept=".Xlsx , .xls" 
      style={{display: "none"}} 
      onChange={handleFileUpload} 
    />
     {errorMessage && <p>{errorMessage}</p>}
    {fileData.length>0 &&(
        <table className="container-fluid">
             <thead>
                <tr> 
           {Object.keys(fileData[0]).map((index)=>(
            <th key={index}>{index}</th>
           ))}
            </tr>
           </thead>
           <tbody>
            {fileData.map((row,index)=>(
                <tr key={index}>
                    {Object.values(row).map((value,index)=>(
                        <td key={index}>{value}</td>
                    ))}
                </tr>
            ))}
           </tbody>
        </table>
    )}
  </div>
  );
};

export default FileUploadButton;
