import "../styling/FileUpload.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigurationOptions } from "aws-sdk";
import { read, utils, writeFile } from 'xlsx';
import AWS from "aws-sdk";
import "../config";
import YourExcelComponent from './ExcelComponent.jsx';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

import {
    configTableName,
    configSourceBucket,
    configTargetBucket,
    configParams,
    configUploadGroup,
    configDownloadGroup,
    UserPool,
} from "../config";

configParams();

var dynamodb = new AWS.DynamoDB();
var newUsername,
    fileID,
    fileName,
    relFileName,
    fileModifiedDate,
    fileSize,
    fileType,
    passedUserName,
    fileURI,
    upoadedBy,
    downloadEligible,
    fileURL;

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593",
    },
};

const myBucket = new AWS.S3({
    //apiVersion: "2006-03-01",
    params: { Bucket: configSourceBucket },
    region: "us-east-1",
});


// console.log(myBucket.config.credentials) //erase this later!!

function ErrorHandler({ error }) {
    return (
        <div role="alert">
            <p>An error occurred:</p>
            <pre>{error.message}</pre>
        </div>
    );
}




export default function FileUpload() {
    const [progress, setProgress] = useState(0);
    const [username, setUsername] = useState("");
    const [file_name, setFileName] = useState("");
    const [file, setFile] = useState(null);
    const [idToken, setIDToken] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [uploadStatus, setUploadStatus] = useState(null);
    const navigate = useNavigate();

    const compRef = useRef();
  
    const logout = (event) => {
        compRef.current.logout();
        navigate("/")
    }

    try {
        const getStringValue = (value) => {
            if (typeof value == "number") {
                return "" + value + "";
            }
            return value;
        };

        const uploadFile = (file) => {
            if (file) {
                setIsSubmitting(true);
                const params = {
                    //ACL: "public-read",
                    Body: file,
                    Bucket: configSourceBucket,
                    Key: file.name,
                };

                myBucket
                    .upload(params)
                    .on("httpUploadProgress", (evt) => {
                        setProgress(Math.round((evt.loaded / evt.total) * 100));
                    })
                    .send((err) => {
                        if (err) {
                            console.log(err);
                            window.alert(`Error: ${err.message}`);
                        } else {
                            var dateobj = new Date();
                            // format("YYYY-MM-DD");
                            var CreationDate = dateobj.toISOString().slice(0, 10);
                            console.log(CreationDate);
                            // CreationDate = testDate;

                            console.log("File Cration Date is :", CreationDate);

                            ////////////////////////////////////////////////
                            //fileID = Math.floor(Math.random() * 100);
                            fileID = Math.floor(Date.now() + "" + Math.random());
                            fileName = file.name;
                            fileSize = file.size / 1000 + "kB";
                            fileModifiedDate = file.lastModifiedDate;
                            fileType = file.type;
                            fileURI = "s3://" + configSourceBucket + "/" + fileName;
                            upoadedBy = newUsername;
                            downloadEligible = "";
                            fileURL =
                                "https://" +
                                configSourceBucket /*S3_BUCKET*/ +
                                ".s3.amazonaws.com/" +
                                fileName;
                            relFileName = fileID + "_" + newUsername + "_" + fileName;

                            console.log("File Id has been calculated as - ", fileID);
                            console.log("File URL has been calculated as - ", encodeURI(fileURL));

                            fileID: getStringValue(fileID);
                            fileModifiedDate: getStringValue(
                                new Date(fileModifiedDate).toISOString()
                            );
                            fileName: getStringValue(fileName);
                            fileSize: getStringValue(fileSize);
                            fileType: getStringValue(fileType);
                            fileURI: getStringValue(fileURI);
                            upoadedBy: getStringValue(upoadedBy);
                            downloadEligible: getStringValue(downloadEligible);
                            // fileURL: getStringValue(encodeURI(fileURL));
                            //CreationDate: getStringValue(CreationDate);

                            var params = {
                                Item: {
                                    fileID: {
                                        S: "" + fileID + "",
                                        //S: "Somewhat Famous"
                                    },
                                    fileModifiedDate: {
                                        S: "" + fileModifiedDate + "",
                                        //S: "No One You Know"
                                    },
                                    fileName: {
                                        S: "" + fileName + "",
                                        //S: "Call Me Today"
                                    },
                                    fileSize: {
                                        S: "" + fileSize + "",
                                        //S: "Call Me Today"
                                    },
                                    fileType: {
                                        S: "" + fileType + "",
                                        //S: "Call Me Today"
                                    },
                                    fileURI: {
                                        S: "" + fileURI + "",
                                        //S: "Call Me Today"
                                    },
                                    fileURL: {
                                        S: "" + encodeURI(fileURL) + "",
                                        //S: "Call Me Today"
                                    },
                                    upoadedBy: {
                                        S: "" + upoadedBy + "",
                                        //S: "Call Me Today
                                    },
                                    downloadEligible: {
                                        S: "" + downloadEligible + "",
                                        //S: "Call Me Today
                                    },
                                    CreationDate: {
                                        S: "" + CreationDate + "",
                                        //S: "Call Me Today
                                    },
                                    relFileName: {
                                        S: "" + relFileName + "",
                                        //S: "Call Me Today
                                    },
                                },
                                ReturnConsumedCapacity: "TOTAL",
                                TableName: configTableName,
                            };

                            dynamodb.putItem(params, function (err, data) {
                                if (err) console.log(err, err.stack);
                                // an error occurred
                                else console.log(data); // successful response

                            });
                            navigate('/submitted', { state: { fileName: fileName } });
                        }
                    });

            }
        };

        useEffect(() => {
            const username = JSON.parse(localStorage.getItem("username"));
            // console.log("Yes", username);
            if (username) setUsername(username);
            newUsername = username;
        }, []);


        return (

            
            <div className="page">
                <Account ref={compRef} />
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
                    <button className="navigation-box-1" onClick={()=>{ navigate('/dashboard') }}>
                        <img
                        className="dashboard-icon"
                        src="/image/home-icon.svg"
                        alt="home-icon"
                        />
                        <div className="light-font">Dashboard</div>
                    </button>
                    <button className="navigation-box-1" onClick={()=>{ navigate('/my_files_1') }} style={{ marginLeft: '-3px' }}>
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
                        src="/image/settings-icon2.svg"
                        alt="setting-icon"
                        style={{ width: '15px', height: '15px'}}
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
                                <div>
                                    <div className="discard-exit-1 "></div>
                                </div>
                                <button className="frame-top-right-bold" onClick={() => {navigate("/dashboard")}}>
                                    <div className="save-exit-1 flex items-center justify-center">Exit</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main-page">

                        <YourExcelComponent />
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
                                        <div className="circle-frame-bold">1</div>
                                    </div>
                                    <div className="bold-font">Upload file</div>

                                    <img
                                        className="line-9"
                                        src="/image/line-93.svg"
                                        alt="line-93"
                                    />
                                    <div className="frame-26">
                                        <div className="circle-frame-gray">2</div>
                                        <div className="gray-font">Match columns</div>
                                    </div>
                                    <img
                                        className="line-9"
                                        src="/image/line-93.svg"
                                        alt="line-93"
                                    />
                                    <div className="frame-26">
                                        <div className="circle-frame-gray">3</div>
                                        <div className="gray-font">Validate data</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )

    } catch (error) {
        return <ErrorHandler error={error} />;
    }
}