var express = require('express');
var router = express.Router();
var products = require('../json_data/projects.json');

/* GET home page. */
router.get('/json_projects', function(req, res, next) {
  res.send(products);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;
