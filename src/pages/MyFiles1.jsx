import "../styling/MyFiles1.css";

import React, { useState, useEffect, useContext, useRef } from "react";
import AWS, { SecretsManager } from "aws-sdk";
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

//import { Account, AccountContext, cogGroup } from "../components/Account";

import JSZip from "jszip";
import saveAs from "save-as";

import  {configTableName, configTargetBucket, configParams, configSourceBucket}  from "../config";

configParams();

var dynamodb = new AWS.DynamoDB();
const s3 = new AWS.S3();
var UserNameUploaded = "";

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
    <div className="frame-484">
      <article className="component-11">
        <div className="frame-460-1">
          <div className="gh-123325 inter-normal-tundora-14px">
            {element.fileId}
          </div>
        </div>
        <div className="frame-461">
          <div className="clinical inter-normal-tundora-14px">
            {element.service}
          </div>
        </div>
        <div className="frame-46">
          <div className="date inter-normal-tundora-14px">
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
            src="ic-sharp-delete-14@2x.svg"
            alt="ic:sharp-delete"
          />
        </div>
      </article>
    </div>
    //   <article className="component-11">
    //     <div className="frame-460-1">
    //       <div className="gh-123325-15 inter-normal-tundora-14px">
    //         {element.fileId}
    //       </div>
    //     </div>
    //     <div className="frame-461">
    //       <div className="clinical-11 inter-normal-tundora-14px">Research</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="date-15 inter-normal-tundora-14px">11/13/2022</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="unpaid-5 inter-normal-tundora-14px">In-progress</div>
    //     </div>
    //     <div className="frame-464">
    //       <img
    //         className="icsharp-delete-5"
    //         src="ic-sharp-delete-15@2x.svg"
    //         alt="ic:sharp-delete"
    //       />
    //     </div>
    //   </article>
    //   <article className="component-11">
    //     <div className="frame-460-1">
    //       <div className="gh-123325-15 inter-normal-tundora-14px">
    //         GH-123325
    //       </div>
    //     </div>
    //     <div className="frame-461">
    //       <div className="clinical-11 inter-normal-tundora-14px">Clinical</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="date-15 inter-normal-tundora-14px">11/13/2022</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="unpaid-5 inter-normal-tundora-14px">Unpaid</div>
    //     </div>
    //     <div className="frame-464">
    //       <img
    //         className="icsharp-delete-5"
    //         src="ic-sharp-delete-16@2x.svg"
    //         alt="ic:sharp-delete"
    //       />
    //     </div>
    //   </article>
    //   <article className="component-11">
    //     <div className="frame-460-1">
    //       <div className="gh-123325-15 inter-normal-tundora-14px">
    //         GH-123325
    //       </div>
    //     </div>
    //     <div className="frame-461">
    //       <div className="clinical-11 inter-normal-tundora-14px">Clinical</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="date-15 inter-normal-tundora-14px">11/13/2022</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="unpaid-5 inter-normal-tundora-14px">In-progress</div>
    //     </div>
    //     <div className="frame-464">
    //       <img
    //         className="icsharp-delete-5"
    //         src="ic-sharp-delete-17@2x.svg"
    //         alt="ic:sharp-delete"
    //       />
    //     </div>
    //   </article>
    //   <article className="component-114">
    //     <div className="frame-460-1">
    //       <div className="gh-123325-15 inter-normal-tundora-14px">
    //         GH-123325
    //       </div>
    //     </div>
    //     <div className="frame-461">
    //       <div className="clinical-11 inter-normal-tundora-14px">Clinical</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="date-15 inter-normal-tundora-14px">11/13/2022</div>
    //     </div>
    //     <div className="frame-46">
    //       <div className="unpaid-5 inter-normal-tundora-14px">Unpaid</div>
    //     </div>
    //     <div className="frame-464">
    //       <img
    //         className="icsharp-delete-5"
    //         src="ic-sharp-delete-18@2x.svg"
    //         alt="ic:sharp-delete"
    //       />
    //     </div>
    //   </article>
    // </div>
  );
});

let submittedFilesObject = [
  {
    fileId: "GH-123445",
    service: "Clincal",
    submittedDate: "11/13/2022",
    status: "Submitted",
    download: "2 files",
  },
  {
    fileId: "GH-123445",
    service: "Clincal",
    submittedDate: "11/13/2022",
    status: "Completed",
    download: "2 files",
  },
  {
    fileId: "GH-123445",
    service: "Clincal",
    submittedDate: "11/13/2022",
    status: "2 Issue(s)",
    download: "1 files",
  },
];

