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

  let dataObject = [
    {
      ID: "GH-12345",
      "Name (Optional)": "Cindy Park",
      "D.O.B": "12.25.1988",
      "Height (cm)": "171",
      "Weight (kg)": "69",
      "Primary region": "Breast",
      "Subtype": "TNBC",
      "Grade": "3",
    },
    {
      ID: "GH-12346",
      "Name (Optional)": "Jane Doe",
      "D.O.B": "11.20.1965",
      "Height (cm)": "170",
      "Weight (kg)": "72",
      "Primary region": "Breast",
      "Subtype": "ER+",
      "Grade": "1",
    },
    {
      ID: "GH-12347",
      "Name (Optional)": "Patient 3",
      "D.O.B": "04.06.1969",
      "Height (cm)": "163",
      "Weight (kg)": "63",
      "Primary region": "Breast",
      "Subtype": "ER+",
      "Grade": "2",
    },
    
  ];
  
  function Table() {
    return (
      <div className="table">
        <div className="header">
          {Object.keys(dataObject[0]).map((key, index,array) => (
              <div className={`header-cell ${index === array.length - 1 ? "last-header-cell" : ""}`} key={index}>
              {key}
            </div>
          ))}
        </div>
        {dataObject.map((row, index) => (
          <div className="row" key={index}>
          {Object.values(row).map((cell, cellIndex) => (
            <div className={`cell ${cellIndex === 0 ? "first-cell" : ""}`} key={cellIndex}>
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


  const [progress, setProgress] = useState({
    applicationSubmitted: 'completed',
    dataCuration: 'completed',
    dataPreProcessing: 'inProgress',
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

  useEffect(() => {
    setProgress({
      applicationSubmitted: '',
      dataCuration: '',
      dataPreProcessing: '',
      mlModel: '',
      fileComplete: '',
    });
    setProgressTime({
      applicationSubmitted: '',
      dataCuration: '',
      dataPreProcessing: '',
      mlModel: '',
      fileComplete: '',
    });
  }, []);


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
            Sameple Name
          </div>
          <div className="in-progress">
            <div className="fp-title">
              File Progress
            </div>
            <div className="progress-layout">
              <div className="progress-box">
                <div className="progress-frame" style={{ color: 
                  "#1431C9"
                  // determineColor(progress.applicationSubmitted) 
                  }}>
                  <p className="progress-font">Application submitted</p>
                  <img
                    className="icon-position"
                    src={determineImageUpload(progress.applicationSubmitted)}
                    alt="uplod-icon"
                  />
                  <p className="progress-time">{progressTime.applicationSubmitted}</p>
                </div>
              </div>
              <div className="progress-box">
                <div className="progress-frame" style={{ color: 
                  "#25474F"
                  // determineColor(progress.dataCuration) 
                  }}>
                  <p className="progress-font">Data Curation</p>
                  <img
                    className="icon-position"
                    src={determineImageDatabase(progress.dataCuration)}
                    alt="database_file-icon"
                  />
                  <p className="progress-time">{progressTime.dataCuration}</p>
                </div>
              </div>
              <div className="progress-box">
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
              <div className="progress-box">
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
              <div className="progress-box">
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
    
            <div className="progress-line"></div>
            <div className="inprogress-layout">
              <div className="summary-box-inprogress">
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


