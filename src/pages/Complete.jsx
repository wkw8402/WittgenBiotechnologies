
import "../styling/globals.css";
import "../styling/styleguide.css";
import React, { useState, useEffect, useRef } from "react";
import "../styling/InProgress.css";
import "../styling/Complete.css";
import AWS, { SecretsManager } from "aws-sdk";
import { useNavigate } from 'react-router-dom';
import { Account, AccountContext, cogGroup, NewJWTTOKEN } from "../components/Account";
import JSZip from 'jszip';

export default function () {

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  
  const compRef = useRef();

  const logout = (event) => {
    compRef.current.logout();
    navigate("/")
  }

  const s3 = new AWS.S3({ region: 'us-east-1' });

  const [sampleData, setSampleData] = useState([]);
  const [selectedSample, setSelectedSample] = useState(null);
  const applicationId = localStorage.getItem('selectedApplicationID');

  const filteredSampleData = sampleData.filter(sample =>
    Object.values(sample).some(
      value => value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );  

  useEffect(() => {
    const fetchAndParseTSV = async () => {
      try {
        const params = {
          Bucket: 'wittgen-bio-metadata-bucket',
          Key: `${applicationId}.tsv`, // Replace with the actual filename
        };

        console.log(params.Key);
        
        const response = await s3.getObject(params).promise();
        const tsvContent = response.Body.toString('utf-8');

        // Split the TSV content into rows and parse it
        const rows = tsvContent.split('\n');
        const headers = rows[0].split('\t');
        const data = rows.slice(1).map((row) => {
          const values = row.split('\t');
          return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
        });
        
        setSampleData(data);

        if (data.length > 0) {
          setSelectedSample(data[0].ID); // Set the first sample as selected by default
        }
      } catch (error) {
        console.error('Error fetching or parsing the TSV file:', error);
      }
    };

    fetchAndParseTSV();
  }, []);

  
  const downloadFile = async (key) => {
    try {
      const s3 = new AWS.S3({ region: 'us-east-1' });
      const params = {
        Bucket: 'wittgen-bio-result-bucket',
        Key: key,
      };
      
      const response = await s3.getObject(params).promise();
      const blob = new Blob([response.Body], { type: response.ContentType });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = key.split('/').pop(); // Get the filename part from the key
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleDownloadAllFiles = async () => {
    try {
      // Define the key for the zip file
      const zipFileKey = `${applicationId}.zip`;
  
      // Prepare the parameters to download the file
      const params = {
        Bucket: 'wittgen-bio-result-bucket',
        Key: zipFileKey,
      };
  
      // Fetch the file from S3
      const response = await s3.getObject(params).promise();
      const blob = new Blob([response.Body], { type: 'application/zip' });
  
      // Create a link and download the file
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = zipFileKey; // The name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
    } catch (error) {
      console.error('Error downloading the zip file:', error);
    }
  };

  const downloadSampleFile = async () => {
    const selectedSampleId = document.querySelector('.top-title').textContent.trim(); // Ensure no extra whitespace
    const zipFileKey = `${applicationId}.zip`;

    try {
      const params = {
        Bucket: 'wittgen-bio-result-bucket',
        Key: zipFileKey,
      };

      const response = await s3.getObject(params).promise();
      
      const zip = new JSZip();
      await zip.loadAsync(response.Body);
  
      // Debugging: Log the entire structure of the zip file
      console.log('All files in zip:', zip.files);
  
      const folderPath = `${applicationId}/${selectedSampleId}/`; // Adjust based on the actual structure
      const filesInFolder = Object.keys(zip.files).filter(file => file.startsWith(folderPath));

      if (filesInFolder.length === 0) {
        throw new Error('The selected folder is empty or not found.');
      }
  
      // Debugging: Log files found in the desired folder
      console.log('Files in desired folder:', filesInFolder);
  
      const newZip = new JSZip();
      for (const fileName of filesInFolder) {
        const fileContent = await zip.files[fileName].async('blob');
        newZip.file(fileName.replace(folderPath, ''), fileContent, { binary: true });
      }
  
      const blob = await newZip.generateAsync({ type: 'blob' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${selectedSampleId}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error processing the zip file:', error);
    }
  };

  const displayUmapImage = async (sampleId) => {
    const zipFileKey = `${applicationId}.zip`;
  
    try {
      const params = {
        Bucket: 'wittgen-bio-result-bucket',
        Key: zipFileKey,
      };
  
      const response = await s3.getObject(params).promise();
      const zip = new JSZip();
      await zip.loadAsync(response.Body);
  
      const filePath = `${applicationId}/${sampleId}/umap.png`;
      if (!zip.files[filePath]) {
        throw new Error('File umap.png not found.');
      }
  
      const fileContent = await zip.files[filePath].async('blob');
      const url = URL.createObjectURL(fileContent);
      document.querySelector('.summary-frame-img').innerHTML = `<img src="${url}" alt="UMAP Image"/>`;
    } catch (error) {
      console.error('Error retrieving the umap.png file:', error);
    }
  };

  const displayResultText = async (sampleId) => {
    const zipFileKey = `${applicationId}.zip`;
  
    try {
      const params = {
        Bucket: 'wittgen-bio-result-bucket',
        Key: zipFileKey,
      };
  
      const response = await s3.getObject(params).promise();
      const zip = new JSZip();
      await zip.loadAsync(response.Body);
  
      const filePath = `${applicationId}/${sampleId}/result.txt`;
      if (!zip.files[filePath]) {
        throw new Error('File result.txt not found.');
      }
  
      const resultText = await zip.files[filePath].async('string');
      processResultText(resultText);
    } catch (error) {
      console.error('Error retrieving the result.txt file:', error);
    }
  };
  
  const processResultText = (text) => {
    const lines = text.split('\n');
    let htmlContent = '';
    let currentBoxContent = '';
    let isTitle = true;
  
    for (const line of lines) {
      if (line.trim() === '') {
        if (currentBoxContent !== '') {
          htmlContent += `<div class="summary-box-1">${currentBoxContent}</div>`;
          currentBoxContent = '';
        }
        isTitle = true;
        continue;
      }
  
      if (isTitle) {
        currentBoxContent += `<div class="box-title-font">${line}</div>`;
        isTitle = false;
      } else {
        currentBoxContent += `<div class="box-summary-font">${line}</div>`;
      }
    }
  
    // Add the last box if there is content
    if (currentBoxContent !== '') {
      htmlContent += `<div class="summary-box-1">${currentBoxContent}</div>`;
    }
  
    const resultContainer = document.querySelector('.result-container');
    if (resultContainer) {
      resultContainer.innerHTML = htmlContent;
    }
  };
  
  useEffect(() => {
    // Whenever selectedSample changes, update the displayed result text
    if (selectedSample) {
      displayResultText(selectedSample);
    }
  }, [selectedSample]);

  useEffect(() => {
    // Whenever selectedSample changes, update the displayed image
    if (selectedSample) {
      displayUmapImage(selectedSample);
    }
  }, [selectedSample]);
  
  const handleSampleClick = (sample) => {
    setSelectedSample(sample);
  };

  function SampleTable({ sampleData, selectedSample, onSampleClick }) {
    console.log("Selected Sample Data: ", selectedSample);
    return (
      <>
        {sampleData.map((row, index) => {
          const isSelected = selectedSample === row.ID;
          const sampleClass = isSelected ? "sample-button-selected" : "sample-button";
          return (
            <div
              key={index}
              className={sampleClass}
              onClick={() => onSampleClick(row.ID)}
            >
              {row.ID}
            </div>
          )
        })}
        {selectedSample && (
          <>
            <div className="side-navigation-title" style={{ width: '200px' }}>{applicationId}</div>
            <div className="top-title">{selectedSample}</div>
            <div className="summary-frame">
              <div className="summary-title-font">Summary</div>
              <div className="sumary-frame-box">
                <div className="result-container"></div>
              </div>
              <div className="summary-frame-img" style={{ left: '990px', top: '100px', height: '400px' }}></div>
            </div>
          </>
        )}
      </>
    );
  }

  function Table() {
    const [tableData, setTableData] = useState([]);

    const applicationId = localStorage.getItem('selectedApplicationID');
  
    useEffect(() => {
      // Function to retrieve and parse the TSV file
      const fetchAndParseTSV = async () => {
        try {
          const params = {
            Bucket: 'wittgen-bio-metadata-bucket',
            Key: `${applicationId}.tsv`, // Replace with the actual filename
          };
  
          const response = await s3.getObject(params).promise();
          const tsvContent = response.Body.toString('utf-8');
  
          // Split the TSV content into rows and parse it
          const rows = tsvContent.split('\n');
          const headers = rows[0].split('\t');
          const data = rows.slice(1).map((row) => {
            const values = row.split('\t');
            return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
          });
  
          setTableData(data);
        } catch (error) {
          console.error('Error fetching or parsing the TSV file:', error);
        }
      };

      fetchAndParseTSV();
    }, []);
  
    return (
      <div className="table">
        <div className="header">
          {Object.keys(tableData[0] || {}).map((key, index, array) => (
            <div className={`header-cell ${index === array.length - 1 ? 'last-header-cell' : ''}`} key={index}>
              {key}
            </div>
          ))}
        </div>
        {tableData.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {Object.values(row).map((cell, cellIndex) => (
              <div className={`cell ${cellIndex === 0 ? 'first-cell' : ''}`} key={cellIndex}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }  

  const numberRow = 3;
  const costRow = 100;

  return (
    <>
      <Account ref={compRef} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=1920, maximum-scale=1.0" />
      <input
        type="hidden"
        id="anPageName"
        name="page"
        defaultValue="apply-metadatabase-input-import-excel-file-match-columns"
      />
      <div className="page-complete">
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
        <div className="side-navigation">
        <button className="side-navigation-download" onClick={handleDownloadAllFiles}>
          <p className="downloadbutton-font">Download all files</p>
        </button>
          <div className="side-navigation-search" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              className="search-icon"
              src="/image/search-icon.svg"
              alt="search-icon"
              style={{ height: '100%' }}
            />
            <input 
              type="text"
              placeholder="Search samples"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: 'calc(100% - 20px)', // Adjust the 20px if you have different padding or icon width
                height: '100%',
                padding: '0 10px', // Optional, for inner spacing
                border: 'none', // Optional, removes the border
                outline: 'none', // Optional, removes the outline
              }}
              className="search-input"
            />
          </div>
          <div className="side-navigation-list">
          <SampleTable
            sampleData={filteredSampleData}
            selectedSample={selectedSample}
            onSampleClick={handleSampleClick}
          />
          </div>
        </div>
        <div className="main-frame-completed">
          <div className="frame-top-2">
          <button className="completed-download" onClick={downloadSampleFile}>
            <img
              className="download-icon"
              src="/image/download-icon.svg"
              alt="download-icon"
            />
            Download
          </button>
            <div className="completed-print">
              <img
                className="print-icon"
                src="/image/print-icon.svg"
                alt="print-icon"
              />
              Print</div>

          </div>
          <div className="In-progress-completed">
            <div className="completed-box"></div>
            <div className="progress-line-completed"></div>
            <div className="progress-line"></div>
            <div className="progress-framebox" style={{ position: 'fixed' }}>
              <div className="summary-title-font" style={{ marginBottom: '10px' }}>
                Application info
              </div>
              <div className="framebox">
                <Table />
              </div>
            </div>

            {/* <div className="completed-layout3">
              <div className="summary-box">
                <div className="order-summary">
                  <div className="order-top" >
                    <div className="ap-title">Order Summary</div>
                    <div className="order-top1">Currency:USD</div>
                  </div>
                  <div className="order-line"></div>
                  <div className="order-bottom">
                    <div className="summary-font">Sameples</div>
                    <div className="summary-font1">{numberRow} x {costRow}</div>
                    <div className="summary-font right-position">${numberRow * costRow}</div>
                  </div>
                </div>
                <div className="amount-box">
                  <div className="amount-top">
                    <div className="summary-font1 amount-top1" >Subtotal:
                      <div className="summary-font" style={{ textAlign: 'right' }}>${numberRow * costRow}</div>
                    </div>
                    <div className="summary-font1 amount-top1">Taxes(10%)
                      <div className="summary-font" style={{ textAlign: 'right' }}>${numberRow * costRow / 10}</div>
                    </div>

                  </div>
                  <div className="order-line"></div>
                  <div className="amount-bottom">
                    <div className="total-amount">
                      <div className="total-amount2">total amount</div>
                      <div className="total-amount3">${(numberRow * costRow) + (numberRow * costRow / 10)}</div>
                    </div>
                    <div className="freemium">
                      <div className="freemium2">Freemium</div>
                      <div className="freemium3">$0</div>
                    </div>
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

