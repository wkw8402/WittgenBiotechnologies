/*
import React, { useState } from 'react';
import { FileUploader } from "react-drag-drop-files";
import { read, utils, writeFile } from 'xlsx';


export default function DragDrop({ onDragDropComplete = () => {} }) {
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [uploadStatus, setUploadStatus] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);
    const [file_name, setFileName] = useState("");

    const handleFileChange = (selectedFile) => {
        setIsSubmitting(true);
        setFileName(selectedFile.name);
        const reader = new FileReader();
        reader.onload = (e) => {
            const bstr = e.target.result;
            const wb = read(bstr, { type: 'binary' });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = utils.sheet_to_json(ws);
            onDragDropComplete(data);
            setFileUploaded(true);
            setIsSubmitting(false);
        };
        reader.readAsBinaryString(selectedFile);
    };
    

return (
    <>
    {!isSubmitting ? (
    <FileUploader
        className="drag-drop-box"
        handleChange={handleFileChange}
        name="file"
    >
        {!fileUploaded ? (
            <div className="drag-drop-box">
            <div className="drag-drop-a-file-here">Drag &amp; Drop a file here</div>
            <div className="or">or</div>
            <div className="frame-212">
                <div className="choose-a-file inter-semi-bold-blue-dianne-10-5px">
                Choose a file
                </div>
            </div>
            </div>
        ) : (
        <div className="excel-frame">
            
        </div>
        )}
            </FileUploader>
        ) : (
            // if file is submitting, make this gray area & unclickables
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
*/