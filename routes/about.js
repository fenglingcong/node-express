var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource about');
});

router.get('/aa', function(req, res, next) {
  res.json({ data: 'about about about' });
});

module.exports = router;
