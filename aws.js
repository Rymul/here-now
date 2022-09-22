require('dotenv').config()
const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
// const creds = new AWS.Credentials(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY_ID)
const S3 = new AWS.S3();

// AWS.config.getCredentials(function(err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//       console.log("Access key:", AWS.config.credentials.accessKeyId);
//     }
//   });

(async() => { await 
    S3
    .putObject({
  Body: "hello world",
  Bucket: "here-and-now-s3",
  Key: "my-file.txt",
}).promise()})()
