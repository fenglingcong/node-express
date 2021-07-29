var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
var fs = require("fs");
let filePath = path.join(__dirname, './demo.txt');
var options = { encoding: "utf-8" };
fs.readFile(filePath, options, function(err, data) {
  if (err) {
    console.error("Error reading file!");
    return;
  }
  console.log(data);
  console.log(data.match(/x/gi).length + " letter X's");
});

console.log("demo World!");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express1' });
});

module.exports = router;
