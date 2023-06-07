/* eslint-disable */

// TODO: change fileName to relFileName?
// TODO: change configTargetBucket

import "../styling/Dashboard.css";

import React, { useState, useEffect, useContext, useRef } from "react";
import AWS, { SecretsManager } from "aws-sdk";

import { Account, AccountContext, cogGroup } from "../components/Account";

import JSZip from "jszip";
import saveAs from "save-as";

import  {configTableName, configTargetBucket, configParams, configSourceBucket}  from "../config";

configParams();

var dynamodb = new AWS.DynamoDB();
const s3 = new AWS.S3();
var UserNameUploaded = "";

let ItemsDataArr = {};
var zipFilename = "wittgen.zip";


let unSubmittedFilesObject = [
  // {
  //   fileId: "GH-123445",
  //   service: "Clincal",
  //   lastEdited: "11/13/2022",
  //   status: "Unpaid",
  // },
  // {
  //   fileId: "GH-123445",
  //   service: "Clincal",
  //   lastEdited: "11/13/2022",
  //   status: "Paid",
  // },
  // {
  //   fileId: "GH-123445",
  //   service: "Clincal",
  //   lastEdited: "11/13/2022",
  //   status: "Unpaid",
  // },
  // {
  //   fileId: "GH-123445",
  //   service: "Clincal",
  //   lastEdited: "11/13/2022",
  //   status: "Unpaid",
  // },
];

let unSubmittedFilesObjectRender = unSubmittedFilesObject.map((element) => {
  return (
    <div className="frame-4-1">
      <div className="frame-4">
        <div className="frame-460">
          <div className="gh inter-normal-tundora-14px">{element.fileId}</div>
        </div>
        <div className="frame-461">
          <div className="clinical-6 inter-normal-tundora-14px">
            {element.service}
          </div>
        </div>
        <div className="frame-46">
          <div className="date-6 date-11 inter-normal-tundora-14px">
            {element.lastEdited}
          </div>
        </div>
        <div className="frame-46">
          <div className="unpaid inter-normal-tundora-14px">
            {element.status}
          </div>
        </div>
        <div className="frame-464">
          <img
            className="icsharp-delete"
            src="ic-sharp-delete-8@2x.svg"
            alt="ic:sharp-delete"
          />
        </div>
      </div>
    </div>
  );
});


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


function downloadOnClick() {
  var zip = new JSZip();
  var dataCount = 0;
  console.log("ItemsDataArr==.>>>>", ItemsDataArr);

  if (ItemsDataArr?.Count > 0) {
    ItemsDataArr.Items?.map((item, index) => {
      console.log("ItemsDataArr index", index);

      const params = {
        Bucket: configSourceBucket, //later change to: configTargetBucket,
        Key: item?.fileName?.S,
      };
      console.log("Key==.>>>>", item?.fileName?.S);
      console.log("params=", params);
      s3.getObject(params, (err, data) => {
        if (err) {
          console.log(err, err.stack);
        } else {
          let myBlob = new Blob([data.Body /*.toString()*/], {
            type: "application/*.*;charset= utf-8;",
          });

          zip.file(item.fileName?.S, myBlob, { binary: true });
          dataCount++;
          console.log("DATA COUNT -->", dataCount);
          if (Number(dataCount) === Number(ItemsDataArr.Count)) {
            console.log("EQUAL");
            zip
              .generateAsync({ type: "blob" })
              .then(function downloadBlob(myBlob) {
                saveAs(myBlob, zipFilename);
              });
          }
        }
      });; 
    });
  }
  
}

function downloadBlob(blob) {
  // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  const blobUrl = URL.createObjectURL(blob);
  // Create a link element
  const link = document.createElement("a");
  // Set link's href to point to the Blob URL
  link.href = blobUrl;
  //link.download = name; //'Health Claim Form.pdf ITGI.pdf';
  // Append link to the body
  document.body.appendChild(link);
  // Dispatch click event on the link
  // This is necessary as link.click() does not work on the latest firefox
  link.dispatchEvent(
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    })
  );

  // Remove link from body
  document.body.removeChild(link);
}

