/* eslint-disable */

import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useRef } from "react";
import "../styling/InProgress.css";
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

  const [applicationId, setApplicationId] = useState('');

  const [progress, setProgress] = useState({
    applicationSubmitted: 'notStarted',
    dataCuration: 'notStarted',
    dataPreProcessing: 'notStarted',
    mlModel: 'notStarted',
    fileComplete: 'notStarted',
  });

  const [progressTime, setProgressTime] = useState({
    applicationSubmitted: '',
    dataCuration: '',
    dataPreProcessing: '',
    mlModel: '',
    fileComplete: '',
  });
  
  const dynamodb = new AWS.DynamoDB({ region: 'us-east-1' }); // Initialize AWS DynamoDB client with your region

  useEffect(() => {
      // Retrieve the filename from localStorage
      const appId = localStorage.getItem('selectedApplicationID');
      if (appId) {
          setApplicationId(appId);
      }
      
      // Function to retrieve item from DynamoDB based on fileName using Scan (not recommended for large tables)
      const fetchItemFromDynamoDB = async () => {
        try {
          const params = {
            TableName: 'wittgen-bio-metadata-table',
          };
    
          const response = await dynamodb.scan(params).promise();
          const items = response.Items;
    
          if (items && items.length > 0) {
            // Filter the items based on fileName
            const matchingItem = items.find((item) => item.fileName.S === appId + '.tar.gz');
    
            if (matchingItem) {
              const processValue = Number(matchingItem.Process.N);

              console.log(processValue);
    
              // Calculate progress state based on Process attribute
              const newProgress = {
                applicationSubmitted: processValue >= 0 ? 'completed' : 'inProgress',
                dataCuration: processValue >= 1 ? 'completed' : processValue === 0 ? 'inProgress' : 'notStarted',
                dataPreProcessing: processValue >= 2 ? 'completed' : processValue === 1 ? 'inProgress' : 'notStarted',
                mlModel: processValue >= 3 ? 'completed' : processValue === 2 ? 'inProgress' : 'notStarted',
                fileComplete: processValue >= 4 ? 'completed' : processValue === 3 ? 'inProgress' : 'notStarted',
              };
    
              setProgress(newProgress);
              
              // Initialize progressTime with current values
              const newProgressTime = { ...progressTime };

              // Conditionally update progressTime based on processValue
              if (processValue >= 0) {
                newProgressTime.applicationSubmitted = matchingItem.CreationDate ? matchingItem.CreationDate.S : '';
              }
              if (processValue >= 1) {
                newProgressTime.dataCuration = matchingItem.curation_time ? matchingItem.curation_time.S : '';
              }
              if (processValue >= 2) {
                newProgressTime.dataPreProcessing = matchingItem.preprocess_time ? matchingItem.preprocess_time.S : '';
              }
              if (processValue >= 3) {
                newProgressTime.mlModel = matchingItem.model_time ? matchingItem.model_time.S : '';
              }
              if (processValue >= 4) {
                newProgressTime.fileComplete = matchingItem.complete_time ? matchingItem.complete_time.S : '';
              }

              setProgressTime(newProgressTime);
            }
          }
        } catch (error) {
          console.error('Error fetching item from DynamoDB:', error);
        }
      };
    
      fetchItemFromDynamoDB();
    }, []
  );

  const s3 = new AWS.S3({ region: 'us-east-1' });

  function Table() {
    const [tableData, setTableData] = useState([]);
  
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
  
  const prevColumnNamesRef = useRef([]);

  const numberRow = 3;
  const costRow = 100;
  const paid = 10;

  const determineColor = (state) => {
    switch (state) {
      case 'completed':
        return '#1431C9';
      case 'inProgress':
        return '#25474F';
      default:
        return '#C0C0C0';
    }
  };

  const determineImageUpload = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/upload_file_completed.svg';
      case 'inProgress':
        return '/image/inprogress/upload_file_progress.svg';
      default:
        // return '/image/inprogress/upload_file_notyet.svg';
        // temp
        return '/image/inprogress/upload_file_completed.svg';
    }
  };

  const determineImageDatabase = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/database_file_completed.svg';
      case 'inProgress':
        return '/image/inprogress/database_file_progress.svg';
      default:
        // return '/image/inprogress/database_file_notyet.svg';
        // temp
        return '/image/inprogress/database_file_progress.svg';
    }
  };

  const determineImageDataset = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/dataset_file_completed.svg';
      case 'inProgress':
        return '/image/inprogress/dataset_file_progress.svg';
      default:
        return '/image/inprogress/dataset_file_notyet.svg';
    }
  };

  const determineImageFile = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/file_complete_completed.svg';
      case 'inProgress':
        return '/image/inprogress/file_complete_progress.svg';
      default:
        return '/image/inprogress/file_complete_notyet.svg';
    }
  };

  const determineImageRebase = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/rebase_file_completed.svg';
      case 'inProgress':
        return '/image/inprogress/rebase_file_progress.svg';
      default:
        return '/image/inprogress/rebase_file_notyet.svg';
    }
  };

  function MyComponent() {
    unlockScroll();
  
    function unlockScroll() {
      document.body.style.overflow = '';
    }
  
    useEffect(() => {
    }, []);
  }
  

  return (
    <>
      <Account ref={compRef} />
      <MyComponent/>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>


      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
      />
      <div className="page-inprogress">
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
              <button className="navigation-box-1" onClick={()=>{ navigate('/my_files_1') }}>
                <img
                  className="myfiles-icon"
                  src="/image/myfiles-icon.svg"
                  alt="myfiles-icon"
                />
                <div className="my-files-font">My files</div>
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
            <button className="logout" onClick={()=>{   logout()    }} style={{  bottom: '57px', left: '2px'   }}>
              <img
                className="logout-icon"
                src="/image/logout-icon.png"
                alt="logout-icon"
              />
              <div className="light-font">Logout</div>
            </button>
          </div>
        <div className="main-frame-inprogress">
          <div className="frame-top-inprogress">
            {applicationId}
          </div>
          <div className="in-progress">
            <div className="fp-title">
              File Progress
            </div>
            <div className="progress-layout">
              <div className="progress-box" style={{ left: '260px' }}>
                <div className="progress-frame" style={{ color: determineColor(progress.applicationSubmitted) }}>
                  <p className="progress-font">Application submitted</p>
                  <img
                    className="icon-position"
                    src={determineImageUpload(progress.applicationSubmitted)}
                    alt="uplod-icon"
                  />
                  <p className="progress-time">{progressTime.applicationSubmitted}</p>
                </div>
              </div>
              <div className="progress-box" style={{ left: '440px' }}>
                <div className="progress-frame" style={{ color: determineColor(progress.dataCuration) }}>
                  <p className="progress-font">Data Curation</p>
                  <img
                    className="icon-position"
                    src={determineImageDatabase(progress.dataCuration)}
                    alt="database_file-icon"
                  />
                  <p className="progress-time">{progressTime.dataCuration}</p>
                </div>
              </div>
              <div className="progress-box" style={{ left: '620px' }}>
                <div className="progress-frame" style={{ color: determineColor(progress.dataPreProcessing) }}>
                  <p className="progress-font">Data pre-processing</p>
                  <img
                    className="icon-position"
                    src={determineImageDataset(progress.dataPreProcessing)}
                    alt="dataset_processing-icon"
                  />
                  <p className="progress-time">{progressTime.dataPreProcessing}</p>
                </div>
              </div>
              <div className="progress-box" style={{ left: '800px' }}>
                <div className="progress-frame" style={{ color: determineColor(progress.mlModel) }}>
                  <p className="progress-font">ML Model</p>
                  <img
                    className="icon-position"
                    src={determineImageRebase(progress.mlModel)}
                    alt="rebase-file-icon"
                  />
                  <p className="progress-time">{progressTime.mlModel}</p>
                </div>
              </div>
              <div className="progress-box" style={{ left: '980px' }}>
                <div className="progress-frame" style={{ color: determineColor(progress.fileComplete) }}>
                  <p className="progress-font">File complete</p>
                  <img
                    className="icon-position"
                    src={determineImageFile(progress.fileComplete)}
                    alt="file complete-icon"
                  />
                  <p className="progress-time">{progressTime.fileComplete}</p>
                </div>
              </div>
            </div>

            <div className="progress-line"></div>
            <div className="progress-framebox">
              <div className="ap-title">
                Application info
              </div>
              <div className="framebox">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }


