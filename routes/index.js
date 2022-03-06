const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    msg:"bye cruel world"
  })
  // res.render('index', { title: 'Taller NodeJS' });
});

module.exports = router;
