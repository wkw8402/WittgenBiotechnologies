import "../styling/MetabaseInput3.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import "../styling/FileUpload.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import { useNavigate } from "react-router-dom";


function ExcelTable({ data }) {
  return (
    <div className="excel-table">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="excel-table-row">
          {row.map((column, columnIndex) => (
            <div key={columnIndex} className="excel-table-cell">
              {[column]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ColumnExcelComponent() {
  const [columnNames, setColumnNames] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const prevColumnNamesRef = useRef([]);

  const navigate = useNavigate();

  const compRef = useRef();

  const logout = (event) => {
      compRef.current.logout();
      navigate("/")
  }

  useEffect(() => {
    // Load columnNames from localStorage
    const storedColumnNames = localStorage.getItem("columnNames");
    if (storedColumnNames) {
      const parsedColumnNames = JSON.parse(storedColumnNames);
      setColumnNames(parsedColumnNames);
      prevColumnNamesRef.current = parsedColumnNames;
    }
  }, []);


  useEffect(() => {
    const storedExcelData = localStorage.getItem("excelData");
    if (storedExcelData) {
      setExcelData(JSON.parse(storedExcelData));
    }
  }, []);

  const handleColumnNameChange = (index, value) => {
    const updatedColumnNames = [...columnNames];
    updatedColumnNames[index] = value;
    setColumnNames(updatedColumnNames);
    localStorage.setItem("columnNames", JSON.stringify(updatedColumnNames));
  };


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
        <button className="witt-gen-portal bold-portal-logo" onClick={()=>navigate("/dashboard")}>
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
                    <div className="frame-214">
                      <div className="white-font">Import Excel file</div>
                    </div>
                    <div className="frame-215">
                      <div className="green-font">Manual data input</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-main-2">
                <div className="frame-26">
                  <div className="group-260">
                    <div className="checkmark-1">
                      <div className="check-mark">&#10003;</div>
                    </div>
                  </div>
                  <div className="check-mark-font">Upload file</div>
                </div>
                <img
                  className="line-9"
                  src="/image/dots.svg"
                  alt="dots"
                />
                <div className="frame-26">
                  <div className="group-260">
                    <div className="bold-circle">
                      <div className="number-font-white">2</div>
                    </div>
                  </div>
                  <div className="bold-font">Match columns</div>
                </div>
                <img
                  className="line-9"
                  src="/image/line-93.svg"
                  alt="line-93"
                />
                <div className="frame-26">
                  <div className="group-260">
                    <div className="overlap-group-3 overlap-group-4">
                      <div className="number-font-gray">3</div>
                    </div>
                  </div>
                  <div className="gray-font">Validate data</div>
                </div>
              </div>
            </div>
          </div>
          <div className="excel-frame">
            <div className="frame-526">
              <div className="frame-525">
                <div className="frame-267">
                  <p className="your-excel-sheet-col">
                    Your excel sheet column header will be shown as
                  </p>
                </div>
                <div className="frame-528">
                  <div className="frame-container">
                    <div className="frame-524">
                      <div className="frame-518">
                        {prevColumnNamesRef.current.map((columnName, index) => (
                          <div className="frame-2" key={index}>
                            <div className="sample inter-semi-bold-slate-gray-10-5px2" key={index}>
                              {columnName}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="frame-523">
                        {columnNames.map((columnName, index) => (
                          <article className="import-excel-dropdown" key={index}>
                            <div className="frame-271">
                              <div className="id inter-normal-tundora-14px">
                                <input
                                  type="text"
                                  value={columnName}
                                  className="no-border"
                                  onChange={(e) => handleColumnNameChange(index, e.target.value)}
                                />
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-517">
              <div className="frame">
                <div className="preview">Preview</div>
              </div>
              <div className="excel-51">
                <div className="combined-content">
                  <div className="excel-5">
                    {columnNames.map((columnName, index) => (
                      <div className="component-meta3" key={index}>
                        <div className="id-8 id-9 inter-semi-bold-slate-gray-10-5px2" key={index}>{columnName}</div>
                      </div>
                    ))}
                  </div>
                  <div className="excel-514">
                    <ExcelTable data={excelData} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
      <div className="frame-bottom">

      <button className="back-button" onClick={()=>{  navigate("/metabase_input_1")  }}>
        <div className="back">Back</div>
      </button>
      <button className="next-button" onClick={()=>{  navigate("/metabase_input_4")  }}>
        <div className="next">Next</div>
      </button>
      </div>

    </div>
  );
}

