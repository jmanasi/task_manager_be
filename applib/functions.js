const momentTimezone = require("moment-timezone");
const multer = require("multer");

const today = momentTimezone(new Date()).format(`DD-MM-YYYY_HH-mm-ss`);

//This can be used if You have any Files to be uploaded in the request
const getFileUploadConfig = multer({
  storage: multer.diskStorage({
    destination: process.env.LocalStorage,

    filename: function (_req, file, cb) {
      cb(null, `wwb_test_${today}_${file.originalname.replace(/ /g, "_")}`);
    },
  }),
  fileFilter: (_req, file, cb) => {
    cb(null, true);
  },
});

module.exports = getFileUploadConfig;
