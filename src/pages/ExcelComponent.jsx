import React, { useState, useRef } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { read, utils, writeFile } from 'xlsx';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import { useNavigate } from "react-router-dom";


function ExcelTable({ columnNames, data }) {
    return (
        <div className="excel-table">
            <div className="excel-table-row">
                {columnNames.map((column, index) => (
                    <div key={index} className="excel-table-cell">
                        {column}
                    </div>
                ))}
            </div>
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
                <div className="frame-bottom">
                    <button className="drop-next-button" onClick={()=>{navigate("/metabase_input_3")}}>
                        <div className="drop-next">Next</div>
                    </button>
                </div>
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
                                <div className="component">
                                    <div className="id inter-semi-bold-slate-gray-10-5px2">ID</div>
                                </div>
                                <div className="component">
                                    <div className="dob inter-semi-bold-slate-gray-10-5px2">D.O.B</div>
                                </div>
                                <div className="component">
                                    <div className="height-cm inter-semi-bold-slate-gray-10-5px2">Height (cm)</div>
                                </div>
                                <div className="component">
                                    <div className="weight-kg inter-semi-bold-slate-gray-10-5px2">Weight (kg)</div>
                                </div>
                                <div className="component">
                                    <div className="primary-region inter-semi-bold-slate-gray-10-5px2">Primary region</div>
                                </div>
                                <div className="component">
                                    <div className="subtype inter-semi-bold-slate-gray-10-5px2">Subtype</div>
                                </div>
                                <div className="component">
                                    <div className="grade inter-semi-bold-slate-gray-10-5px2">Grade</div>
                                </div>
                                <div className="component-1">
                                    <div className="surgery inter-semi-bold-slate-gray-10-5px2">Surgery</div>
                                </div>


                            </div>
                            <div className="excel-page">
                                <ExcelTable columnNames={columnNames} data={excelData} />
                            </div>
                            

                        </div>
                    </div>
                    <div className="frame-bottom">
                    <button className="back-button" onClick={()=>{  navigate("/metabase_input_1")  }}>
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


