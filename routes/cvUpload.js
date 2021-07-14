var express = require("express");
var router = express.Router();
const axios = require("axios");
const { logger } = require("../lib/logger");

router.post("/", async function (req, res, next) {
  const requestUploader = req.body.uploader;

  if (!requestUploader) {
    return res.status(400).send("Missing uploader,description");
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const uploadedFile = req.files.uploaded;
  const originalFilename = uploadedFile.name;

  const params = {
    Bucket: cvS3BucketName,
    Key: getGuid(),
    Body: uploadedFile,
    Metadata: {
      OriginalFilename: originalFilename,
      Uploader: requestUploader,
    },
  };

  try {
    const result = await uploadAsync(params);
    res.sendStatus(200).send();
  } catch (err) {
    logger.error("Failed to uplaod CV");
    res.sendStatus(500, "Failed to upload CV").send();
  }
});

module.exports = router;
