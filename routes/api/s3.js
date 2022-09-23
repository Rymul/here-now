const express = require('express');
const router = express.Router();
const aws = require('aws-sdk')

const app = express();

const s3 = new aws.S3();
// const {S3Client} =require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    region:"us-west-1"
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
    }
  };

  const upload = multer({
    fileFilter,
    storage: multerS3({
      acl: "public-read",
      s3,
      bucket: "here-and-now-s3",
    //   metadata: function (req, file, cb) {
    //     cb(null, { fieldName: "TESTING_METADATA" });
    //   },
      key: function (req, file, cb) {
        cb(null, Date.now().toString());
      },
    }),
  });


// const upload = multer({
//     storage:multerS3({
//         s3: s3,
//         bucket: 'here-and-now-s3',
//         acl: 'public-read',
//         metadata: function(req,file,cb) {
//             cb(null,{fieldName: file.fieldname});
//         },
//         key: function (req, file, cb) {
//             cb(null, Date.now().toString())
//         }
//     })
// })

const singleUpload = upload.single("image");

router.post("/add-profile-picture", function (req, res) {
//   const uid = req.params.id;

  singleUpload(req, res, function (err) {
    if (err) {
      return res.json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
          error: err,
        },
      });
    }

    let update = { profilePicture: req.file.location };
    console.log(update);
    res.json(update)
//     User.findByIdAndUpdate(uid, update, { new: true })
//       .then((user) => res.status(200).json({ success: true, user: user }))
//       .catch((err) => res.status(400).json({ success: false, error: err }));
  });
});

// const S3_BUCKET = process.env.S3_BUCKET;
// aws.config.region = 'us-west-1'


// router.get('/sign-s3', (req, res) => {
//     // const s3 = new aws.S3({accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY_ID});
//     const s3 = new aws.S3()
//     const fileName = req.query['file-name'];
//     const fileType = req.query['file-type'];
//     const s3Params = {
//       Bucket: "here-and-now-s3",
//       Key: fileName,
//       Expires: 60,
//       ContentType: fileType,
//       ACL: 'public-read'    
//     };
  
//     s3.getSignedUrl('putObject', s3Params, (err, data) => {
//       if(err){
//         console.log(err);
//       }
//       const returnData = {
//         signedRequest: data,
//         url: `https://here-and-now-s3.s3.amazonaws.com/${fileName}`
//       };
//       res.json(returnData);
//     });
//   });








module.exports = router;