const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', (req, res, next) =>{
    res.json("start game");
  });

router.put('/:id', async (req,res,next)=>{
    console.log(req.body);
    try {
        const idgame = req.params.id;
        const game = await Game.findById(idgame);
        const bets = [];
        let betGamer = {};
        const min = 1;
        const max = 6;

        function generateRandom(min, max){
            return Math.floor((Math.random() * (max + 1 - min)) + min);
        }

        console.log(game.gamers)
        const gamersGame = game.gamers;
        gamersGame.forEach(gamer => {
            // console.log(gamer.name);
            // console.log(gamer._id);
            // console.log(generateRandom(min,max));
            betGamer[gamer._id] = generateRandom(min, max);
            bets.push(betGamer);
            console.log(bets);
        });

        game.set({ "gamerBet": bets[0], "inProgress": true});
        const result = await game.save();
        res.json(result);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
})

  module.exports = router;