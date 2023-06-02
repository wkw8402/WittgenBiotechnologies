import "../styling/MetabaseInput1.css";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigurationOptions } from "aws-sdk";
import AWS from "aws-sdk";
import "../config";
// import moment from "moment";
import {
  configTableName,
  configSourceBucket,
  configTargetBucket,
  configParams,
  configUploadGroup,
  configDownloadGroup,
  UserPool,
} from "../config";
// import { Account, AccountContext, cogGroup } from "../components/Account";
import { FileUploader } from "react-drag-drop-files";

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




export default function () {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [file_name, setFileName] = useState("");
  const [idToken, setIDToken] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(null);
  const navigate = useNavigate();
  // const { logout } = useContext(AccountContext);

  try {
    const fileTypes = ["JPG", "PNG", "GIF"];

    const handleFileChange = (file) => {
      setFile(file);
      setFileName(file.name);
  };


    function DragDrop() {
      
      return (
        <>
         {!isSubmitting ? (
          <FileUploader
            className="frame-213-1"
            handleChange={handleFileChange}
            name="file"
            // types={fileTypes}
          >
             {!file &&
            <div className="frame-213-1">

              <div className="drag-drop-a-file-here">Drag &amp; Drop a file here</div>
              <div className="or">or</div>
              <div className="frame-212">
                <div className="choose-a-file inter-semi-bold-blue-dianne-10-5px">
                  Choose a file
                </div>
              </div>
            </div>
            }
                {file &&  (
                            <div className="frame-213-1">
                <div className="oxygen-normal-tundora-21px">{file_name}</div>
            </div>)}
          </FileUploader>
         ) : (
          // if file is submitting, make this gray area & unclickable
          <div className="frame-213-1-gray"> 
              <div className="oxygen-normal-tundora-21px">{file_name}</div>
          </div>
         )}
        {progress > 0 && (
        <div>
          <progress value={progress} max="100"></progress>
          <div>
            {uploadStatus ? (
              <span>{uploadStatus}</span>
            ) : (
            <p className="inter-light-blue-dianne-15px">
              Please wait while uploading... ({((progress * file.size) / 100000000).toFixed(2)} MB / {(file.size / 1000000).toFixed(2)} MB)
              </p>
            )}
          </div>
        </div>
      )}
        </>
      );
    }

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
          navigate('/submitted', { state: { fileName: fileName} });
        }});
        
      }
    };

    useEffect(() => {
      const username = JSON.parse(localStorage.getItem("username"));
      // console.log("Yes", username);
      if (username) setUsername(username);
      newUsername = username;
    }, []);
    const logoutFun = () => {
      // logout();
      console.log("LOGOUT");
      //history.replace("/login");
    };

    return (
      <>
        <meta charSet="utf-8" />
        {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
        {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
        <meta name="viewport" content="width=1920, maximum-scale=1.0" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://animaproject.s3.amazonaws.com/home/favicon.png"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="apply-metadatabase-input-import-excel-file-upload-file-1.css"
        />
        <input
          type="hidden"
          id="anPageName"
          name="page"
          defaultValue="apply-metadatabase-input-import-excel-file-upload-file-1"
        />
    <div class="container-center-horizontal">
      <div class="apply-metadatabase-input-import-excel-file-upload-file screen">
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
                  <img class="icon-home" src="home-fill0-wght400-grad0-opsz48-1.svg" alt="icon-home" />
                  <div class="dashboard inter-normal-white-12px">Dashboard</div>
                </div>
              </a>
              <a href="/my_files_1">
                <div class="frame-185-item">
                <img
                  class="draft_fill0_wght400_grad0_opsz48-1"
                  src="draft-fill0-wght400-grad0-opsz48-1.svg"
                  alt="draft_FILL0_wght400_GRAD0_opsz48 1"
                />
                  <div class="my-files inter-semi-bold-white-12px">My files</div>
                </div>
              </a>
            </div>
            <a href="/">
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px">Logout</div>
            </div>
            </a>
          </div>
        </div>
        <div class="frame-450">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-12px">Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="metadatabase-input inter-semi-bold-blue-dianne-12px">Metadatabase Input</div>
                <div class="rectangle-228-1 rectangle-228-4"></div>
              </div>
              <div class="frame-49">
                <div class="database-input">Database Input</div>
                <div class="rectangle-228-2 rectangle-228-4"></div>
              </div>
              <div class="frame-49">
                <div class="submit">Submit</div>
                <div class="rectangle-228-2 rectangle-228-4"></div>
              </div>
            </div>
            {/* <div class="frame-213">
              <div class="component">
                <div class="discard-exit inter-semi-bold-blue-dianne-10-5px">Discard &amp; Exit</div>
              </div>
              <div class="component-31 component">
                <div class="researchers inter-semi-bold-white-10-5px">Save &amp; Exit</div>
              </div>
            </div> */}
          </div>
        </div>
        <div class="frame-658">
          <div class="frame-350-1">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started-1 inter-semi-bold-japanese-laurel-12px">Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="data-input inter-semi-bold-blue-dianne-12px">Data Input</div>
                <div class="rectangle-228-1 rectangle-228-4"></div>
              </div>
              <div class="frame-49">
                <div class="submit-1">Submit</div>
                <div class="rectangle-228-3 rectangle-228-4"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-449">
          <p class="if-you-have-multipl inter-semi-bold-blue-dianne-15px">
            *If you have multiple files to submit, please zip (.zip, .tar, .gz) them and put it here!
          </p>
          <DragDrop/>
          <div class="group-438">
            <div class="frame-616">
              {/* <div class="next-button"><div class="next inter-semi-bold-white-10-5px">Submit</div></div> */}
              <button
                    onClick={() => {
                      uploadFile(file);
                    }}
                    class="next-button"
                  >
                    <div class="next inter-semi-bold-white-10-5px">Submit</div>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    );
  } catch (error) {
    return <ErrorHandler error={error} />;
  }
}