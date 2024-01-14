
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useRef } from "react";
import "../styling/InProgress.css";
import "../styling/Complete.css";
import AWS, { SecretsManager } from "aws-sdk";
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";


export default function () {
  const navigate = useNavigate();
  
  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const s3 = new AWS.S3({ region: 'us-east-1' });

  const [sampleData, setSampleData] = useState([]);
  const [selectedSample, setSelectedSample] = useState(null);
  const applicationId = localStorage.getItem('selectedApplicationID');

  useEffect(() => {
    const fetchAndParseTSV = async () => {
      try {
        const params = {
          Bucket: 'wittgen-bio-metadata-bucket',
          Key: `${applicationId}.tsv`, // Replace with the actual filename
        };

        console.log(params.Key);
        
        const response = await s3.getObject(params).promise();
        const tsvContent = response.Body.toString('utf-8');

        // Split the TSV content into rows and parse it
        const rows = tsvContent.split('\n');
        const headers = rows[0].split('\t');
        const data = rows.slice(1).map((row) => {
          const values = row.split('\t');
          return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
        });
        
        setSampleData(data);

        if (data.length > 0) {
          setSelectedSample(data[0].ID); // Set the first sample as selected by default
        }
      } catch (error) {
        console.error('Error fetching or parsing the TSV file:', error);
      }
    };

    fetchAndParseTSV();
  }, []);

  const handleSampleClick = (sample) => {
    setSelectedSample(sample);
  };

  function SampleTable({ sampleData, selectedSample, onSampleClick }) {
    console.log("Selected Sample Data: ", selectedSample);
    return (
      <>
        {sampleData.map((row, index) => {
          const isSelected = selectedSample === row.ID;
          const sampleClass = isSelected ? "sample-button-selected" : "sample-button";
          return (
            <div
              key={index}
              className={sampleClass}
              onClick={() => onSampleClick(row.ID)}
            >
              {row.ID}
            </div>
          )
        })}
        {selectedSample && (
          <>
            <div className="side-navigation-title">{applicationId}</div>
            <div className="top-title">{selectedSample}</div>
            <div className="summary-frame">
              <div className="summary-title-font">Summary</div>
              <div className="sumary-frame-box">
                <div className="summary-box-1">
                  <div className="box-title-font">
                    Primary region
                  </div>
                  <div className="box-summary-font">
                    Breast
                  </div>
                </div>
                <div className="summary-box-2">
                  <div className="box-title-font">
                    Metastasis
                  </div>
                  <div className="box-summary-font">
                    None
                  </div>
                </div>

                <div className="summary-box-3">
                  <div className="box-title-font">
                    Metastasis
                  </div>
                  <div className="box-summary-font">
                    None
                  </div>
                </div>
                <div className="summary-box-4">
                  <div className="box-title-font">
                    Subtype
                  </div>
                  <div className="box-summary-font">
                    70% ER+ <br />
                    30% TNBC
                  </div>
                </div>
                <div className="summary-box-5">
                  <div className="box-title-font">
                    Grade
                  </div>
                  <div className="box-summary-font">
                    70% Grade 2 <br />
                    30% Grade 3
                  </div>
                </div>
                <div className="summary-box-6">
                  <div className="box-title-font">
                    Grade
                  </div>
                  <div className="box-summary-font">
                    70% Grade 2 <br />
                    30% Grade 3
                  </div>
                </div>
              </div>
              <div className="summary-frame-img"></div>
            </div>
          </>
        )}
      </>
    );
  }

  function Table() {
    const [tableData, setTableData] = useState([]);

    const applicationId = localStorage.getItem('selectedApplicationID');
  
    useEffect(() => {
      // Function to retrieve and parse the TSV file
      const fetchAndParseTSV = async () => {
        try {
          const params = {
            Bucket: 'wittgen-bio-metadata-bucket',
            Key: `${applicationId}.tsv`, // Replace with the actual filename
          };
  
          const response = await s3.getObject(params).promise();
          const tsvContent = response.Body.toString('utf-8');
  
          // Split the TSV content into rows and parse it
          const rows = tsvContent.split('\n');
          const headers = rows[0].split('\t');
          const data = rows.slice(1).map((row) => {
            const values = row.split('\t');
            return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
          });
  
          setTableData(data);
        } catch (error) {
          console.error('Error fetching or parsing the TSV file:', error);
        }
      };

      fetchAndParseTSV();
    }, []);
  
    return (
      <div className="table">
        <div className="header">
          {Object.keys(tableData[0] || {}).map((key, index, array) => (
            <div className={`header-cell ${index === array.length - 1 ? 'last-header-cell' : ''}`} key={index}>
              {key}
            </div>
          ))}
        </div>
        {tableData.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <div className={`cell ${cellIndex === 0 ? 'first-cell' : ''}`} key={cellIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }  

  const numberRow = 3;
  const costRow = 100;

  return (
    <>
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
      />
      <div className="page-complete">
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
              <button className="navigation-box-1" onClick={()=>{ navigate('/dashboard') }} style={{ left: '-12px' }}>
                <img
                  className="dashboard-icon"
                  src="/image/home-icon2.svg"
                  alt="home-icon"
                  style={{ width: '35px', height: '35px'}}
                />
                <div className="my-files-font" style={{ marginLeft: '-8px' }}>Dashboard</div>
              </button>
              <button className="navigation-box-1" onClick={()=>{ navigate('/my_files_1') }} style={{ left: '-3px' }}>
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
                  src="/image/settings-icon.svg"
                  alt="setting-icon"
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
        <div className="side-navigation">
          <div className="side-navigation-download"><p className="downloadbutton-font">Download all files</p></div>
          <div className="side-navigation-search">
            <img
              className="search-icon"
              src="/image/search-icon.svg"
              alt="search-icon"
            />
            <p className="search-button-font">Search samples</p>
          </div>
          <div className="side-navigation-list">
          <SampleTable
            sampleData={sampleData}
            selectedSample={selectedSample}
            onSampleClick={handleSampleClick}
          />
          </div>
        </div>
        <div className="main-frame-completed">
          <div className="frame-top-2">
            <div className="completed-download">
              <img
                className="download-icon"
                src="/image/download-icon.svg"
                alt="download-icon"
              />
              Download</div>
            <div className="completed-print">
              <img
                className="print-icon"
                src="/image/print-icon.svg"
                alt="print-icon"
              />
              Print</div>

          </div>
          <div className="In-progress-completed">
            <div className="completed-box"></div>
            <div className="progress-line-completed"></div>
            <div className="progress-line"></div>
            <div className="progress-framebox">
              <div className="ap-title">
                Application info
              </div>
              <div className="framebox">
                <Table />
              </div>
            </div>

            <div className="completed-layout3">
              <div className="summary-box">
                <div className="order-summary">
                  <div className="order-top" >
                    <div className="ap-title">Order Summary</div>
                    <div className="order-top1">Currency:USD</div>
                  </div>
                  <div className="order-line"></div>
                  <div className="order-bottom">
                    <div className="summary-font">Sameples</div>
                    <div className="summary-font1">{numberRow} x {costRow}</div>
                    <div className="summary-font right-position">${numberRow * costRow}</div>
                  </div>
                </div>
                <div className="amount-box">
                  <div className="amount-top">
                    <div className="summary-font1 amount-top1" >Subtotal:
                      <div className="summary-font" style={{ textAlign: 'right' }}>${numberRow * costRow}</div>
                    </div>
                    <div className="summary-font1 amount-top1">Taxes(10%)
                      <div className="summary-font" style={{ textAlign: 'right' }}>${numberRow * costRow / 10}</div>
                    </div>

                  </div>
                  <div className="order-line"></div>
                  <div className="amount-bottom">
                    <div className="total-amount">
                      <div className="total-amount2">total amount</div>
                      <div className="total-amount3">${(numberRow * costRow) + (numberRow * costRow / 10)}</div>
                    </div>
                    <div className="freemium">
                      <div className="freemium2">Freemium</div>
                      <div className="freemium3">$0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

