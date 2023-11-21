import React, { useState, useRef } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { read, utils, writeFile } from 'xlsx';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import { useNavigate } from "react-router-dom";


function ExcelTable({ columnNames, data }) {
    return (
        <div className="excel-table">
            {data.map((row, rowIndex) => (
                <div key={rowIndex} className="excel-table-row">
                    {columnNames.map((column, columnIndex) => (
                        <div key={columnIndex} className="excel-table-cell">
                            {row[columnIndex]}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}


export default function YourExcelComponent() {
    const [fileUploaded, setFileUploaded] = useState(false);
    const [excelData, setExcelData] = useState([]);
    const [columnNames, setColumnNames] = useState([]);

    const handleFileChange = (selectedFile) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            const wb = read(bstr, { type: 'binary' });

            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = utils.sheet_to_json(ws, { header: 1 });

            const columns = data.shift();
            setColumnNames(columns);
            setExcelData(data);
            setFileUploaded(true);
            localStorage.setItem('excelData', JSON.stringify(data));
            localStorage.setItem('columnNames', JSON.stringify(columns));
        };
        reader.readAsBinaryString(selectedFile);
    };

    const handleReupload = () => {
        setFileUploaded(false);
        setExcelData([]);
        setColumnNames([]);
        localStorage.removeItem('excelData');
        localStorage.removeItem('columnNames');
    };

    const handleButtonClick = () => {      
        if (!fileUploaded) {
          // If file is not uploaded, show an alert
          alert("Please upload your file and proceed.");
        } else {
          // File is uploaded, proceed with the next action
          // Add your logic here for the next action
        }
      };
      

    const navigate = useNavigate();

    const compRef = useRef();
  
    const logout = (event) => {
        compRef.current.logout();
        navigate("/")
    }

    return (
        <div>
            <Account ref={compRef} />
            {!fileUploaded ? (
                <><FileUploader
                    className="drag-drop-box"
                    handleChange={handleFileChange}
                    name="file"
                >
                    <div className="drag-drop-box">
                        <div className="drag-drop-a-file-here">Drag &amp; Drop a file here</div>
                        <div className="or">or</div>
                        <div className="frame-212">
                            <div className="choose-a-file inter-semi-bold-blue-dianne-10-5px">
                                Choose a file
                            </div>
                        </div>
                    </div>
                    

                </FileUploader>
                <button className="frame-bottom" onClick={handleButtonClick}>
                    <div className="drop-next-button">
                        <div className="drop-next">Next</div>
                    </div>
                </button>
                </>
            ) : (
                <>
                    <div className="excel-frame">
                        <div className="frame-516-1">
                            <div className="your-excel-sheet">Your excel sheet</div>
                            <button className="frame-212" onClick={handleReupload}>
                                <div className="reupload-file inter-semi-bold-blue-dianne-10-5px-2">Reupload file</div>
                            </button>
                        </div>
                        <div className="excel-input-frame">
                            <div className="input-list">
                            {columnNames.map((columnName, index) => (
                                <div className='component'>
                                    <div key={index} className="id inter-semi-bold-slate-gray-10-5px2">
                                    {columnName}
                                    </div>
                                </div>
                            ))}
                            </div>
                            <div className="excel-page">
                                <ExcelTable columnNames={columnNames} data={excelData} />
                            </div>
                            

                        </div>
                    </div>
                    <div className="frame-bottom">
                    <button className="back-button" onClick={()=>{  navigate("/getting_started_1")  }}>
                        <div className="back">Back</div>
                    </button>
                    <button className="next-button" onClick={()=>{  navigate("/metabase_input_3")  }}>
                        <div className="next">Next</div>
                    </button>
                    </div>
                </>
            )}
        </div>
    );
}