// let submittedFilesObjectRender = submittedFilesObject.map((element) => {
//   return (
//     <div className="frame-484">
//       <div className="frame-4-1">
//         <div className="frame-460-1">
//           <div className="gh-123325-15 inter-normal-tundora-14px">
//             {element.fileId}
//           </div>
//         </div>
//         <div className="frame-461">
//           <div className="clinical-11 inter-normal-tundora-14px">
//             {element.service}
//           </div>
//         </div>
//         <div className="frame-46">
//           <div className="date-15 inter-normal-tundora-14px">
//             {element.submittedDate}
//           </div>
//         </div>
//         <div className="frame-46">
//           {/* <div className="frame-276"> */}
//           {/* <div className="inter-normal-japanese-laurel-14px"> */}
//           <div className="inter-normal-tundora-14px">
//             {element.status}
//             {/* </div> */}
//           </div>
//         </div>
//         <div className="frame-464">
//           <div className="x2-files">
//             <div className="address inter-normal-persian-blue-14px">
//               {element.download}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

export default function () {

  const navigate = useNavigate();
  
  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const [submittedFilesState,setSubmittedFilesState] = useState(null);

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
        <div className="frame-46">
          {/* <div className="frame-276"> */}
          {/* <div className="inter-normal-japanese-laurel-14px"> */}
          <div className="inter-normal-tundora-14px">
            {"In Process"}
            {/* </div> */}
          </div>
        </div>
        <div className="frame-46">
          <div className="x2-files">
            <div className="address inter-normal-persian-blue-14px">
              {"-"}
            </div>
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
          {/* <div class="frame-489">
            <div class="frame-488">
              <div class="unsubmitted-files inter-semi-bold-blue-dianne-15px">Unsubmitted files</div>
              <div class="group-286">
                <div class="frame-487">
                  <img class="frame-24" src="frame-244.svg" alt="Frame 244" />
                  <div class="frame-486">
                    <div class="group-23">
                      <div class="overlap-group"><div class="number inter-semi-bold-tundora-10-5px">1</div></div>
                    </div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">2</div></div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">3</div></div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">4</div></div>
                    <div class="group-240"><div class="number-1 inter-semi-bold-slate-gray-10-5px">5</div></div>
                  </div>
                  <img class="frame-24" src="frame-243.svg" alt="Frame 243" />
                </div>
              </div>
            </div>
            <div class="frame-485">
              <div class="frame-479 inter-semi-bold-blue-dianne-10-5px">
                <div class="frame-460-2 frame-460-4">
                  <div class="file-id inter-semi-bold-blue-dianne-10-5px">File ID</div>
                </div>
                <div class="frame-4">
                  <div class="service">Service</div>
                  <img
                    class="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div class="frame-4">
                  <div class="last-edited">Last edited</div>
                  <img
                    class="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next.svg"
                    alt="material-symbols:navigate-next"
                  />
                </div>
                <div class="frame-4-1 frame-4-3"><div class="status">Status</div></div>
                <div class="frame-4-1 frame-4-3"><div class="delete">Delete</div></div>
              </div>
              <div class="frame-484">
                <article class="component-11 component">
                  <div class="frame-460"><div class="gh-123325 inter-normal-tundora-10-5px">GH-123325</div></div>
                  <div class="frame-461"><div class="clinical inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="unpaid inter-normal-tundora-10-5px">Unpaid</div></div>
                  <div class="frame-46">
                    <img class="icsharp-delete" src="ic-sharp-delete.svg" alt="ic:sharp-delete" />
                  </div>
                </article>
                <article class="component-11 component">
                  <div class="frame-460"><div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div></div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Research</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">In-progress</div></div>
                  <div class="frame-46">
                    <img class="icsharp-delete-5" src="ic-sharp-delete.svg" alt="ic:sharp-delete" />
                  </div>
                </article>
                <article class="component-11 component">
                  <div class="frame-460"><div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div></div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                  <div class="frame-46">
                    <img class="icsharp-delete-5" src="ic-sharp-delete.svg" alt="ic:sharp-delete" />
                  </div>
                </article>
                <article class="component-11 component">
                  <div class="frame-460"><div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div></div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">In-progress</div></div>
                  <div class="frame-46">
                    <img class="icsharp-delete-5" src="ic-sharp-delete.svg" alt="ic:sharp-delete" />
                  </div>
                </article>
                <article class="component">
                  <div class="frame-460"><div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div></div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="unpaid-5 inter-normal-tundora-10-5px">Unpaid</div></div>
                  <div class="frame-46">
                    <img class="icsharp-delete-5" src="ic-sharp-delete.svg" alt="ic:sharp-delete" />
                  </div>
                </article>
              </div>
            </div>
          </div> */}
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
                    {/* <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">2</div></div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">3</div></div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">4</div></div>
                    <div class="group-23"><div class="number-1 inter-semi-bold-slate-gray-10-5px">5</div></div> */}
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
                  {/* <img
                    class="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next.svg"
                    alt="material-symbols:navigate-next"
                  /> */}
                </div>
                <div class="frame-4">
                  <div class="submitted-date submitted-1">Submitted date</div>
                  {/* <img
                    class="material-symbolsnavigate-next"
                    src="material-symbols-navigate-next.svg"
                    alt="material-symbols:navigate-next"
                  /> */}
                </div>
                <div class="frame-4-1 frame-4-3"><div class="status-1">Status</div></div>
                {/* <div class="frame-4-1 frame-4-3"><div class="reanalyze">Reanalyze</div></div> */}
                <div class="frame-4-1 frame-4-3"><div class="download">Download</div></div>
              </div>
              {submittedFilesState ? (
                  submittedFilesObjectRender
                ) : (
                  <p>
                    Loding...
                  </p>
                )}
              {/* 
              <div class="frame-484">
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46">
                    <div class="frame-276">
                      <div class="complete inter-normal-japanese-laurel-10-5px">Complete</div>
                    </div>
                  </div>
                  <div class="frame-46"><img class="icon" src="icon@2x.png" alt="icon" /></div>
                  <div class="frame-46">
                    <div class="x2-files"><div class="address inter-normal-persian-blue-10-5px">2 files</div></div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="submitted inter-normal-tundora-10-5px">Submitted</div></div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files"><div class="x2-files-4 inter-normal-tundora-10-5px">20%</div></div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="place inter-normal-tundora-10-5px">Research</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46">
                    <div class="frame-280">
                      <div class="address-1 address-8 inter-normal-red-10-5px">2 Issue(s)</div>
                    </div>
                  </div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files"><div class="x2-files-4 inter-normal-tundora-10-5px">20%</div></div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files"><div class="x2-files-4 inter-normal-tundora-10-5px">20%</div></div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="place-4 inter-normal-tundora-10-5px">Research</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-46">
                    <div class="object-type-for-output-button">
                      <div class="seurat inter-normal-blue-dianne-10-5px">Reanalyze</div>
                    </div>
                  </div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-2 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-3 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-4 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="place-4 inter-normal-tundora-10-5px">Research</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-46">
                    <div class="object-type-for-output-button">
                      <div class="seurat inter-normal-blue-dianne-10-5px">Reanalyze</div>
                    </div>
                  </div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-5 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
                <div class="frame-4-2 frame-4-3">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="place-4 inter-normal-tundora-10-5px">Research</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-46">
                    <div class="object-type-for-output-button">
                      <div class="seurat inter-normal-blue-dianne-10-5px">Reanalyze</div>
                    </div>
                  </div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-6 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
                <div class="frame-488-1">
                  <div class="frame-460-1 frame-460-4">
                    <div class="gh-123325-15 inter-normal-tundora-10-5px">GH-123325</div>
                  </div>
                  <div class="frame-461"><div class="clinical-11 inter-normal-tundora-10-5px">Clinical</div></div>
                  <div class="frame-46"><div class="date-15 inter-normal-tundora-10-5px">11/13/2022</div></div>
                  <div class="frame-46"><div class="complete-8 inter-normal-silver-10-5px">Complete</div></div>
                  <div class="frame-466"></div>
                  <div class="frame-46">
                    <div class="x2-files">
                      <div class="address-7 address-8 inter-normal-persian-blue-10-5px">2 files</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div class="frame-610">
          <div class="frame-615"></div>
          <div class="frame-449">
            <div class="submit-a-new-file inter-semi-bold-blue-dianne-15px">Submit a new file</div>
            <div class="frame-448">
              <div class="dashbaord_main-buttons-researcher">
                <div class="frame-447">
                  <img
                    class="assignment_fill0_wght400_grad0_opsz48-1"
                    src="assignment-fill0-wght400-grad0-opsz48-1.svg"
                    alt="assignment_FILL0_wght400_GRAD0_opsz48 1"
                  />
                  <div class="researchers inter-semi-bold-white-12px">Upload your file</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>

    </>
  );
}
