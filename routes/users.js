var express = require('express');
var router = express.Router();
const axios = require('axios');



router.get('/', function(req, res, next) {
  axios.get('https://www.reed.co.uk/api/1.0/search?keywords=junior-software&location=manchester&distancefromlocation=200', {
    auth: {
        username:'5fa4ff71-8456-4ed2-8558-ebe865ce35a0',
        password: "",
}})
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    res.send(error)
  })
  .then(function () {
    // always executed
  }); 
});

module.exports = router;
