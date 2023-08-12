
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useRef } from "react";
import "../styling/InProgress.css";


export default function () {
  let dataObject = [
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-23421",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "Upload File",
      databaseFile3: "",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "",
      databaseFile2: "Upload File",
      databaseFile3: "",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
      dob: "11/11/2000",
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
    applicationSubmitted: 'notStarted',
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
        return '/image/inprogress/upload_file_notyet.svg';
    }
  };

  const determineImageDatabase = (state) => {
    switch (state) {
      case 'completed':
        return '/image/inprogress/database_file_completed.svg';
      case 'inProgress':
        return '/image/inprogress/database_file_progress.svg';
      default:
        return '/image/inprogress/database_file_notyet.svg';
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
      applicationSubmitted: '2023-06-28 10:00',
      dataCuration: '2023-06-28 10:10',
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
                <div className="light-font font-gap2">Settings</div>

              </div>
            </a>
            <a href="/support">
              <div className="navigation-box-1">
                <img
                  className="faq-support-ion"
                  src="/image/faq-support-icon.svg"
                  alt="faq-support-icon"
                />
                <div className="light-font font-gap2">FAQ / Support</div>
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
              <div className="progress-box">
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


