import "../styling/ApplyPayment.css";
import SingleModal from './SingleModal';
import "../styling/globals.css";
import "../styling/styleguide.css";
import React from "react";
import "../styling/DeleteMult.css";
import { useState, useEffect } from 'react';
import { FileUploader } from "react-drag-drop-files";
import ReactDOM from 'react-dom';
import AWS from "aws-sdk";

export default function Sample()  {
  const [modalOpen, setModalOpen] = useState(false);
  const [fileSelected, setFileSelection] = useState({});
  const [deleteMultipleMode, setDeleteMultipleMode] = useState(false);
  const [selectedCount, setSelectedCount] = useState(0);
  const [deletedRows, setDeletedRows] = useState([]);
  const [deleteText, setDeleteText] = useState('');
  const [data, setData] = useState([
    {id: 0, title: 'GH-1234567a'},
    {id: 1, title: 'GH-1234567b'},
    {id: 2, title: 'GH-1234567c'},
    {id: 3, title: 'GH-1234567d'},
    {id: 4, title: 'GH-1234567e'},
    {id: 5, title: 'GH-1234567f'},
    {id: 6, title: 'GH-1234567g'},
    
    
  ]);

  

  const toggleDeleteMultipleMode = () => {
    if (deleteMultipleMode && checkItems.length > 1) {
      openModal();
    } else {
      setDeleteMultipleMode((prevDeleteMultipleMode) => !prevDeleteMultipleMode);
    }
  };

  const handleDelete = (itemTitle) => {
    if (checkItems.length > 1) {
      const updatedData = data.filter((item) => !checkItems.includes(item.id));
      setData(updatedData);
    } else {
      const updatedData = data.filter((item) => item.title !== itemTitle);
      setData(updatedData);
    }
    handleConfirmDelete();
  };
  
  const handleConfirmDelete = () => {
    closeModal();
    setCheckItems([]);
    setSelectedRowCount(0);
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
            <button className="upload-file inter-normal-persian-blue-10-5px" style={{ fontSize: '10.5px' }}>Upload file</button>
          </FileUploader>
        ) : (
          
            <div className="oxygen-normal-tundora-10px">{fileName}.{fileType}</div>
          
        )}
      </>
    );
  }

  // 동의 버튼 누르면 테이블 활성화
const [tableEnabled, setTableEnabled] = useState(false);
const [applyButtonEnabled, setApplyButtonEnabled] = useState(false);


