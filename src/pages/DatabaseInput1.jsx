import "../styling/DatabaseInput1.css";
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import ReactDOM from 'react-dom';

export default function Sample()  {

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

  const data = [
    {id: 0, title: 'GH-1234567a'},
    {id: 1, title: 'GH-1234567b'},
    {id: 2, title: 'GH-1234567c'},
    {id: 3, title: 'GH-1234567d'},
    {id: 4, title: 'GH-1234567e'},
    {id: 5, title: 'GH-1234567f'},
    {id: 6, title: 'GH-1234567g'},
    {id: 7, title: 'GH-1234567h'},
    {id: 8, title: 'GH-1234567i'},
    {id: 9, title: 'GH-1234567j'},
    {id: 10, title: 'GH-1234567k'},
    {id: 11, title: 'GH-1234567l'},
    {id: 12, title: 'GH-1234567m'},
    {id: 13, title: 'GH-1234567n'},
    {id: 14, title: 'GH-1234567o'},
    {id: 15, title: 'GH-1234567p'},
    {id: 16, title: 'GH-1234567q'},
    {id: 17, title: 'GH-1234567r'},
    {id: 18, title: 'GH-1234567s'},
  ];
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
      data.forEach((el) => idArray.push(el.id));
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
            <div class="back-button"><div class="place inter-semi-bold-blue-dianne-10-5px">Back</div></div>
            <div class="next-button"><div class="next inter-semi-bold-white-10-5px">Next</div></div>
          </div>
        </div>
        <div class="frame-563">
          <div class="frame-350">
            <div class="frame-258">
              <div class="frame-49">
                <div class="getting-started inter-normal-japanese-laurel-9px">Getting started</div>
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
                <div class="submit inter-normal-oslo-gray-9px">Submit</div>
                <div class="rectangle-228-2 rectangle-228-3"></div>
              </div>
            </div>
            <div class="frame-213">
              <div class="component-33">
                <div class="x-exit inter-semi-bold-blue-dianne-7-9px">Discard &amp; Exit</div>
              </div>
              <div class="component-31"><div class="x-exit inter-semi-bold-white-7-9px">Save &amp; Exit</div></div>
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
                  checked={checkItems.length === data.length ? true : false}
                />
              </th>
              <th scope="col" class="component-103">
                <div class="sample inter-semi-bold-slate-gray-10-5px">Sample</div>
              </th>
              <th scope="col" class="component-104">
                <div class="database-category database inter-semi-bold-slate-gray-10-5px">Database category</div>
              </th>
              <th scope="col" class="component-105">
                <div class="database-file database inter-semi-bold-slate-gray-10-5px">Database file</div>
              </th>
              <th scope="col" class="component-10"></th>
              <th scope="col" class="component-10"></th>
            </tr>
            <ul class="table-container_database">
            {data?.map((item) => (
              <tr
                class={checkItems.includes(item.id) ? "frame-5-2 frame-5-3" : "frame-5-ss frame-5-3"}
                key={item.id}
              >
                <td class="frame-55">
                  <input
                    type="checkbox"
                    name={`select-${item.id}`}
                    onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
                    checked={checkItems.includes(item.id) ? true : false}
                  />
                </td>
                <td class="component">
                  <div class="inter-normal-tundora-10-5px">{item.title}</div>
                </td>
                <td class="component-6">
                  <select
                    id={`mySelect${item.id}`}
                    onChange={() => updateUploadFields(item.id)}
                    class={checkItems.includes(item.id) ? "custom-select" : "custom-select2"}
                    key={item.id}
                  >
                    <option>Choose category</option>
                    <option value="Seurat">Seurat</option>
                    <option value="FastQ">FastQ</option>
                    <option value="Cell Ranger">Cell Ranger</option>
                  </select>
                </td>
                <td class="component-1" id={`uploadField1${item.id}`}></td>
                <td class="component-1" id={`uploadField2${item.id}`}></td>
                <td class="component-1" id={`uploadField3${item.id}`}></td>
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
