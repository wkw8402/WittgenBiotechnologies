import "../styling/DatabaseInput1.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef } from 'react';
import { FileUploader } from "react-drag-drop-files";
import ReactDOM from 'react-dom';
import AWS from "aws-sdk";
import pako from 'pako';
import { configSourceBucket } from "../config";

export default function Sample()  {
  const [columnNames, setColumnNames] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const prevColumnNamesRef = useRef([]);

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
  }, []);

  function DragDrop({id, types}) {
  const [files, setFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  

  const handleFileChange = (id, file) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles[id] = file;
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
            <button className="upload-file inter-normal-persian-blue-10-5px">Upload file</button>
          </FileUploader>
        ) : (
          
            <div className="oxygen-normal-tundora-10px">{fileName}.{fileType}</div>
          
        )}
      </>
    );
  }

  function updateUploadFields(id) {
    var selectElement = document.getElementById(`mySelect${id}`);
    var selectedValue = selectElement.value;
  
    var uploadField1 = document.getElementById(`uploadField1${id}`);
    var uploadField2 = document.getElementById(`uploadField2${id}`);
    var uploadField3 = document.getElementById(`uploadField3${id}`);
  
    // 초기화
    ReactDOM.unmountComponentAtNode(uploadField1);
    ReactDOM.unmountComponentAtNode(uploadField2);
    ReactDOM.unmountComponentAtNode(uploadField3);

    
    const seuratfiletype = [".rds" ,".RDS"];
    const fastQfiletype = [".fastq",".FASTQ"];
    const cellrangerfiletype = ["tsv","csv","mtx"];

    if (selectedValue === "Seurat") {
      ReactDOM.render(<DragDrop id={id} types={seuratfiletype}/>, uploadField1);
    } else if (selectedValue === "FastQ") {
      ReactDOM.render(<DragDrop id={id} types={fastQfiletype}/>, uploadField1);
      ReactDOM.render(<DragDrop id={id} types={fastQfiletype}/>, uploadField2);
    } else if (selectedValue === "Cell Ranger") {
      ReactDOM.render(<DragDrop id={id} types={cellrangerfiletype}/>, uploadField1);
      ReactDOM.render(<DragDrop id={id} types={cellrangerfiletype}/>, uploadField2);
      ReactDOM.render(<DragDrop id={id} types={cellrangerfiletype}/>, uploadField3);
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

  let dataObject = [
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "",
      databaseFile3: "Upload File",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "Upload File",
      databaseFile2: "Upload File",
      databaseFile3: "",
    },
    {
      sample: "GH-2342",
      databaseCategory: "Cell Ranger",
      databaseFile1: "",
      databaseFile2: "Upload File",
      databaseFile3: "",
    },
  ];

  let dataObjectRender = dataObject.map((element) => {
    return (
      <>
        <div className="frame-5-2 frame-5-3">
          <div className="frame-55-1">
            <div className="component-102" />
          </div>ㄴ
          <div className="component-1">
            <div className="gh-1234567-4 inter-normal-tundora-14px">
              {element.sample}
            </div>
          </div>
          <div className="component-6">
            <div className="seurat-3 inter-normal-tundora-14px">
              {element.databaseCategory}
            </div>
            <img
              className="material-symbolsnavigate-next"
              src="material-symbols-navigate-next-13@2x.svg"
              alt="material-symbols:navigate-next"
            />
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile1}
            </div>
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile2}
            </div>
          </div>
          <div className="component-2">
            <div className="upload-file inter-normal-persian-blue-14px">
              {element.databaseFile3}
            </div>
          </div>
        </div>
      </>
    );
  });
  }

  const data = [columnNames].concat(excelData);

  const tsvContent = data.map((row) => row.join('\t')).join('\n');
    const blob = new Blob([tsvContent], { type: 'text/tsv' });
    const fileUrl = URL.createObjectURL(blob);

  // Now you have the TSV content as a local variable (fileUrl)
  console.log(fileUrl);

  const handleUpload = async () => {
    const file = await fetch(fileUrl).then((response) => response.blob());

    const s3 = new AWS.S3();
    const bucketName = configSourceBucket;
    const key = 'file.tsv'; // Replace with the desired key or filename in S3

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: file,
      ContentType: 'text/tab-separated-values', // Set the content type for the file (in this case, TSV)
    };

    try {
      await s3.upload(params).promise();
      console.log('File uploaded successfully to S3.');

       // Fetch the TSV file content from S3
       const getObjectParams = {
        Bucket: bucketName,
        Key: key,
      };

      const tsvFileContent = await s3.getObject(getObjectParams).promise();
      
      // Compress the file into a tar.gz buffer using pako
      const compressedFile = pako.gzip(tsvFileContent.Body, { level: 9 });

      // Upload the compressed tar.gz file to S3
      const uploadParams = {
        Bucket: bucketName,
        Key: `${key}.tar.gz`,
        Body: compressedFile,
        ContentType: 'application/gzip',
      };

      await s3.upload(uploadParams).promise();

      // Remove the original TSV file from S3
      const deleteParams = {
        Bucket: bucketName,
        Key: key,
      };

      await s3.deleteObject(deleteParams).promise();

      console.log(`Successfully compressed and uploaded ${key}.tar.gz to S3.`);
    } catch (error) {
      console.error('Error uploading or compressing:', error);
    }


  };
  
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
                <div class="witt-gen-portal oxygen-bold-white-21px">
                  <span class="oxygen-bold-white-21px">WittGen</span><span class="oxygen-light-white-21px">Portal</span>
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
                <div class="dashboard inter-normal-white-12px">Dashboard</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px">My files</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px">Cost &amp; Usage</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px">Settings</div>
              </div>
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px">FAQ / Support</div>
              </div>
            </div>
            <div class="logout">
              <img
                class="logout_fill0_wght400_grad0_opsz48-1"
                src="logout-fill0-wght400-grad0-opsz48-1.svg"
                alt="logout_FILL0_wght400_GRAD0_opsz48 1"
              />
              <div class="logout-1 inter-normal-white-12px">Logout</div>
            </div>
          </div>
        </div>
        <div class="back-next">
          <div class="frame-616">
            <div class="back-button"><div class="place inter-semi-bold-blue-dianne-10-5px" style={{ fontSize: '14px' }}>Back</div></div>
            <button class="next-button" onClick={handleUpload}><div class="next inter-semi-bold-white-10-5px" style={{ fontSize: '14px' }}>Next</div></button>
          </div>
        </div>
        <div class="frame-563">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-9px" style={{ fontSize: '12px' }}>Getting started</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-normal-japanese-laurel-16px">Metadatabase Input</div>
                <div class="rectangle-228"></div>
              </div>
              <div class="frame-49">
                <div class="database-input database inter-semi-bold-blue-dianne-16px">Database Input</div>
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
              <div class="expected-amount inter-normal-slate-gray-14px">Expected amount</div>
              <h1 class="price inter-semi-bold-blue-dianne-36px">$300</h1>
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
                <div class="sample inter-semi-bold-slate-gray-10-5px">Sample</div>
              </th>
              <th scope="col" class="component-104">
                <div class="database-category database inter-semi-bold-slate-gray-10-5px">Database category</div>
              </th>
              <th scope="col" class="component-105" style={{ height: '30px' }}>
                <div class="database-file database inter-semi-bold-slate-gray-10-5px">Database file</div>
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
                  <div class="inter-normal-tundora-10-5px">{item[0]}</div>
                </td>
                <td class="component-6">
                  <select
                    id={`mySelect${excelData.indexOf(item)}`}
                    onChange={() => updateUploadFields(excelData.indexOf(item))}
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
                  <div class="important inter-semi-bold-milano-red-8-2px">Important</div>
                </div>
                <p class="please-upload-your-d inter-normal-black-10-5px">
                  Please upload your database file(s) accordingly (in no particular order):
                </p>
              </div>
              <div class="frame-5">
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-4"><div class="seurat-1 inter-semi-bold-black-10-5px">Seurat</div></div>
                  <div class="frame-44"><div class="rds inter-normal-black-10-5px">RDS</div></div>
                </div>
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-440">
                    <div class="fast-queue-1 fast-queue-3 inter-semi-bold-black-10-5px">FastQ</div>
                  </div>
                  <div class="frame-443 inter-normal-black-10-5px">
                    <div class="fast-queue-1-1">FastQ #1</div>
                    <div class="fast-queue-2 fast-queue-3">FastQ #2</div>
                  </div>
                </div>
                <div class="frame-5-1 frame-5-3">
                  <div class="frame-4"><div class="cell-ranger-1 inter-semi-bold-black-10-5px">Cell Ranger</div></div>
                  <div class="frame-44 inter-normal-black-10-5px">
                    <div class="bar-code">Bar code</div>
                    <div class="feature">Feature</div>
                    <div class="matrix">Matrix</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </body>
    </>
  );
}
