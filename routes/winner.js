const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', function(req, res, next) {
    res.json("winner");
  });

router.get('/:id', function(req, res, next) {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
});

  module.exports = router;