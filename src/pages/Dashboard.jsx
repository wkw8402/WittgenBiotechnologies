/* eslint-disable */

import "../styling/Dashboard.css";

import React, { useState, useEffect, useContext, useRef } from "react";
import AWS, { SecretsManager } from "aws-sdk";
import { useNavigate } from 'react-router-dom';

import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

import JSZip from "jszip";
import saveAs from "save-as";

import { configTableName, configTargetBucket, configParams, configSourceBucket } from "../config";

configParams();

var dynamodb = new AWS.DynamoDB();
const s3 = new AWS.S3();
var UserNameUploaded = "";

let ItemsDataArr = {};
var zipFilename = "wittgen.zip";

function HandleUserName() {
  const username = JSON.parse(localStorage.getItem("username"));
  return username;
}

const getUserAttributes = async () => {
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();
  const token = localStorage.getItem("persist-crs-token");

  if (!token) {
    throw new Error('No access token found');
  }

  const accessToken = JSON.parse(token); // Parse the token if it's stored as a JSON string

  const currentUser = await cognitoISP.getUser({ AccessToken: accessToken }).promise();
  const userAttributes = currentUser.UserAttributes.reduce((attributes, attribute) => {
    attributes[attribute.Name] = attribute.Value;
    return attributes;
  }, {});
  return userAttributes;
};

// ... rest of your component code ...


export default function () {
  // TODO: get user name in first call or wait until we get correct username or dont use usestate in username
  const [submittedFilesState, setSubmittedFilesState] = useState(null);
  const [user, setUser] = useState(null);
  const [userAttributes, setUserAttributes] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // new state to track loading

  useEffect(() => {
    fetchUserAttributes();
  }, []); // empty dependency array

  const fetchUserAttributes = async () => {
    setIsLoading(true); // set loading to true
    try {
      const attributes = await getUserAttributes();
      setUserAttributes(attributes);
    } catch (error) {
      console.log('Error fetching user attributes:', error);
      // Handle the error state here (e.g., show an error message)
    }
    setIsLoading(false); // set loading to false after fetching
  };

  const navigate = useNavigate();

  const [status, setStatus] = useState("In Process"); // initial state can be "In Process" or "Completed"

  // Function to handle navigation based on the status
  const navigateBasedOnStatus = (fileName) => {
    // Store fileName in localStorage
    const applicationID = fileName.replace('.tar.gz', ''); // Remove the file extension
    localStorage.setItem('selectedApplicationID', applicationID);

    if (status === "Completed") {
        navigate("/Complete");
    } else if (status === "In Process") {
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

  useEffect(() => {
    breakCallbackDownload().then((data) => setSubmittedFilesState(data))
    setUser(HandleUserName());
    // setSubmittedFilesState(data)
    // console.log("submittedFilesObject updated", submittedFilesState)
  }, []);


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

  let submittedFilesObjectRender = (user && submittedFilesState) ? (submittedFilesState.Items.map((element) => {
    // console.log("render",submittedFilesState);
    // console.log("render",typeof(submittedFilesState.Items));
    // console.log("render",element);

    return (
      <div className="frame-4">
        <div className="frame-460">
          <div className="fileId inter-normal-tundora-14px" onClick={()=>{  navigate('/in_process')  }}>
           
            {element.fileName.S}
          </div>
        </div>
        <div className="frame-461">
          <div className="service inter-normal-tundora-14px">
            {"Clinician"}
          </div>
        </div>
        <div className="frame-46">
          <div className="date inter-normal-tundora-14px">
            {element.CreationDate.S}
          </div>
        </div>
        {/* if there's an issue, must have different div. */}
        <div className="frame-46">
          <button className="researchers-3 inter-semi-bold-slate-gray-14px" onClick={()=>{navigateBasedOnStatus(element.fileName.S)}}>
            {status}
          </button>
        </div>
        <div className="frame-464">
          <div className="estTime inter-normal-tundora-14px">
            {element.downloadEligible.S === "true" ? (<button
              onClick={() => {
                handleDownloadClick(element.fileURI.S, element.fileName.S);
              }}
              className="researchers-3 inter-semi-bold-slate-gray-14px"
            >
              Download
            </button>) : (<>-</>)}
          </div>
        </div>
      </div>
    );
  })) : (
    <div className="frame-4">
      <div className="frame-460">
        <div className="fileId inter-normal-tundora-14px">
          You did not submitted any files yet.
        </div>
      </div>
    </div>
  )

  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const getUser = () => {
    return compRef.current.getUser();
  }

  return (
    <>
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1440px, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="dashboard-1-1440.css" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="dashboard-1-1440"
      />
      <div class="container-center-horizontal">
        <div class="dashboard-1-1440 screen">
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

          <div class="frame-610">
            <div class="frame-615"><h1 class="place">
              Welcome, {
                isLoading 
                ? 'Loading...' // Show loading or placeholder text
                : (userAttributes ? userAttributes['custom:firstname'] : 'User') // Fallback to 'User' if userAttributes is null
              }!
            </h1></div>
            <div class="frame-449">
              <p class="get-started-with-our-services blue-15px">Get started with our services</p>
              <div class="frame-448">
                <button class="dashbaord_main-buttons-researcher" onClick={() => { navigate('/getting_started_1') }}>
                  <div class="frame-447">
                    <img
                      class="assignment_fill0"
                      src="assignment-fill0-wght400-grad0-opsz48-1-white.svg"
                      alt="assignment_FILL0_wght400_GRAD0_opsz48 1"
                    />
                    <div className="researchers inter-semi-bold-white-12px">Upload</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="frame-473">
            <div class="frame-472">
              <div class="submitted-files submitted-1 blue-15px">Submitted files</div>
              <button class="view-all-box" onClick={()=>{ navigate("/my_files_1")}}>View all</button>
            </div>
            <div class="frame-47">
              <div class="frame-4">
                <div class="frame-455"><div class="id inter-semi-bold-blue-dianne-10-5px">ID</div></div>
                <div class="frame-456"><div class="service inter-semi-bold-blue-dianne-10-5px">Service</div></div>
                <div class="frame-45">
                  <div class="submitted-date submitted-1 inter-semi-bold-blue-dianne-10-5px">Submitted Date</div>
                </div>
                <div class="frame-45"><div class="status inter-semi-bold-blue-dianne-10-5px">Status</div></div>
                <div class="frame-459">
                  <div class="download-est-time inter-semi-bold-blue-dianne-10-5px">Download/ Est time</div>
                </div>
              </div>
              {submittedFilesState ? (
                submittedFilesObjectRender
              ) : (
                <p>
                </p>
              )}
            </div>
          </div>
          <div class="frame-478">
            <div class="frame-47">
              <div class="frame-305">
                <div class="our-updates blue-15px">Our updates</div>
                <button class="view-all-box">
                  View all
                </button>
              </div>
              <div class="frame-4-1">
                <div class="component">
                  <div class="frame-287">
                    <p class="lorem-ipsum-dolor-si inter-semi-bold-tundora-12px">
                    We have published our new demo! We will implement our further funtions here. You can now upload and download your files, and see the files you submitted.
                    
                    </p>
                    <div class="date inter-semi-bold-slate-gray-8-2px">10/04/2023</div>
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