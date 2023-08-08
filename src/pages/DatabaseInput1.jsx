import "../styling/DatabaseInput1.css";
import "../styling/Submitted.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import ReactDOM from 'react-dom';
import AWS from "aws-sdk";
import JSZip from 'jszip';
import { gzip } from 'pako';
import { configSourceBucket } from "../config";

var dynamodb = new AWS.DynamoDB();
var fileID,
  fileName,
  relFileName,
  fileModifiedDate,
  fileSize,
  fileType,
  fileURI,
  downloadEligible,
  fileURL,
  origFileName,
  status,
  est;

export default function Sample()  {
  const [columnNames, setColumnNames] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const prevColumnNamesRef = useRef([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finalFileSize, setFinalFileSize] = useState(0);
  const [finalFileName, setFinalFileName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Load columnNames from localStorage
    const storedColumnNames = localStorage.getItem("columnNames");
    if (storedColumnNames) {
      const parsedColumnNames = JSON.parse(storedColumnNames);
      setColumnNames(parsedColumnNames);
      prevColumnNamesRef.current = parsedColumnNames;
    }
  }, []);


  useEffect(() => {
    const storedExcelData = localStorage.getItem("excelData");
    if (storedExcelData) {
      setExcelData(JSON.parse(storedExcelData));
    }
    console.log(progress);
  }, []);

  const titles = excelData.map((innerArray) => innerArray[0]);
  const fileArrays = Array.from({ length: titles.length }, () => []);

  function DragDrop({id, title, types}) {
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (id, file) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];

      const reader = new FileReader();
      reader.onload = () => {
        file.content = reader.result;
      };
      reader.readAsDataURL(file);

      updatedFiles[id] = file;

      const index = titles.indexOf(title);
      fileArrays[index] = [...fileArrays[index], file]; 

      return updatedFiles;
    });
    
    setFileNames((prevNames) => {
      const updatedNames = [...prevNames];
      updatedNames[id] = truncateFileName(file.name, 20);
      return updatedNames;
    });
  };


  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedName = fileName.substring(0, maxLength - 3) + '...';
    return truncatedName;
  };

    const file = files[id];
    const fileName = fileNames[id];
    const fileType = file ? file.type.split('/')[1] : '';

    return (
      <>
        {!file ? (
          <FileUploader handleChange={(file) => handleFileChange(id, file)} types={types} name="file" >
            <button className="upload-file inter-normal-persian-blue-10-5px" style={{ fontSize: '10.5px' }}>Upload file</button>
          </FileUploader>
        ) : (
          
            <div className="oxygen-normal-tundora-10px" style={{ fontSize: '10px' }}>{fileName}.{fileType}</div>
          
        )}
      </>
    );
  }

  function updateUploadFields(id, title) {
    var selectElement = document.getElementById(`mySelect${id}`);
    var selectedValue = selectElement.value;
  
    var uploadField1 = document.getElementById(`uploadField1${id}`);
    var uploadField2 = document.getElementById(`uploadField2${id}`);
    var uploadField3 = document.getElementById(`uploadField3${id}`);
  
    // 초기화
    ReactDOM.unmountComponentAtNode(uploadField1);
    ReactDOM.unmountComponentAtNode(uploadField2);
    ReactDOM.unmountComponentAtNode(uploadField3);

    
    const seuratfiletype = ["rds" ,"RDS"];
    const fastQfiletype = ["fastq","FASTQ"];
    const cellrangerfiletype = ["tsv","csv","mtx"];

    if (selectedValue === "Seurat") {
      ReactDOM.render(<DragDrop id={id} title={title} types={seuratfiletype}/>, uploadField1);
    } else if (selectedValue === "FastQ") {
      ReactDOM.render(<DragDrop id={id} title={title} types={fastQfiletype}/>, uploadField1);
      ReactDOM.render(<DragDrop id={id} title={title} types={fastQfiletype}/>, uploadField2);
    } else if (selectedValue === "Cell Ranger") {
      ReactDOM.render(<DragDrop id={id} title={title} types={cellrangerfiletype}/>, uploadField1);
      ReactDOM.render(<DragDrop id={id} title={title} types={cellrangerfiletype}/>, uploadField2);
      ReactDOM.render(<DragDrop id={id} title={title} types={cellrangerfiletype}/>, uploadField3);
    }
  }

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      excelData.forEach((el) => idArray.push(excelData.indexOf(el)));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }

  const data = [columnNames].concat(excelData);

  const convert2DArrayToTSV = (data) => {
    const tsvContent = data.map((row) => row.join('\t')).join('\n');
    return tsvContent;
  };

  const compressAllFiles = async (arraysOfFiles, twoDArray) => {
    const finalZip = new JSZip();

  for (let i = 0; i < arraysOfFiles.length; i++) {
    const array = arraysOfFiles[i];
    const zip = new JSZip();

    // Add files from the current array to the zip
    array.forEach((fileObject) => {
      const { name, content } = fileObject;
      const decodedContent = content.split(',')[1];
      zip.file(name, atob(decodedContent), { binary: true });
    });

    // Generate tar archive
    const tar = await zip.generateAsync({ type: 'arraybuffer' });

    // Compress the tar archive to tar.gz format
    const tarGz = gzip(tar);

    // Add the tar.gz file to the final zip with a unique name (e.g., zip1.tar.gz, zip2.tar.gz, etc.)
    finalZip.file(`${titles[i]}.tar.gz`, tarGz);
  }

  const tsvContent = convert2DArrayToTSV(twoDArray);

  // Add the TSV file to the final zip
  finalZip.file('metadata.tsv', tsvContent);

  // Generate the final tar.gz archive
  const content = await finalZip.generateAsync({ type: 'blob' });

  setFinalFileSize(content.size);
    // Save the tar.gz file to S3
    await uploadToS3({ name: 'meta&data.tar.gz', content });
  
    console.log('All files compressed and uploaded to S3.');
  };

  const uploadToS3 = (fileObject) => {
    setFinalFileName(fileObject.name);

    const s3 = new AWS.S3();
    const bucketName = configSourceBucket; // Replace with your S3 bucket name
  
    const params = {
      Bucket: bucketName,
      Key: fileObject.name,
      Body: fileObject.content, // The base64-encoded content of the file
    };
  
    return new Promise((resolve, reject) => {
      s3
      .upload(params, (err, data) => {
        if (err) {
          console.error('Error uploading to S3:', err);
          reject(err);
        } else {
          console.log('File uploaded successfully to S3:', fileObject.name);
          resolve(data.Location);
          uploadFile(fileArrays);
        }
      })
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      });
    });
  };

  const handleUpload = async () => {
    setIsSubmitting(true);
    compressAllFiles(fileArrays, data);
  };

  const getStringValue = (value) => {
    if (typeof value == "number") {
      return "" + value + "";
    }
    return value;
  };

  const uploadFile = (fileArrays) => {
    fileArrays.forEach((files) => {
      files.forEach((file) => {
        if (file) {
          setIsSubmitting(true);

          //fileID = Math.floor(Math.random() * 100);
          fileID = Math.floor(Date.now() + "" + Math.random());
          
          //YYYY-MM-DD, HH:mm
          var dateobj = new Date();
          var CreationDate = `${dateobj.toISOString().slice(0, 10)}, ${dateobj.toISOString().slice(11, 16)}`;

          downloadEligible = true;

          fileModifiedDate = file.lastModifiedDate;
          
          fileName = fileID + "_" + file.name;

          fileSize = file.size / 1000 + "kB";
          
          if (files.length === 1) {
            fileType = 'seurat';
          } else if (files.length === 2) {
            fileType = 'FASTQ';
          } else if (files.length === 3) {
            fileType = 'countMTX';
          } else {
            fileType = 'others-' + file.type;
          }

          fileURI = "s3://" + configSourceBucket + "/" + fileName;
          
          fileURL =
            "https://" +
            configSourceBucket /*S3_BUCKET*/ +
            ".s3.amazonaws.com/" +
            fileName;


          origFileName = file.name;  
          relFileName = fileID + "_" + fileName;

          status = null;
          est = null;

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
          downloadEligible: getStringValue(downloadEligible);
          origFileName: getStringValue(origFileName);
          status: getStringValue(status);
          est: getStringValue(est);
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
              origFileName: {
                S: "" + origFileName + "",
                //S: "Call Me Today
              },
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: "wittgen-bio-metadata-table",
          };

          dynamodb.putItem(params, function (err, data) {
            if (err) console.log(err, err.stack);
            // an error occurred
            else console.log(data); // successful response
            
          });
        }
      });
    });
  }

  return (
    <>
  <head>

      <meta charSet="utf-8" />
      {/*<meta name=description content="This site was generated with Anima. www.animaapp.com"/>*/}
      {/* <link rel="shortcut icon" type=image/png href="https://animaproject.s3.amazonaws.com/home/favicon.png" /> */}
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://animaproject.s3.amazonaws.com/home/favicon.png"
      />
      <link rel="stylesheet" type="text/css" href="apply-database-input.css" />
      <link rel="stylesheet" type="text/css" href="styleguide.css" />
      <link rel="stylesheet" type="text/css" href="globals.css" />
      </head>
      
      <body>
      <input type="hidden" id="anPageName" name="page" value="applyu47-database-input" />
    <div class="container-center-horizontal">
      <div class="applyu47-database-input screen">
        <div class="main-navigation">
          <div class="overlap-group1">
            <div class="group-184">
              <div class="overlap-group">
                <div class="witt-gen-portal oxygen-bold-white-21px" style={{ fontSize: '21px' }}>
                  <span class="oxygen-bold-white-21px" style={{ fontSize: '21px' }}>WittGen</span><span class="oxygen-light-white-21px" style={{ fontSize: '21px' }}>Portal</span>
                </div>
              </div>
              {/*<img class="line-79" src="img/line-79-12.svg" alt="Line 79" />*/}
            </div>
            <div class="frame-185">
              <div class="frame-185-item">
                <img
                  class="home_fill0_wght400_grad0_opsz48-1"
                  src="home-fill0-wght400-grad0-opsz48-1.svg"
                  alt="home_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="dashboard inter-normal-white-12px" style={{ fontSize: '12px' }}>Dashboard</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px" style={{ fontSize: '12px', fontWeight:'600' }}>My files</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px" style={{ fontSize: '12px' }}>Cost &amp; Usage</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' }}>Settings</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px" style={{ fontSize: '12px' }}>FAQ / Support</div>
              </div>
            </div>
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px" style={{ fontSize: '12px' }}>Logout</div>
            </div>
          </div>
        </div>
        <div class="back-next">
          <div class="frame-616">
            <div class="back-button"><div class="place inter-semi-bold-blue-dianne-10-5px" style={{ fontSize: '14px' }}>Back</div></div>
            <button class="next-button" onClick={handleUpload}><div class="next inter-semi-bold-white-10-5px" style={{ fontSize: '14px' }}>Next</div></button>
          </div>
        </div>
        {!isSubmitting ? (
        <>
        <div class="frame-563">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-9px" style={{ fontSize: '12px' }}>Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Metadatabase Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-semi-bold-blue-dianne-16px" style={{ fontSize: '12px' }}>Database Input</div>
                <div class="rectangle-228-1 rectangle-228-3"></div>
              </div>
              <div class="frame-49">
                <div class="submit inter-normal-oslo-gray-9px" style={{ fontSize: '12px' }}>Submit</div>
                <div class="rectangle-228-2 rectangle-228-3"></div>
              </div>
            </div>
            <div class="frame-213">
              <div class="component-33">
                <div class="x-exit inter-semi-bold-blue-dianne-7-9px" style={{ fontSize: '12px' }}>Discard &amp; Exit</div>
              </div>
              <div class="component-31"><div class="x-exit inter-semi-bold-white-7-9px" style={{ fontSize: '12px' }}>Save &amp; Exit</div></div>
            </div>
          </div>
        </div> 
        <div class="frame-562">
        <div class="group-284">
            <div class="frame-317">
              <div class="expected-amount inter-normal-slate-gray-14px" style={{ fontSize: '14px' }}>Expected amount</div>
              <h1 class="price inter-semi-bold-blue-dianne-36px" style={{ fontSize: '36px' }}>$300</h1>
            </div>
          </div>

  
          <table class="frame-5-1 frame-5-3">
            <tr class="frame-556">
              <th scope="col" class="frame-552">
                <input
                  type="checkbox"
                  name="select-all"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={checkItems.length === excelData.length ? true : false}
                />
              </th>
              <th scope="col" class="component-103">
                <div class="sample inter-semi-bold-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Sample</div>
              </th>
              <th scope="col" class="component-104">
                <div class="database-category database inter-semi-bold-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Database category</div>
              </th>
              <th scope="col" class="component-105" style={{ height: '30px' }}>
                <div class="database-file database inter-semi-bold-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Database file</div>
              </th>
              <th scope="col" class="component-10"></th>
              <th scope="col" class="component-10"></th>
            </tr>
            <ul class="table-container_database">
            {excelData?.map((item) => (
              <tr
                class={checkItems.includes(excelData.indexOf(item)) ? "frame-5-2 frame-5-3" : "frame-5-ss frame-5-3"}
                key={excelData.indexOf(item)}
              >
                <td class="frame-55">
                  <input
                    type="checkbox"
                    name={`select-${excelData.indexOf(item)}`}
                    onChange={(e) => handleSingleCheck(e.target.checked, excelData.indexOf(item))}
                    checked={checkItems.includes(excelData.indexOf(item)) ? true : false}
                  />
                </td>
                <td class="component">
                  <div class="inter-normal-tundora-10-5px" style={{ fontSize: '10.5px' }}>{item[0]}</div>
                </td>
                <td class="component-6">
                  <select
                    id={`mySelect${excelData.indexOf(item)}`}
                    onChange={() => updateUploadFields(excelData.indexOf(item), item[0])}
                    class={checkItems.includes(excelData.indexOf(item)) ? "custom-select" : "custom-select2"}
                    key={excelData.indexOf(item)}
                  >
                    <option>Choose category</option>
                    <option value="Seurat">Seurat</option>
                    <option value="FastQ">FastQ</option>
                    <option value="Cell Ranger">Cell Ranger</option>
                  </select>
                </td>
                <td class="component-1" id={`uploadField1${excelData.indexOf(item)}`}></td>
                <td class="component-1" id={`uploadField2${excelData.indexOf(item)}`}></td>
                <td class="component-1" id={`uploadField3${excelData.indexOf(item)}`}></td>
              </tr>
            ))}
            </ul>
          </table>
        </div>
        <div class="frame-561">
          <div class="group-445">
            <div class="frame-5-1 frame-5-3">
              <div class="frame-438">
                <div class="frame-445">
                  <img
                    class="error_fill0_wght400_grad0_opsz48-1"
                    src="error-fill0-wght400-grad0-opsz48-1.svg"
                    alt="error_FILL0_wght400_GRAD0_opsz48 1"
                  />
                  <div class="important inter-semi-bold-milano-red-8-2px" style={{ fontSize: '8px' }}>Important</div>
                </div>
                <p class="please-upload-your-d inter-normal-black-10-5px" style={{ fontSize: '10.5px' }}>
                  Please upload your database file(s) accordingly (in no particular order):
                </p>
              </div>
              <div class="frame-5">
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-4"><div class="seurat-1 inter-semi-bold-black-10-5px" style={{ fontSize: '10.5px' }}>Seurat</div></div>
                  <div class="frame-44"><div class="rds inter-normal-black-10-5px" style={{ fontSize: '10.5px' }}>RDS</div></div>
                </div>
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-440">
                    <div class="fast-queue-1 fast-queue-3 inter-semi-bold-black-10-5px" style={{ fontSize: '10.5px' }}>FastQ</div>
                  </div>
                  <div class="frame-443 inter-normal-black-10-5px" style={{ fontSize: '10.5px' }}>
                    <div class="fast-queue-1-1">FastQ #1</div>
                    <div class="fast-queue-2 fast-queue-3">FastQ #2</div>
                  </div>
                </div>
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-4"><div class="cell-ranger-1 inter-semi-bold-black-10-5px" style={{ fontSize: '10.5px' }}>Cell Ranger</div></div>
                  <div class="frame-44 inter-normal-black-10-5px" style={{ fontSize: '10.5px' }}>
                    <div class="bar-code">Bar code</div>
                    <div class="feature">Feature</div>
                    <div class="matrix">Matrix</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
        ) : (
        <>
        {100 > progress && progress >= 0 && (<div class="frame-563">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-9px" style={{ fontSize: '12px' }}>Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Metadatabase Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Database Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-semi-bold-blue-dianne-16px" style={{ fontSize: '12px' }}>Submit</div>
                <div class="rectangle-228-1 rectangle-228-3"></div>
              </div>
            </div>
            <div class="frame-213">
              <div class="component-33">
                <div class="x-exit inter-semi-bold-blue-dianne-7-9px" style={{ fontSize: '12px' }}>Discard &amp; Exit</div>
              </div>
              <div class="component-31"><div class="x-exit inter-semi-bold-white-7-9px" style={{ fontSize: '12px' }}>Save &amp; Exit</div></div>
            </div>
          </div>
        </div>)}
        {100 === progress && (<div class="frame-563">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-9px" style={{ fontSize: '12px' }}>Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Metadatabase Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Database Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px" style={{ fontSize: '12px' }}>Submit</div>
                <div class="rectangle-228"></div>
              </div>
            </div>
            <div class="frame-213">
              <div class="component-33">
                <div class="x-exit inter-semi-bold-blue-dianne-7-9px" style={{ fontSize: '10px' }}>Exit to Applications</div>
              </div>
            </div>
          </div>
        </div>)}
        <div class="frame-562">
          <div class="frame-581">
            <div class="frame-578" style={{ 
              alignItems: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '30px', 
              position: 'relative', 
              width: 'fit-content',
              marginTop: '50px',
            }}>
              {100 > progress && progress >= 0 && (
                <div>
                  <progress style={{ width: '500px'}} value={progress} max="100"></progress>
                  <div>
                    <p className="inter-light-blue-dianne-15px" style={{ marginBotton: '10px'}}>
                      Please wait while uploading... ({((progress * finalFileSize) / 100000000).toFixed(2)} MB / {(finalFileSize / 1000000).toFixed(2)} MB)
                    </p>
                  </div>
                </div>
              )}
              {progress === 100 && (
                <>
                <div class="frame-364" style={{ 
                  alignItems: 'center', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '18px', 
                  position: 'relative', 
                  width: 'fit-content'
                }}>
                  <div class="group-363" style={{ 
                    backgroundColor: 'var(--white)', 
                    border: '1.5px solid', 
                    borderColor: 'var(--japanese-laurel)', 
                    borderRadius: '18px', 
                    height: '36px', 
                    minWidth: '36px', 
                    position: 'relative'
                  }}>
                    <img
                      class="material-symbolscheck-small"
                      src="material-symbols-check-small.svg"
                      alt="material-symbols:check-small"
                      style={{ 
                        height: '24px', 
                        left: '4px', 
                        position: 'absolute', 
                        top: '4px', 
                        width: '24px' 
                      }}
                    />
                  </div>
                  <p class="your-application-has" style={{ color: 'var(--japanese-laurel)'}}>Your application has been successfully submitted.</p>
                </div>
                <img class="line-105" src="line-105.svg" alt="Line 105" />
              </>
              )}
            </div>
            <img class="line-105" src="line-105.svg" alt="Line 105" />
          </div>
          <div class="frame-579">
            <div class="frame-580">
              {progress === 100 && (
                <>
                <div class="file-id-gh-13728930" style={{ marginTop: '10px' }}>File Name: {finalFileName}</div>
                <p class="well-email-you-when" style={{ marginTop: '10px' }}>We'll email you an order confirmation with details and tracking info.</p>
                </>
              )}
            </div>
            <a href="/dashboard">
              <div class="frame-488">
                <div class="component-33-1"><div class="see-my-file inter-semi-bold-white-10-5px">Back to Dashboard</div></div>
                {/* <div class="frame-213">
                  <div class="component-33">
                    <div class="back-to-dashboard inter-semi-bold-blue-dianne-10-5px">See my file</div>
                  </div>
                </div> */}
              </div>
            </a>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
    </body>
    </>
  );
}
