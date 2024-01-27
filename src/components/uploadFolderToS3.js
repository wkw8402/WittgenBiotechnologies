const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure the AWS region of the S3 bucket
AWS.config.update({ region: 'us-east-1' });

const s3 = new AWS.S3();
const bucketName = 'wittgen-bio-result-bucket'; // Your S3 bucket name
const localFolderPath = '/Users/kyungwanwoo/Downloads/GH-8756609762'; // Local folder path
const s3FolderKeyPrefix = 'GH-8756609762/'; // Folder key prefix in S3

const uploadDirectory = (localPath, s3Path) => {
  // Read all the files in the folder
  fs.readdir(localPath, (err, files) => {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach((file, index) => {
      const localFilePath = path.join(localPath, file);
      
      // Check if the file is a directory
      fs.stat(localFilePath, (error, stat) => {
        if (error) {
          console.error("Error stating file.", error);
          return;
        }

        if (stat.isFile()) {
          console.log(`Uploading ${localFilePath} to S3`);

          const fileContent = fs.readFileSync(localFilePath);
          const s3Key = path.join(s3Path, file);

            // Inside the files.forEach loop
            s3.putObject({
                Bucket: bucketName,
                Key: s3Key,
                Body: fileContent
            }, (err, res) => {
                if (err) {
                console.error(`Error uploading '${file}' to ${s3Key}:`, err);
                } else {
                console.log(`Successfully uploaded '${file}' to ${s3Key}`, res);
                }
            });
  

        } else if (stat.isDirectory()) {
          // Recursively upload files in sub-directories
          uploadDirectory(localFilePath, path.join(s3Path, file));
        }
      });
    });
  });
};

uploadDirectory(localFolderPath, s3FolderKeyPrefix);