export default function () {
  // TODO: get user name in first call or wait until we get correct username or dont use usestate in username
  const [submittedFilesState, setSubmittedFilesState] = useState(null);
  const [user, setUser] = useState(null);

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
    setUser(getUser());
    //setSubmittedFilesState(data)
    // console.log("submittedFilesObject updated", submittedFilesState)
  }, []);
  
  let submittedFilesObject = [
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "Submitted",
      download_estTime: <button
      onClick={() => {
        downloadOnClick();
      }}
      className="researchers-3 inter-semi-bold-slate-gray-14px"
    >
      Next
    </button>,
    },
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "Completed",
      download_estTime: "2 files",
    },
    {
      fileId: "GH-123445",
      service: "Clincal",
      submittedDate: "11/13/2022",
      status: "2 Issue(s)",
      download_estTime: "2 files",
    },
  ]
  let submittedFilesObjectRender = (user && submittedFilesState) ? (submittedFilesState.Items.map((element) => {
    console.log("render",submittedFilesState);
    console.log("render",typeof(submittedFilesState.Items));
    console.log("render",element);
    return (
      <div className="frame-4">
        <div className="frame-460">
          <div className="fileId inter-normal-tundora-14px">
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
            {"In Process"}
          </div>
        </div>
        <div className="frame-464">
          <div className="estTime inter-normal-tundora-14px">
            {"-"}
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
  event.preventDefault();
  compRef.current.logout();
  
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
        <div class="main-navigation">
          <div class="overlap-group1">
            <div class="group-184">
              <div class="overlap-group">
              <a href="/dashboard">
                <div class="witt-gen-portal oxygen-bold-white-21px">
                  <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
                </div>
                </a>
              </div>
              <img class="line-79" src="line-79.svg" alt="Line 79" />
            </div>
            <div class="frame-185">
            <a href="/dashboard">
              <div class="frame-185-item">
                <img class="icon-home" src="home-fill1-wght400-grad0-opsz48--2--1.svg" alt="icon-home" />
                <div class="dashboard inter-semi-bold-white-12px">Dashboard</div>
              </div>
              </a>
              <a href="/my_files_1">
              <div class="frame-185-item">
                <img
                  class="draft_fill0_wght400_grad0_opsz48-1"
                  src="draft-fill0-wght400-grad0-opsz48-1.svg"
                  alt="draft_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="my-files inter-normal-white-12px">My files</div>
              </div>
              </a>
            </div>
            <a href="/" onClick={logout}>
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px" >Logout</div>
            </div>
            </a>
          </div>
        </div>
        <div class="frame-610">
          <div class="frame-615"><h1 class="place">Welcome</h1></div>
          <div class="frame-449">
            <p class="get-started-with-our-services inter-semi-bold-blue-dianne-15px">Get started with our services</p>
            <a href="/metabase_input_1">
            <div class="frame-448">
              <div class="dashbaord_main-buttons-researcher">
                <div class="frame-447">
                  <img
                    class="assignment_fill0"
                    src="assignment-fill0-wght400-grad0-opsz48-1-white.svg"
                    alt="assignment_FILL0_wght400_GRAD0_opsz48 1"
                  />
                  <div class="researchers inter-semi-bold-white-12px">Upload your file</div>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
        <div class="frame-473">
          <div class="frame-472">
            <div class="submitted-files submitted-1 inter-semi-bold-blue-dianne-15px">Submitted files</div>
            <a href="/my_files_1">
            <div class="component-3"><div class="view-all">View all</div></div>
            </a>
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
                    Loading...
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
            </div> */}
          </div>
        </div>
        {/* <div class="frame-474">
          <div class="frame-472-1">
            <div class="unsubmitted-files inter-semi-bold-blue-dianne-15px">Unsubmitted files</div>
            <div class="component-3"><div class="view-all">View all</div></div>
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
        </div> */}
        <div class="frame-478">
          <div class="frame-47">
            <div class="frame-305">
              <div class="our-updates inter-semi-bold-blue-dianne-15px">Our updates</div>
              <div class="component-3">
                {/* <div class="view-all-1">View all</div> */}
                </div>
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
              <div class="cost-usage inter-semi-bold-blue-dianne-15px">Cost &amp; Usage</div>
              <div class="component-3"><div class="view-all-1">View all</div></div>
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
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
}
