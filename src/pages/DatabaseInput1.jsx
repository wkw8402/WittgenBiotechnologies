import "../styling/DatabaseInput1.css";
import "../styling/DeleteMult.css";
import "../styling/ApplyPayment.css";
import "../styling/Submitted.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import ReactDOM from 'react-dom';
import AWS from "aws-sdk";
import JSZip from 'jszip';
import { gzip } from 'pako';
import { configSourceBucket } from "../config";
import SingleModal from './SingleModal';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";

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
  const [fileArraysState, setFileArraysState] = useState([])
  const [excelData, setExcelData] = useState([]);
  const [userName, setUserName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const prevColumnNamesRef = useRef([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toPayment, setToPayment] = useState(false);
  const [progress, setProgress] = useState(0);
  const [finalFileSize, setFinalFileSize] = useState(0);
  const [finalFileName, setFinalFileName] = useState('');
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [fileSelected, setFileSelection] = useState({});
  const [deleteMultipleMode, setDeleteMultipleMode] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [deletedRows, setDeletedRows] = useState([]);
  const [deletedFiles, setDeletedFiles] = useState([]);
  const [deleteText, setDeleteText] = useState('');

  const toggleDeleteMultipleMode = () => {
    if (deleteMultipleMode && checkItems.length > 1) {
      openModal();
      console.log(checkItems);
    } else {
      setDeleteMultipleMode((prevDeleteMultipleMode) => !prevDeleteMultipleMode);
    }
  };

  const handleDelete = (itemTitle, item) => {
    if (checkItems.length > 1) {
      closeModal();
      setCheckItems([]);
      setSelectedRowCount(0);
      for (let i = 0; i < checkItems.length; i++) {
        console.log(i);
        const index = checkItems[i];
        handleConfirmDelete(excelData[index][0])
      }

    } else {
      closeModal();
      setCheckItems([]);
      setSelectedRowCount(0);
      handleConfirmDelete(item);
    }
  };

  let constDeletedFiles = [];
  let constDeletedRows = [];
  
  const handleConfirmDelete = (item) => {
    console.log(item);
    
    const matchingRow = excelData.find(row => row.includes(item));
    // console.log(matchingRow);
    if (!constDeletedRows.includes(matchingRow)) {
      constDeletedRows.push(matchingRow);
    }

    const rowIndex = excelData.findIndex(row => row.includes(item));
    const matchingFile = fileArraysState[rowIndex];

    if (!constDeletedFiles.includes(matchingFile)){
      constDeletedFiles.push(matchingFile);
    }

    console.log(constDeletedRows);
    console.log(constDeletedFiles);

    setDeletedFiles(constDeletedFiles);
    setDeletedRows(constDeletedRows);
  };

  const openModal = (title) => {
    const selectedCount = checkItems.length;
    const modalTitle = selectedCount > 1 ? `${selectedCount} samples` : title;
    const deleteText = selectedCount > 1 ? "samples" : "sample";

    setModalOpen(true);
    setFileSelection(modalTitle);
    setDeleteText(deleteText);
  };
  const closeModal = () => {
    setModalOpen(false);
    setFileSelection({}); 
  };


// 동의 버튼 누르면 테이블 활성화
const [tableEnabled, setTableEnabled] = useState(false);
const [applyButtonEnabled, setApplyButtonEnabled] = useState(false);

function disableTable() {
  setTableEnabled(false);
  setApplyButtonEnabled(false);
  const table = document.getElementById("myTable");
  const checkboxes = table.getElementsByTagName("input");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].disabled = true;
  }
}

function enableTable() {
  setTableEnabled(true);
  setApplyButtonEnabled(true);
  const table = document.getElementById("myTable");
  const checkboxes = table.getElementsByTagName("input");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].disabled = false;
  }
}

