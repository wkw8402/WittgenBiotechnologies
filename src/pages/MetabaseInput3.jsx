import "../styling/MetabaseInput3.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import "../styling/FileUpload.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';


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
          <a href="/">
            <div className="witt-gen-portal bold-portal-logo">
              <span className="bold-portal-logo">
                WittGen
              </span>
              <span className="light-portal-logo">
                Portal
              </span>
            </div>
          </a>
        </div>
        <div className="navigation-box">
          <a href="/dashboard">
            <div className="navigation-box-1">
              <img
                className="dashboard-icon"
                src="/image/home-icon.svg"
                alt="home-icon"
              />
              <div className="light-font font-gap">Dashboard</div>
            </div>
          </a>
          <a href="/my_files_1">
            <div className="navigation-box-1">

              <img
                className="myfiles-icon"
                src="/image/myfiles-icon.svg"
                alt="myfiles-icon"
              />
              <div className="my-files-font">My files</div>
            </div>
          </a>
          <a href="/CostUsage">
            <div className="navigation-box-1">

              <img
                className="cost-usage-icon"
                src="/image/cost-usage-icon.svg"
                alt="cost-usage-icon"
              />
              <div className="light-font font-gap2">Cost &amp; Usage</div>

            </div>
          </a>
          <a href="/my_profile">
            <div className="navigation-box-1">
              <img
                className="setting-icon"
                src="/image/settings-icon.svg"
                alt="setting-icon"
              />
              <div className="light-font">Settings</div>

            </div>
          </a>
          <a href="/support">
            <div className="navigation-box-1">
              <img
                className="faq-support-ion"
                src="/image/faq-support-icon.svg"
                alt="faq-support-icon"
              />
              <div className="light-font">FAQ / Support</div>
            </div>
          </a>
        </div>
        <div className="logout">
          <img
            className="logout-icon"
            src="/image/logout-icon.png"
            alt="logout-icon"
          />
          <div className="light-font">Logout</div>
        </div>
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
              <div className="frame-top-right-light">
                <div className="discard-exit-1 ">Discard &amp; Exit</div>
              </div>
              <div className="frame-top-right-bold">
                <div className="save-exit-1">Save &amp; Exit</div>
              </div>
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

        <a href="/metabase_input_1">
          <div className="back-button">
            <div className="back">back</div>
          </div>
        </a>
        <a href="/metabase_input_4">
          <div className="next-button">
            <div className="next">Next</div>
          </div>
        </a>
      </div>

    </div>
  );
}

