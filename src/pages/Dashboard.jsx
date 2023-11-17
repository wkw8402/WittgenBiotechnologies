/* eslint-disable */

// TODO: change fileName to relFileName?
// TODO: change configTargetBucket

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

  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //   const username = JSON.parse(localStorage.getItem("username"));
  //   console.log("Yes", username);
  //   if (username) setUsername(username);
  // }, [username]);
  const username = JSON.parse(localStorage.getItem("username"));
  return username;
}

const getUserAttributes = async () => {
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();
  const currentUser = await cognitoISP.getUser({ AccessToken: NewJWTTOKEN }).promise();
  const userAttributes = currentUser.UserAttributes.reduce((attributes, attribute) => {
    attributes[attribute.Name] = attribute.Value;
    return attributes;
  }, {});
  return userAttributes;
};

export default function () {
  // TODO: get user name in first call or wait until we get correct username or dont use usestate in username
  const [submittedFilesState, setSubmittedFilesState] = useState(null);
  const [user, setUser] = useState(null);
  const [userAttributes, setUserAttributes] = useState(null);

  useEffect(() => {
    fetchUserAttributes();
  }, [userAttributes]);

  const fetchUserAttributes = async () => {
    try {
      const attributes = await getUserAttributes();
      setUserAttributes(attributes);
    } catch (error) {
      console.log('Error fetching user attributes:', error);
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
          <div className="payment inter-normal-tundora-14px">
            {"Completed"}
          </div>
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

  const navigate = useNavigate();

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
            <div class="frame-615"><h1 class="place">Welcome, {userAttributes? userAttributes['custom:firstname']: user}!</h1></div>
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
                {/* <div class="dashbaord_main-buttons-researcher">
                  <div class="frame-447">
                    <img
                      class="assignment_fill0"
                      src="/image/clinicians-icon.svg"
                      alt="clinicians-icon"
                    />
                    <button className="researchers inter-semi-bold-white-12px" onClick={() => { navigate('/getting_started_1') }}>Clinicians</button>

                  </div>
                </div> */}
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
              {/* <div class="frame-4-1">
              <div class="frame-4">
                <div class="frame-460"><div class="gh inter-normal-tundora-10-5px">GH-1234567</div></div>
                <div class="frame-461"><div class="clinical inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-1 date-11 inter-normal-tundora-10-5px">11/13/2022</div></div>
                <div class="frame-46">
                  <div class="frame-276"><div class="complete">Complete</div></div>
                </div>
                <div class="frame-464">
                  <div class="x2-files">
                    <div class="address-1 address-4 inter-normal-persian-blue-10-5px">2 files</div>
                  </div>
                </div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh inter-normal-tundora-10-5px">GH-123445</div></div>
                <div class="frame-461"><div class="resaerch inter-normal-tundora-10-5px">Resaerch</div></div>
                <div class="frame-46"><div class="date-2 date-11 inter-normal-tundora-10-5px">11/14/2022</div></div>
                <div class="frame-46"><div class="submitted inter-normal-tundora-10-5px">Submitted</div></div>
                <div class="frame-464"><div class="text inter-normal-tundora-10-5px">-</div></div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh inter-normal-tundora-10-5px">GH-123447</div></div>
                <div class="frame-461"><div class="clinical-6 inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-3 date-11 inter-normal-tundora-10-5px">11/12/2022</div></div>
                <div class="frame-46">
                  <div class="frame-280"><div class="address inter-normal-red-10-5px">2 Issue(s)</div></div>
                </div>
                <div class="frame-464"><div class="address-2 address-4 inter-normal-tundora-10-5px">2 days</div></div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123447-1 inter-normal-tundora-10-5px">GH-123447</div></div>
                <div class="frame-461"><div class="place-3 inter-normal-tundora-10-5px">Research</div></div>
                <div class="frame-46"><div class="date-4 date-11 inter-normal-tundora-10-5px">11/13/2022</div></div>
                <div class="frame-46"><div class="pre-processing inter-normal-tundora-10-5px">Pre-processing</div></div>
                <div class="frame-464"><div class="address-3 address-4 inter-normal-tundora-10-5px">2 days</div></div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123445-1 inter-normal-tundora-10-5px">GH-123445</div></div>
                <div class="frame-461"><div class="clinical-6 inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-5 date-11 inter-normal-tundora-10-5px">11/06/2022</div></div>
                <div class="frame-46">
                  <div class="frame-280"><div class="address inter-normal-red-10-5px">2 Issue(s)</div></div>
                </div>
                <div class="frame-464"><div class="text inter-normal-tundora-10-5px">-</div></div>
              </div>
            </div>  */}
            </div>
          </div>
           {/* <div class="frame-474">
          <div class="frame-472-1">
            <div class="unsubmitted-files blue-15px">Unsubmitted files</div>
            <div class="view-all-box">View all</div>
          </div>
          <div class="frame-47">
            <div class="frame-4 inter-semi-bold-blue-dianne-10-5px">
              <div class="frame-455"><div class="file-id inter-semi-bold-blue-dianne-10-5px">File ID</div></div>
              <div class="frame-45-1">
                <div class="service-1">Service</div>
                <img
                  class="material-symbolsnavigate-next"
                  src="material-symbols-navigate-next-4.svg"
                  alt="material-symbols:navigate-next"
                />
              </div>
              <div class="frame-45-1">
                <div class="last-edited">Last edited</div>
                <img
                  class="material-symbolsnavigate-next"
                  src="material-symbols-navigate-next-5.svg"
                  alt="material-symbols:navigate-next"
                />
              </div>
              <div class="frame-45"><div class="status-1">Status</div></div>
              <div class="frame-459"><div class="delete">Delete</div></div>
            </div>
            <div class="frame-4-1">
              <div class="frame-4">
                <div class="frame-460"><div class="gh inter-normal-tundora-10-5px">GH-123325</div></div>
                <div class="frame-461"><div class="clinical-6 inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-6 date-11 inter-normal-tundora-10-5px">11/13/2022</div></div>
                <div class="frame-46"><div class="unpaid inter-normal-tundora-10-5px">Unpaid</div></div>
                <div class="frame-464">
                  <img class="icsharp-delete" src="ic-sharp-delete-5.svg" alt="ic:sharp-delete" />
                </div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123325-8 inter-normal-tundora-10-5px">GH-123325</div></div>
                <div class="frame-461"><div class="resaerch-1 inter-normal-tundora-10-5px">Resaerch</div></div>
                <div class="frame-46"><div class="date-7 date-11 inter-normal-tundora-10-5px">11/14/2022</div></div>
                <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                <div class="frame-464">
                  <img class="icsharp-delete-5" src="ic-sharp-delete-5.svg" alt="ic:sharp-delete" />
                </div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123325-8 inter-normal-tundora-10-5px">GH-123325</div></div>
                <div class="frame-461"><div class="clinical-6 inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-8 date-11 inter-normal-tundora-10-5px">11/12/2022</div></div>
                <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                <div class="frame-464">
                  <img class="icsharp-delete-5" src="ic-sharp-delete-5.svg" alt="ic:sharp-delete" />
                </div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123325-8 inter-normal-tundora-10-5px">GH-123325</div></div>
                <div class="frame-461"><div class="place-3 inter-normal-tundora-10-5px">Research</div></div>
                <div class="frame-46"><div class="date-9 date-11 inter-normal-tundora-10-5px">11/13/2022</div></div>
                <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                <div class="frame-464">
                  <img class="icsharp-delete-5" src="ic-sharp-delete-5.svg" alt="ic:sharp-delete" />
                </div>
              </div>
              <div class="frame-4">
                <div class="frame-460"><div class="gh-123325-8 inter-normal-tundora-10-5px">GH-123325</div></div>
                <div class="frame-461"><div class="clinical-6 inter-normal-tundora-10-5px">Clinical</div></div>
                <div class="frame-46"><div class="date-10 date-11 inter-normal-tundora-10-5px">11/06/2022</div></div>
                <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                <div class="frame-464">
                  <img class="icsharp-delete-5" src="ic-sharp-delete-5.svg" alt="ic:sharp-delete" />
                </div>
              </div>
            </div>
          </div>
        </div>  */}
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
                 {/* <div class="component">
                <div class="frame-287">
                  <p class="ut-enim-ad-minim-ven inter-semi-bold-tundora-12px">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  </p>
                  <div class="date inter-semi-bold-slate-gray-8-2px">15/11/2022</div>
                </div>
              </div>
              <div class="component">
                <div class="frame-287">
                  <p class="duis-aute-irure-dolo inter-semi-bold-tundora-12px">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                  </p>
                  <div class="date inter-semi-bold-slate-gray-8-2px">15/11/2022</div>
                </div>
              </div> */}
              </div>
            </div>
             {/* <div class="frame-47">
            <div class="frame-305">
              <div class="cost-usage blue-15px">Cost &amp; Usage</div>
              <div class="view-all-box">View all</div>
            </div>
            <div class="frame-4-1">
              <div class="component">
                <div class="frame-287">
                  <div class="frame-468">
                    <div class="price inter-semi-bold-tundora-12px">$1200</div>
                    <div class="pending">Pending</div>
                  </div>
                  <div class="gh-123325-8 inter-normal-slate-gray-10-5px">GH-123325</div>
                </div>
              </div>
              <div class="component">
                <div class="frame-287">
                  <div class="frame-468">
                    <div class="price inter-semi-bold-tundora-12px">$800</div>
                    <div class="done">Done</div>
                  </div>
                  <div class="gh-123325-8 inter-normal-slate-gray-10-5px">GH-123325</div>
                </div>
              </div>
              <div class="component">
                <div class="frame-287">
                  <div class="frame-468">
                    <div class="price inter-semi-bold-tundora-12px">$160</div>
                    <div class="pending">Pending</div>
                  </div>
                  <div class="gh-123325-8 inter-normal-slate-gray-10-5px">GH-123325</div>
                </div>
              </div>
            </div>
          </div>  */}
          </div>
        </div>
      </div>
    </>
  );
}