function toggleTable(checked) {
  if (checked) {
    enableTable();
  } else {
    disableTable();
  }
}

  //Apply button change deisgn
  const [buttonText, setButtonText] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});
  const [buttonClicked, setButtonClicked] = useState({});

  const handleButtonClick = (id) => {
    if (buttonClicked[id]) {
      const imageElement = document.getElementById(`image${id}`);
    if (imageElement) {
      imageElement.style.display = "none";
    }
      setButtonClicked((prevButtonClicked) => ({
        ...prevButtonClicked,
        [id]: false,
      }));
      setButtonText((prevButtonText) => ({
        ...prevButtonText,
        [id]: "Apply",
      }));
      setButtonStyle((prevButtonStyle) => ({
        ...prevButtonStyle,
        [id]: {},
      }));
    } else {
      const imageElement = document.getElementById(`image${id}`);
    if (imageElement) {
      imageElement.style.display = "block";
    }
      setButtonClicked((prevButtonClicked) => ({
        ...prevButtonClicked,
        [id]: true,
      }));
      setButtonText((prevButtonText) => ({
        ...prevButtonText,
        [id]: "Applied",
      }));
      setButtonStyle((prevButtonStyle) => ({
        ...prevButtonStyle,
        [id]: {
          backgroundColor: "var(--cerulean)",
          color: "white",
        },
      }));
    }
  };
  

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
    const storedUserName = localStorage.getItem("username");
    const storedInputValue = localStorage.getItem("inputValue");
    if (storedExcelData) {
      setExcelData(JSON.parse(storedExcelData));
    }
    if (storedUserName) {
      setUserName(JSON.parse(storedUserName));
    }
    if (storedInputValue) {
      setInputValue(storedInputValue);
    }
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
  
  const truncateFileName2 = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedName = fileName.substring(0, maxLength - 3) + '...';
    return truncatedName;
  };

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
  const [selectedRowCount, setSelectedRowCount] = useState(0);


  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  
    setSelectedRowCount((prev) => (checked ? prev + 1 : prev - 1));
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

  const filteredExcelData = excelData.filter(row => {
    // Check if the row is not present in deletedRows
    return !deletedRows.some(deletedRow => JSON.stringify(deletedRow) === JSON.stringify(row));
  });

  const data = [columnNames].concat(filteredExcelData);

  const convert2DArrayToTSV = (data) => {
    const tsvContent = data.map((row) => row.join('\t')).join('\n');
    return tsvContent;
  };

  const compressAllFiles = async (arraysOfFiles, twoDArray) => {
    const finalZip = new JSZip();

  for (let i = 0; i < arraysOfFiles.length; i++) {
    const array = arraysOfFiles[i];

    // Skip processing if the current array is empty
    if (array.length === 0) {
      continue;
    }

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
    await uploadToS3({ name: `${inputValue}.tar.gz`, content });
  
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
          uploadFile(fileObject);
        }
      })
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      });
    });
  };

  const filteredFileArrays = fileArraysState.map(row => {
    if (deletedFiles.some(deletedFile => arraysAreEqual(deletedFile, row))) {
      return []; // Replace with an empty array
    }
    return row; // Keep the original row
  });
  
  
  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  }

  const handleUpload = async () => {
    setToPayment(false);
    setIsSubmitting(true);
    
    console.log("filtered")
    console.log(filteredFileArrays);

    compressAllFiles(filteredFileArrays, data);
  };

  const uploadFile = (finalFileObject) => {
    if (finalFileObject) {
      setIsSubmitting(true);
  
      // Extract necessary information from the finalFileObject
      //fileID = Math.floor(Math.random() * 100);
      fileID = Math.floor(Date.now() + "" + Math.random());
          
      //YYYY-MM-DD, HH:mm
      var dateobj = new Date();
      var CreationDate = `${dateobj.toISOString().slice(0, 10)}, ${dateobj.toISOString().slice(11, 16)}`;

      downloadEligible = true;

      fileModifiedDate = CreationDate;

      fileName = finalFileObject.name;
      
      fileSize = (finalFileSize / 1000000).toFixed(2) + "MB"
          
      fileType = 'tar.gz';

      fileURI = "s3://" + configSourceBucket + "/" + fileName;
      
      fileURL =
        "https://" +
        configSourceBucket /*S3_BUCKET*/ +
        ".s3.amazonaws.com/" +
        fileName;

      origFileName = fileName;  
      relFileName = fileID + "_" + fileName;
      var upoadedBy = userName;

      status = null;
      est = null;

      console.log("File Id has been calculated as - ", fileID);
      console.log("File URL has been calculated as - ", encodeURI(fileURL));
  
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
          upoadedBy: {
            S: "" + upoadedBy + "",
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
      })
    }
  };

  const compRef = useRef();

  const logout = (event) => {
      compRef.current.logout();
      navigate("/")
  }
  
  return (
    <>
    <Account ref={compRef} />
  {!toPayment ? 
    (
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
  
          <div class="back-next">
            <div class="frame-616">
              <div class="back-button"><div class="place inter-semi-bold-blue-dianne-10-5px" style={{ fontSize: '14px' }}>Back</div></div>
              <button class="next-button" onClick={()=>{setToPayment(true); setFileArraysState(fileArrays)}}><div class="next inter-semi-bold-white-10-5px" style={{ fontSize: '14px' }}>Next</div></button>
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
                <div class="component-33" style={{ border: 'none' }}>
                  <div class="x-exit inter-semi-bold-blue-dianne-7-9px" style={{ fontSize: '12px', border: 'none' }}></div>
                </div>
                <button class="component-31"><div class="x-exit inter-semi-bold-white-7-9px" style={{ fontSize: '12px' }} onClick={()=>{navigate('/dashboard')}}>Exit</div></button>
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
                <div class="component-33" style={{ border: 'none' }}>
                  <div class="x-exit inter-semi-bold-blue-dianne-7-9px"></div>
                </div>
                <button class="component-31"><div class="x-exit inter-semi-bold-white-7-9px" style={{ fontSize: '12px' }} onClick={()=>{navigate("/dashboard")}}>Exit</div></button>
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
                    <progress style={{ width: '500px' }} value={progress} max="100"></progress>
                    <div>
                      <p className="inter-light-blue-dianne-15px">
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
  ) : (
    <>
  <meta charset="utf-8" />
    <meta name="viewport" content="width=1437.7535400390625, maximum-scale=1.0" />
    <link rel="shortcut icon" type="image/png" href="https://animaproject.s3.amazonaws.com/home/favicon.png" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="photo" />
    <link rel="stylesheet" type="text/css" href="css/frame-416.css" />
    <link rel="stylesheet" type="text/css" href="css/apply-payment-4.css" />
    <link rel="stylesheet" type="text/css" href="css/delete-sample.css" />
    <link rel="stylesheet" type="text/css" href="css/styleguide.css" />
    <link rel="stylesheet" type="text/css" href="css/globals.css" />
      
      
    
        <input type="hidden" id="anPageName" name="page" value="apply-payment-4" />
      <div class="container-center-horizontal">
        <div class="apply-payment-4 screen">
        <div class="main-navigation" style={{ zIndex: '1' }} >
          <div class="overlap-group1">
            <div class="group-184">
              <div class="overlap-group">
                <div class="witt-gen-portal oxygen-bold-white-21px">
                  <span class="oxygen-bold-white-21px" style={{ fontSize: '21px' }}>WittGen</span><span class="oxygen-light-white-21px" style={{ fontSize: '21px' }}>Portal</span>
                </div>
              </div>
              {/*<img class="line-79" src="img/line-79-12.svg" alt="Line 79" />*/}
            </div>
            <div class="frame-185">
            <a href="dashboard">
              <div class="frame-185-item">
                <img
                  class="home_fill0_wght400_grad0_opsz48-1"
                  src="home-fill0-wght400-grad0-opsz48-1.svg"
                  alt="home_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="dashboard inter-normal-white-12px" style={{ fontSize: '12px' }}>Dashboard</div>
              </div></a>
              <a href="my_files_1">
              <div class="frame-185-item">
                <img
                  class="draft_fill1_wght400_grad0_opsz48-1-1"
                  src="draft-fill1-wght400-grad0-opsz48--1--1.svg"
                  alt="draft_FILL1_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="my-files inter-semi-bold-white-16px" style={{ fontSize: '12px' }}>My files</div>
              </div>
              </a>
              <a href="CostUsage">
              <div class="frame-185-item">
                <img
                  class="paid_fill0_wght400_grad0_opsz48-1"
                  src="paid-fill0-wght400-grad0-opsz48-1.svg"
                  alt="paid_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="cost-usage inter-normal-white-12px" style={{ fontSize: '12px' }}>Cost &amp; Usage</div>
              </div></a>
              <a href="my_profile">
              <div class="frame-185-item">
                <img
                  class="settings_fill0_wght400_grad0_opsz48-1"
                  src="settings-fill0-wght400-grad0-opsz48-1.svg"
                  alt="settings_FILL0_wght400_GRAD0_opsz48 1"
                />
                <div class="settings inter-normal-white-12px" style={{ fontSize: '12px' }}>Settings</div>
              </div></a>
              <a href="support">
              <div class="frame-185-item">
                <img
                  class="contact_support_fill"
                  src="contact-support-fill0-wght400-grad0-opsz48--1--1.svg"
                  alt="contact_support_FILL0_wght400_GRAD0_opsz48 (1) 1"
                />
                <div class="faq-support inter-normal-white-12px" style={{ fontSize: '12px'}}>FAQ / Support</div>
              </div></a>
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
          <div class="frame-616a">
          <button class="back-buttona" onClick={()=>{setToPayment(false)}}><div class="place inter-semi-bold-blue-dianne-10-5px-2" style={{ fontSize: '14px' }}>Back</div></button>
            <button class="next-buttona" onClick={()=>{handleUpload()}}><div class="next inter-semi-bold-white-10-5px-2" style={{ fontSize: '14px' }}>Submit</div></button>
          </div>
        </div>
        <div class="frame-563" style={{ zIndex: '0' }}>
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
            <div class="component-33" style={{ border: 'none' }}>
              <div class="x-exit inter-semi-bold-blue-dianne-7-9px"></div>
            </div>
            <button class="component-31"><div class="x-exit inter-semi-bold-white-7-9px" style={{ fontSize: '12px' }} onClick={()=>{navigate('/dashboard')}}>Exit</div></button>
            </div>
          </div>
        </div> 
        <div class="frame-577" style={{ position: 'fixed', left: '103px' }}>
          <div class="frame-562a">
            <div class="group-447">
              <div class="frame-564">
                <p class="upgrade-freemium-to-6-months inter-semi-bold-blue-dianne-15px-2" style={{ fontSize: '15px' }}>
                  Upgrade Freemium to 6 months
                </p>
                <div class="frame-565">
                  <div class="group-456">
                    <p class="agree-to-wittgens-u inter-normal-blue-dianne-10-5px" style={{ fontSize: '10.5px' }}>
                      Agree to Wittgen’s use of sample &amp; data information and enjoy 6 months unlimited access to
                      Wittgen’s services for free. Effective immediately.
                    </p>
                    <div class="group-402">
                    <input
                  type="checkbox"
                  name="select-all"
                  onChange={(e) => toggleTable(e.target.checked)}
                  checked={tableEnabled}
                />
                      <p class="i-have-read-and-agree-to-the-website inter-normal-white-10-5px" style={{ fontSize: '10.5px' }}>
                        <span class="inter-normal-black-10-5px-2" style={{ fontSize: '10.5px' }}>I have read and agree to the website</span
                        ><span class="inter-normal-cerulean-10-5px"></span>
                      </p>
                      <a onclick="ShowOverlay('frame-416', 'animate-appear');"
                        ><div class="terms-and-conditions inter-normal-cerulean-10-5px" style={{ fontSize: '10.5px' }}>terms and conditions</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-576">
              <div class="frame-container">
                <div class="frame-568">
                  <div class="overview inter-semi-bold-blue-dianne-12px-2">Overview</div>
                  <div class="frame">
                    <div class="frame">
                      <div >
                        
                      </div>
                    </div>
                    <button class="payment_-delete-multiple"  disabled={!applyButtonEnabled} onClick={toggleDeleteMultipleMode}>
                      <img class="frame-596" src="frame-596-1.svg" alt="Frame 596" />
                      <div class="delete-multiple-applypayment inter-normal-blue-dianne-14px" >{deleteMultipleMode ? `Delete ${selectedRowCount} rows` : 'Delete multiple'}</div>
                    </button>
                  </div>
                </div>
                <div class="frame-576-1">
                  <div class="frame-container-1">
                    <div class="frame-560">


                    <table id="myTable" className={`frame-5-1a frame-5-3a ${!tableEnabled ? 'disabled' : ''}`}>
            <tr class="frame-556">
              <th scope="col" class="frame-55" style={{width:"25px"}}>
                
              </th>
              <th scope="col" class="frameofpromo">
                <img
                  class="verified_fill1_wght400_grad0_opsz48-1"
                  src="verified-fill1-wght400-grad0-opsz48-1@2x.svg"
                  alt="verified_FILL1_wght400_GRAD0_opsz48 1"  
                  disabled={!applyButtonEnabled}            
                />              
              <div class="promotion inter-semi-bold-cerulean-10-5px"  style={{ fontSize: '10.5px' }} disabled={!applyButtonEnabled}>Promotion</div>
              </th>
              <th scope="col" class="component-103">
                <div class="sample inter-semi-bold-slate-gray-10-5px" style={{ fontSize: '10.5px' }}>Sample</div>
              </th>
              <th scope="col" class="component-103">
                <div class="database-category database inter-semi-bold-slate-gray-10-5px">Database category</div>
              </th>
              <th scope="col" class="component-103">
                <div class="database-file database inter-semi-bold-slate-gray-10-5px">Database file</div>
              </th>
              <th scope="col" class="component-10"></th>
              <th scope="col" class="component-10"></th>
            </tr>
            <ul class="table-container_applypayment">
            {console.log(deletedRows)}
            {excelData.filter((item) => !deletedRows.includes(item)) // 삭제된 줄을 필터링
      .map((item) => (
        // Skip rendering the row if the item is not present in the data state
        !data.some((dataItem) => excelData.indexOf(item) === excelData.indexOf(item)) ? null : (
              <tr key={excelData.indexOf(item)} className={checkItems.includes(excelData.indexOf(item)) ? "frame-5-2 frame-5-3a" : "frame-5-ss frame-5-3a"} >
                <td class="frame-55">
                {deleteMultipleMode ? (
              <input
                type="checkbox"
                checked={checkItems.includes(excelData.indexOf(item))}
                onChange={(e) => handleSingleCheck(e.target.checked, excelData.indexOf(item))}
              />
            ) : (
              <button
                disabled={!applyButtonEnabled}
                onClick={() => openModal(item[0])}
                className="applybutton"
                type="button"
              >
                <img
                  className="icsharp-delete"
                  src="ic-sharp-delete-1@2x.svg"
                  alt="ic:sharp-delete"
                  disabled={!applyButtonEnabled}
                />
              </button>
            )}
                <SingleModal open={modalOpen} close={closeModal} item={fileSelected} handleDelete={handleDelete} deleteText={deleteText}></SingleModal>
                </td>
                <td class="selectComponent">
                <div class="frame-552">
                <button
                    id={`applyButton${excelData.indexOf(item)}`}
                    className="frame-618 apply-3 inter-normal-cerulean-10-5px"
                    onClick={() => handleButtonClick(excelData.indexOf(item))}
                    style={{ ...buttonStyle[excelData.indexOf(item)], fontSize: "10.5px" }}
                    disabled={!applyButtonEnabled}
                  >
                    {buttonText[excelData.indexOf(item)] || "Apply"}
                  </button>
                </div>                          
                </td>
                <td class="component">
                  <div class="inter-normal-tundora-10-5px" style={{fontSize: "10.5px" }}>{item[0]}</div>
                  {buttonText[excelData.indexOf(item)] && (
            <img
            id={`image${excelData.indexOf(item)}`}
              class="verified_fill1_wght400_grad0_opsz48-1"
              src="verified-fill1-wght400-grad0-opsz48-1@2x.svg"
              alt="verified_FILL1_wght400_GRAD0_opsz48 1"
            />
          )}
                </td>
                <td class="component-6" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>
                  {fileArraysState[excelData.indexOf(item)].length === 1 ? (
                    <>Seurat</>
                  ) : fileArraysState[excelData.indexOf(item)].length === 2 ? (
                    <>FastQ</>
                  ) : (
                    <>Cell Ranger</>
                  )}
                </td>
                {fileArraysState[excelData.indexOf(item)].length === 1 ? (
                  <>
                    <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][0].name, 20)}</td>
                    <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}></td>
                    <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}></td>
                  </>
                ) : fileArraysState[excelData.indexOf(item)].length === 2 ? (
                  <>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][0].name, 20)}</td>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][1].name, 20)}</td>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}></td>
                  </>
                ) : (
                  <>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][0].name, 20)}</td>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][1].name, 20)}</td>
                  <td class="component-1" style={{ fontSize: '10px', fontFamily: 'Times, serif' }}>{truncateFileName2(fileArraysState[excelData.indexOf(item)][2].name, 20)}</td>
                  </>
                )}
              </tr>
              )
            ))}
            </ul>
          </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-438">
            <div class="group-431"><div class="payment inter-semi-bold-blue-dianne-15px-2" style={{fontSize: "15px" }}>Payment</div></div>
            <div class="group-432">
              <div class="group-423">
                <div class="overlap-group-1">
                  <div class="frame-214"><div class="membership inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Membership</div></div>
                  <div class="frame-32" style={{ left: "230px" }}><div class="invoice-1 inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Pre-payment</div></div>
                  <div class="frame-32">
                    <div class="debit-credit-card inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Debit/Credit card</div>
                  </div>
                  <div class="frame-327"><div class="invoice-1 inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Invoice</div></div>
                  <div class="frame-215a"><div class="freemiuma inter-semi-bold-white-12px-2" style={{fontSize: "12px" }}>Freemium</div></div>
                  <img class="line-92" src="img/line-92-3.svg" alt="Line 92" />
                </div>
              </div>
              <p class="your-freemium-ends-i inter-normal-tundora-12px" style={{fontSize: "12px" }}>
                <span class="inter-normal-tundora-12px" style={{fontSize: "12px" }}>Your Freemium ends in </span
                ><span class="inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>June 17th, 2023</span
                ><span class="inter-normal-tundora-12px" style={{fontSize: "12px" }}> (6 month upgrade applied).</span>
              </p>
            </div>
          </div>
        </div>  
        
        
      
      {/* <div class="frame-591" style={{ left: '1360px', zIndex: '0', height:'870px' }}>
          <div class="frame-590">
            <div class="frame-58">
              <div class="frame-58">
                <div class="frame-582">
                  <div class="order-summary inter-normal-tundora-15px" style={{fontSize: "15px" }}>Order Summary</div>
                  <div class="group-391">
                    <div class="currency-usd inter-normal-tundora-10-5px-2" style={{fontSize: "10.5px" }}>Currency: USD</div>
                  </div>
                </div>
                <img class="line-107" src="line-107-1@2x.svg" alt="Line 107" />
              </div>
              <div class="group-394">
                <div class="group-393 inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>
                  <div class="frame-416">
                    <div class="group-392"><div class="samples">Samples</div></div>
                    <div class="group-389">
                      <div class="flex-row inter-normal-slate-gray-10-5px-2" style={{fontSize: "10.5px" }}>
                        <div class="number">{excelData.length - deletedRows.length}</div>
                        <div class="x">x</div>
                        <div class="price">$100</div>
                      </div>
                    </div>
                  </div>
                  <div class="price-1">${(excelData.length - deletedRows.length) * 100}</div>
                </div>
              </div>
            </div>
            <div class="frame-589">
              <div class="frame-588" style={{ alignItems: 'flex-start' }}>
                <div class="frame-587">
                  <div class="frame-58-1a">
                    <div class="subtotal inter-normal-slate-gray-10-5px-2" style={{fontSize: "10.5px" }}>Subtotal:</div>
                    <div class="price-2 inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>${(excelData.length - deletedRows.length) * 100}</div>
                  </div>
                  <div class="frame-58-1">
                    <div class="group-387"><div class="taxes10 inter-normal-slate-gray-10-5px-2" style={{fontSize: "10.5px" }}>Taxes(10%)</div></div>
                    <div class="price-3 inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>${Math.floor((excelData.length - deletedRows.length) * 100 * 0.1)}</div>
                  </div>
                </div>
                <img class="line-112" src="line-112-2@2x.svg" alt="Line 112" />
              </div>
              <div class="frame-317a">
                <div class="group-427">
                  <div class="total-amount inter-normal-silver-10-5px" style={{fontSize: "10.5px" }}>Total amount</div>
                  <h1 class="price-4 inter-semi-bold-silver-27px" style={{fontSize: "27px" }}>${Math.floor((excelData.length - deletedRows.length) * 100 * 1.1)}</h1>
                </div>
                <div class="group-428">
                  <div class="freemium-1 inter-normal-cerulean-10-5px" style={{fontSize: "10.5px" }}>Freemium</div>
                  <div class="price-5 inter-semi-bold-blue-dianne-27px-2" style={{fontSize: "27px" }}>$0</div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
    </div>
    
    </>
  )
  }
  </>
  );
}
