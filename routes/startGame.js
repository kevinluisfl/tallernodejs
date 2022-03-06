const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', (req, res, next) =>{
    res.json("start game");
  });

router.post('/', (req,res,next)=>{
    console.log(req.body);
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
})

  module.exports = router;