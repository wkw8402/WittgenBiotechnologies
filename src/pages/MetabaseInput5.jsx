import "../styling/MetabaseInput5.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

//Add New Row
function AddRowButton({ addRow }) {
  return (
    <div className="add" onClick={addRow}>
      <div className="add-font">+ Add</div>
    </div>
  );
}

//Error Message
function ParentComponent({ hasErrorOrWarning }) {

  return (
    <>
      {hasErrorOrWarning && (
        <div className="errorbox">
          <img src="/image/errorbox-icon.svg" alt="error-img" />
          <div className="errorbox-font">
            Please fill in the invalid/empty fields
          </div>
        </div>
      )}
    </>
  );
}

//Excel Table Function
function ExcelTable({ data, onCellChange, onErrorOrWarningChange }) {
  const [previousRow, setPreviousRow] = useState(null);


  useEffect(() => {
    setPreviousRow(data[data.length - 1]);
  }, [data]);

  useEffect(() => {
    if (data.length > 0) {
      setPreviousRow(data[0]);
    }
  }, [data]);

  function validateValue(value, previousValue) {
    if (
      value === "" ||
      value === null ||
      value === undefined ||
      String(value).toUpperCase() === "NA"
    ) {
      return "error";
    }

    if (previousValue !== null && typeof value !== typeof previousValue) {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && typeof previousValue === 'number') {
        return "valid";
      }
      onErrorOrWarningChange(true);
      return "warning";
    }
    

    return "valid";
  }
  useEffect(() => {
    const hasErrorOrWarning = data.some(row => row.some((column, columnIndex) => {
      const previousValue = previousRow ? previousRow[columnIndex] : null;
      const validationStatus = validateValue(column, previousValue);
      console.log(validationStatus);
      return validationStatus === 'error' || validationStatus === 'warning';
    }))

    localStorage.setItem('hasErrorOrWarning', hasErrorOrWarning);

    if (typeof onErrorOrWarningChange === 'function') {
      onErrorOrWarningChange(hasErrorOrWarning);
    }
  
  }, [data, previousRow, onErrorOrWarningChange]);


  return (
    <>
      <div className="excel-table">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="excel-table-row">
            {row.map((column, columnIndex) => {
              const previousValue = previousRow ? previousRow[columnIndex] : null;
              const validationStatus = validateValue(column, previousValue);
              const backgroundColor =
                validationStatus === "error"
                  ? "#FFE3E1"
                  : validationStatus === "warning"
                    ? "#FFFAE1"
                    : columnIndex === 0
                      ? "#F2F6F7"
                      : "#FFFFFF";

              return (
                <div className="input-box cell-box" key={columnIndex}>
                  <input
                    className="input-style"
                    value={column}
                    onChange={(event) => onCellChange(event.target.value, rowIndex, columnIndex)}
                    style={{
                      backgroundColor: backgroundColor,
                    }}
                  />
                  {validationStatus === "error" && <img className="errorImage" src="/image/errorImage.svg" alt="error" />}
                  {validationStatus === "warning" && <img className="errorImage" src="/image/errorImage.svg" alt="warning" />}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}


//Delete Row
function DeleteButtons({ data, deleteRow }) {
  return (
    <>
      {data.map((_, index) => (
        <div
          className={`delete-buttons ${index === data.length - 1 ? "last-button" : ""}`}
          key={index}
        >
          <img
            className="icsharp-delete"
            src="/image/icsharp-delete.svg"
            alt="delete-icon"
            onClick={() => deleteRow(index)}
          />
        </div>
      ))}
    </>
  );
}


export default function App() {

  const [excelData, setExcelData] = useState([]);
  const [columnNames, setColumnNames] = useState([]);
  const prevColumnNamesRef = useRef([]);
  const [hasErrorOrWarning, setHasErrorOrWarning] = useState(false);
  const navigate = useNavigate();

  const addRow = () => {
    setExcelData(prevExcelData => [...prevExcelData, []]);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", saveDataToLocal);

    // Component unmount 때에 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("beforeunload", saveDataToLocal);
    };
  }, [excelData, columnNames]);

  const saveDataToLocal = () => {
    const storedValue = localStorage.getItem('hasErrorOrWarning');
  
    if (storedValue === 'false') {
      // Conditionally execute if storedValue is 'false'
      localStorage.setItem("excelData", JSON.stringify(excelData));
      localStorage.setItem("columnNames", JSON.stringify(columnNames));
      navigate('/database_input_1');
    } else {
      // Display an alert if storedValue is not 'true'
      alert("Please fill in the invalid/empty fields");
    }
  };  

  useEffect(() => {
    // fetch data from local storage
    const storedExcelData = localStorage.getItem("excelData");
    if (storedExcelData) {
      setExcelData(JSON.parse(storedExcelData));
    }
  }, []);

  useEffect(() => {
    // Load columnNames from localStorage
    const storedColumnNames = localStorage.getItem("columnNames");
    if (storedColumnNames) {
      const parsedColumnNames = JSON.parse(storedColumnNames);
      setColumnNames(parsedColumnNames);
      prevColumnNamesRef.current = parsedColumnNames;
    }
  }, []);

  const deleteRow = (rowIndex) => {
    // make a copy of the current state, delete the item at rowIndex, and update state
    setExcelData(prevExcelData => {
      const newExcelData = [...prevExcelData];
      newExcelData.splice(rowIndex, 1);
      return newExcelData;
    });
  };

  const onCellChange = (newValue, rowIndex, columnIndex) => {
    // Update excelData
    setExcelData(prevExcelData => {
      const newExcelData = [...prevExcelData];
      newExcelData[rowIndex][columnIndex] = newValue;
      return newExcelData;
    });
  };

  const compRef = useRef();

  const logout = (event) => {
      compRef.current.logout();
      navigate("/")
  }

  return (


    <div className="page">
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
      />
      <div className="main-navigation">
        <div className="logo-box">
        <button className="witt-gen-portal bold-portal-logo" onClick={()=>navigate("/")}>
            <span className="bold-portal-logo">
            WittGen
            </span>
            <span className="light-portal-logo">
            Portal
            </span>
        </button>
        </div>
        <div className="navigation-box">
        <button className="navigation-box-1" onClick={()=>{ navigate('/dashboard') }}>
            <img
            className="dashboard-icon"
            src="/image/home-icon.svg"
            alt="home-icon"
            />
            <div className="light-font">Dashboard</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{ navigate('/my_files_1') }} style={{ marginLeft: '-3px' }}>
            <img
            className="myfiles-icon"
            src="/image/myfiles-icon2.svg"
            alt="myfiles-icon"
            />
            <div className="light-font">My files</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/CostUsage')  }}>
            <img
            className="cost-usage-icon"
            src="/image/cost-usage-icon.svg"
            alt="cost-usage-icon"
            />
            <div className="light-font">Cost &amp; Usage</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/my_profile')  }}>
            <img
            className="setting-icon"
            src="/image/settings-icon2.svg"
            alt="setting-icon"
            style={{ width: '15px', height: '15px'}}
            />
            <div className="light-font">Settings</div>
        </button>
        <button className="navigation-box-1" onClick={()=>{  navigate('/support')  }}>
            <img
            className="faq-support-ion"
            src="/image/faq-support-icon.svg"
            alt="faq-support-icon"
            />
            <div className="light-font">FAQ / Support</div>
        </button>
        </div>
        <button className="logout" onClick={()=>{   logout()    }}>
        <img
            className="logout-icon"
            src="/image/logout-icon.png"
            alt="logout-icon"
        />
        <div className="light-font">Logout</div>
        </button>
      </div>
        
      <div className="main-frame">
        <div className="frame-top">
          <div className="frame-top-1">
            <div className="frame-top-left">
              <div className="frame-top-box">
                <div className="getting-started-1">Getting started</div>
                <div className="rectangle-228-4"></div>
              </div>
              <div className="frame-top-box">
                <div className="metadatabase-input-1">Metadatabase Input</div>
                <div className="rectangle-228-5"></div>
              </div>
              <div className="frame-top-box">
                <div className="database-input-1">Database Input</div>
                <div className="rectangle-228-1"></div>
              </div>
              <div className="frame-top-box">
                <div className="submit-1">Submit</div>
                <div className="rectangle-228-1"></div>
              </div>
            </div>
            <div className="frame-top-right">
              <div>
                  <div className="discard-exit-1 "></div>
              </div>
              <button className="frame-top-right-bold" onClick={() => {navigate("/dashboard")}}>
                  <div className="save-exit-1 flex items-center justify-center">Exit</div>
              </button>
            </div>
          </div>
        </div>
        <div className="main-page">
          <div className="frame-main-top">
            <div className="frame-503">
              <div className="group-283">
                <div className="frame-504">
                  <div className="frame-454">
                    <a href="./metabase_input_4">
                      <div className="frame-215">
                        <div className="green-font">Import Excel file</div>
                      </div>
                    </a>
                    <div className="frame-214">
                      <div className="white-font">Manual data input</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="excel-five-frame">
            <div className="excel-input-box">
              <div className="excel-51-4">
                <div className="rowsetting">
                  <div className="deletebox">
                    <div>
                      <DeleteButtons data={excelData} deleteRow={deleteRow} />
                    </div>

                  </div>
                  <div className="combined-content">
                    <div className="setting-table">
                      {columnNames.map((columnName, index) => (
                        <div className="component-meta3" key={index}>
                          <div className="id-8 id-9 inter-semi-bold-slate-gray-10-5px2" key={index}>{columnName}</div>
                        </div>
                      ))}
                    </div>
                    <div className="excel-514-4">
                      <ExcelTable data={excelData} onCellChange={onCellChange} onErrorOrWarningChange={setHasErrorOrWarning} />
                    </div>
                  </div>
                </div>
                <div>
                  <AddRowButton addRow={addRow} />
                </div>
              </div>
            </div>
          </div>



        </div>

        <ParentComponent hasErrorOrWarning={hasErrorOrWarning} />

        <div className="frame-bottom">
          <button className="back-button" onClick={()=>{  navigate("/metabase_input_3")}}>
            <div className="back">Back</div>
          </button >
          <button className="next-button" onClick={() => {
            saveDataToLocal();
          }}>
            <div className="next">Next</div>
          </button>
        </div>
      </div>
    </div >
  );
}