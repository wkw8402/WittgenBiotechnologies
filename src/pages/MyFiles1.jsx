import "../styling/MyFiles1.css";

import React, { useState, useEffect, useContext, useRef } from "react";
import AWS, { SecretsManager } from "aws-sdk";
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

import JSZip from "jszip";
import saveAs from "save-as";

import  {configTableName, configTargetBucket, configParams, configSourceBucket}  from "../config";

configParams();

var dynamodb = new AWS.DynamoDB();
const s3 = new AWS.S3();
var UserNameUploaded = "";

function HandleUserName() {

  const username = JSON.parse(localStorage.getItem("username"));
  return username;
}

export default function () {

  const navigate = useNavigate();
  
  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const [submittedFilesState,setSubmittedFilesState] = useState(null);
  const [retrievedItems, setRetrievedItems] = useState([]);

  async function breakCallbackDownload() { 
  UserNameUploaded = await HandleUserName();
  

  var queryItemParams = {
    TableName: configTableName,
    IndexName: "upoadedBy-CreationDate-index",
    KeyConditionExpression: "upoadedBy = :username",
    ExpressionAttributeValues: {
      ":username": {S: UserNameUploaded },
    },
  };
  

    return dynamodb.query(queryItemParams).promise().then();
  }

  useEffect(() => {
    breakCallbackDownload().then((data) => setSubmittedFilesState(data))
    //setSubmittedFilesState(data)
    console.log("submittedFilesObject updated", submittedFilesState)
  }, []);

  useEffect(() => {
    breakCallbackDownload().then((data) => {
      // Extract fileName from each object in the Items array
      const fileNames = data.Items.map(item => item.fileName.S);

      const AWS = require('aws-sdk');
      const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

      // Use scan to search for items in DynamoDB
      const params = {
        TableName: 'wittgen-bio-metadata-table',
        FilterExpression: 'fileName = :fileName',
        ExpressionAttributeValues: {}
      };

      fileNames.forEach((fileName) => {
        params.ExpressionAttributeValues = { ':fileName': fileName };

        dynamodb.scan(params, (err, data) => {
          if (err) {
            console.error("Unable to scan. Error:", JSON.stringify(err, null, 2));
          } else {
            console.log("Scan succeeded:", data.Items);
            // Handle the retrieved data as needed
            // Append the found items to the state
            setRetrievedItems(prevItems => [...prevItems, ...data.Items]);
          }
        });
      });

      // Other state updates
      setSubmittedFilesState(data);
    });
  }, []);

  const checkProcessStatus = (fileName) => {
    // Find the item with the matching fileName
    const foundItem = retrievedItems.find(item => item.fileName === fileName);
  
    // Check if the item is found and its Process attribute
    if (foundItem && foundItem.Process === 4) {
      return "Completed";
    } else {
      return "In Process";
    }
  };

  const navigateBasedOnStatus = (fileName) => {
    // Store fileName in localStorage
    const applicationID = fileName.replace('.tar.gz', ''); // Remove the file extension
    localStorage.setItem('selectedApplicationID', applicationID);
  
    // Find the item with the matching fileName
    const foundItem = retrievedItems.find(item => item.fileName === fileName);
  
    // Determine the navigation route based on the Process status
    if (foundItem && foundItem.Process === 4) {
      navigate("/Complete");
    } else {
      navigate("/in_process");
    }
  };  

  async function breakCallbackDownload() {
    UserNameUploaded = await HandleUserName();

    console.log(UserNameUploaded);
    var queryItemParams = {
      TableName: configTableName,
      IndexName: "upoadedBy-CreationDate-index",
      KeyConditionExpression: "upoadedBy = :username",
      ExpressionAttributeValues: {
        ":username": { S: UserNameUploaded },
      },
    };

    return dynamodb.query(queryItemParams).promise().then();
  }

  const handleDownloadClick = async (s3URI, filename) => {
    try {
      const s3 = new AWS.S3({signatureVersion: 'v4'});
      const [bucket, key] = s3URI.replace('s3://', '').split('/');
      
      const params = {
        Bucket: bucket,
        Key: key,
        Expires: 60, // URL expires in 60 seconds
      };
      
      const url = await s3.getSignedUrlPromise('getObject', params);

      const link = document.createElement('a');
      link.href = url;
      link.download = filename || 'downloaded_file'; // Default filename if not provided
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  let submittedFilesObjectRender = submittedFilesState ? (submittedFilesState.Items.map((element) => {
    //console.log("render",submittedFilesState);
    // console.log("render",typeof(submittedFilesState.Items));
    console.log("render",element);
    return (
          <div className="frame-4-2 frame-4-3">
        <div className="frame-460-1 frame-460-4">
          <div className="gh-123325-15 inter-normal-tundora-14px">
            {element.fileName.S}
          </div>
        </div>
        <div className="frame-461">
          <div className="clinical-11 inter-normal-tundora-14px">
            {"Clinician"}
          </div>
        </div>
        <div className="frame-46">
          <div className="date-15 inter-normal-tundora-14px">
            {element.CreationDate.S}
          </div>
        </div>
        <div className="frame-46" onClick={()=>{navigateBasedOnStatus(element.fileName.S)}}>
          <button className="researchers-3 inter-semi-bold-slate-gray-14px">
            {checkProcessStatus(element.fileName.S)}
          </button>
        </div>
        <div className="frame-464">
          <div className="estTime inter-normal-tundora-14px">
            {element.downloadEligible.S === "true" ? (<button
              onClick={() => {
                handleDownloadClick(element.fileURI.S, element.fileName.S);
              }}
              className="researchers-3 inter-semi-bold-slate-gray-14px"
              style={{ padding: '15px' }}
            >
              Download
            </button>) : (<>-</>)}
          </div>
        </div>
      </div>
    );
  })) : (null)

  return (
    <>
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="my-files.css" />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="my-files"
      />
    <div class="container-center-horizontal">
      <div class="my-files-1440 screen">
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
        <div class="frame-491">
          <div class="frame-490">
            <div class="frame-488">
              <div class="submitted-files submitted-1 inter-semi-bold-blue-dianne-15px">Submitted files</div>
              <div class="group-286">
                <div class="frame-487">
                  <a href="">
                  <img class="frame-24" src="frame-244.svg" alt="Frame 244" />
                  </a>
                  <div class="frame-486">
                    <div class="group-23">
                      <div class="overlap-group"><div class="number-1 inter-semi-bold-slate-gray-10-5px">1</div></div>
                    </div>
                  </div>
                  <a href="">
                  <img class="frame-24" src="frame-243.svg" alt="Frame 243" />
                  </a>
                </div>
              </div>
            </div>
            <div class="frame-485-1">
              <div class="frame-479-1 inter-semi-bold-blue-dianne-10-5px">
                <div class="frame-460-3 frame-460-4">
                  <div class="file-id-1 inter-semi-bold-blue-dianne-10-5px">File ID</div>
                </div>
                <div class="frame-4">
                  <div class="service-1">Service</div>
                </div>
                <div class="frame-4">
                  <div class="submitted-date submitted-1">Submitted date</div>
                </div>
                <div class="frame-4-1 frame-4-3"><div class="status-1">Status</div></div>
                {/* <div class="frame-4-1 frame-4-3"><div class="reanalyze">Reanalyze</div></div> */}
                <div class="frame-4-1 frame-4-3"><div class="download">Download</div></div>
              </div>
              {submittedFilesState ? (
                  submittedFilesObjectRender
                ) : (
                  <p>
                    Loading...
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
