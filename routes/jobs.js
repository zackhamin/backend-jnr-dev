var express = require("express");
var router = express.Router();
const axios = require("axios");
const { logger } = require("../lib/logger");
const { LOCATION, USERNAME, PASSWORD } = require("../lib/env-vars");

router.get("/", function (req, res, next) {
  const userName = USERNAME;
  const passWord = "";
  axios
    .get(
      `https://www.reed.co.uk/api/1.0/search?keywords=junior-software&location=manchester&distancefromlocation=200`,
      {
        auth: {
          username: "5fa4ff71-8456-4ed2-8558-ebe865ce35a0",
          password: "",
        },
      }
    )
    .then(result => {
      res.send(result.data);
    })
    .catch(err => {
      logger.error(`Error getting jobs from API , ${err}`);
      res.sendStatus(500, err).send();
    });
});

module.exports = router;