useEffect(() => {
  disableTable();
}, []);

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

    
    const seuratfiletype = ["rds" ,"RDS"];
    const fastQfiletype = ["fastq","FASTQ"];
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
    


  
  return (
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
      
      
        
        <input type="hidden" id="anPageName" name="page" value="applyu47-database-input" />
      <div class="container-center-horizontal">
        <div class="applyu47-database-input screen">
        <div class="main-navigation" style={{ zIndex: '1' }}>
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
                <div class="my-files inter-semi-bold-white-16px" style={{ fontSize: '12px' }}>My files</div>
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
          <div class="frame-616a">
          <button class="back-buttona"><div class="place inter-semi-bold-blue-dianne-10-5px-2" style={{ fontSize: '14px' }}>Back</div></button>
            <button class="next-buttona"><div class="next inter-semi-bold-white-10-5px-2" style={{ fontSize: '14px' }}>Submit</div></button>
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
            <tr class="frame-556d">
              <th scope="col" class="frame-55a">
                
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
            <ul class="table-container_applypayment">
            {data.filter((item) => !deletedRows.includes(item.id)) // 삭제된 줄을 필터링
      .map((item) => (
        // Skip rendering the row if the item is not present in the data state
        !data.some((dataItem) => dataItem.id === item.id) ? null : (
              <tr key={item.id} className={checkItems.includes(item.id) ? "frame-5-2 frame-5-3a" : "frame-5-ss frame-5-3a"} >
                <td class="frame-55">
                {deleteMultipleMode ? (
              <input
                type="checkbox"
                checked={checkItems.includes(item.id)}
                onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
              />
            ) : (
              <button
                disabled={!applyButtonEnabled}
                onClick={() => openModal(item.title)}
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
                <SingleModal open={modalOpen} close={closeModal} item={fileSelected} handleDelete={handleDelete} selectedCount={setSelectedCount} deleteText={deleteText}></SingleModal>
                </td>
                <td class="selectComponent">
                <div class="frame-553">
                <button
                    id={`applyButton${item.id}`}
                    className="frame-618 apply-3 inter-normal-cerulean-10-5px"
                    onClick={() => handleButtonClick(item.id)}
                    style={{ ...buttonStyle[item.id], fontSize: "10.5px" }}
                    disabled={!applyButtonEnabled}
                  >
                    {buttonText[item.id] || "Apply"}
                  </button>
                </div>                          
                </td>
                <td class="component">
                  <div class="inter-normal-tundora-10-5px" style={{fontSize: "10.5px" }}>{item.title}</div>
                  {buttonText[item.id] && (
            <img
            id={`image${item.id}`}
              class="verified_fill1_wght400_grad0_opsz48-1"
              src="verified-fill1-wght400-grad0-opsz48-1@2x.svg"
              alt="verified_FILL1_wght400_GRAD0_opsz48 1"
            />
          )}
                </td>
                <td class="component-6">
                  <select
                    id={`mySelect${item.id}`}
                    onChange={() => updateUploadFields(item.id)}
                    class={checkItems.includes(item.id) ? "custom-select" : "custom-select2"}
                    key={item.id}
                    disabled={!applyButtonEnabled}  
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
                  <div class="frame-32a"></div>
                  <div class="frame-32">
                    <div class="debit-credit-card inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Debit/Credit card</div>
                  </div>
                  <div class="frame-327"><div class="invoice-1 inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Invoice</div></div>
                  <div class="frame-215"><div class="freemium inter-semi-bold-white-12px-2" style={{fontSize: "12px" }}>Freemium</div></div>
                  <img class="line-92" src="img/line-92-3.svg" alt="Line 92" />
                </div>
                <div class="pre-payment inter-semi-bold-silver-12px" style={{fontSize: "12px" }}>Pre-payment</div>
              </div>
              <p class="your-freemium-ends-i inter-normal-tundora-12px" style={{fontSize: "12px" }}>
                <span class="inter-normal-tundora-12px" style={{fontSize: "12px" }}>Your Freemium ends in </span
                ><span class="inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>June 17th, 2023</span
                ><span class="inter-normal-tundora-12px" style={{fontSize: "12px" }}> (6 month upgrade applied).</span>
              </p>
            </div>
          </div>
        </div>  
        
        
      </div>
      <div class="frame-591" style={{ left: '1360px', zIndex: '0', height:'870px' }}>
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
                        <div class="number">{data.length}</div>
                        <div class="x">x</div>
                        <div class="price">$100</div>
                      </div>
                    </div>
                  </div>
                  <div class="price-1">${data.length * 100}</div>
                </div>
              </div>
            </div>
            <div class="frame-589">
              <div class="frame-588" style={{ alignItems: 'flex-start' }}>
                <div class="frame-587">
                  <div class="frame-58-1a">
                    <div class="subtotal inter-normal-slate-gray-10-5px-2" style={{fontSize: "10.5px" }}>Subtotal:</div>
                    <div class="price-2 inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>${data.length * 100}</div>
                  </div>
                  <div class="frame-58-1">
                    <div class="group-387"><div class="taxes10 inter-normal-slate-gray-10-5px-2" style={{fontSize: "10.5px" }}>Taxes(10%)</div></div>
                    <div class="price-3 inter-semi-bold-tundora-12px" style={{fontSize: "12px" }}>${Math.floor(data.length * 100 * 0.1)}</div>
                  </div>
                </div>
                <img class="line-112" src="line-112-2@2x.svg" alt="Line 112" />
              </div>
              <div class="frame-317a">
                <div class="group-427">
                  <div class="total-amount inter-normal-silver-10-5px" style={{fontSize: "10.5px" }}>Total amount</div>
                  <h1 class="price-4 inter-semi-bold-silver-27px" style={{fontSize: "27px" }}>${Math.floor(data.length * 100 * 1.1)}</h1>
                </div>
                <div class="group-428">
                  <div class="freemium-1 inter-normal-cerulean-10-5px" style={{fontSize: "10.5px" }}>Freemium</div>
                  <div class="price-5 inter-semi-bold-blue-dianne-27px-2" style={{fontSize: "27px" }}>$0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
    </>
  );
}

