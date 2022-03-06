const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', (req, res, next) =>{
    res.render('index', { title: 'Taller NodeJS' });
  });

router.post('/', (req,res,next)=>{
    console.log(req.body.player);
    try {
        // const game = new Game({
        //     gamers: req.body.player
        // })
        // game.save()
        const {player} = req.body;
        const gamers =[
            {name:player[0]},
            {name:player[1]},
            {name:player[2]}]
        Game.create({gamers})
        .then(result => res.json(result))
        .catch(err => res.json(err));
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
})

  module.exports = router;