const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

router.get('/', function(req, res, next) {
    res.json("winner");
  });

router.get('/:id', async (req, res, next) =>{
    try {
        const idgame = req.params.id;
        const game = await Game.findById({"_id": idgame});
        Game.findById({"_id": idgame})
        .then(async (result) =>{
            const gamerBet = [result.gamerBet];
            const gamers = result.gamers;
            const bets = Object.values(gamerBet[0]);
            const maxDice = Math.max(...bets);
            const index = bets.indexOf(maxDice);
            const winner = gamers[index];
            res.json(winner)
            const updateGame = await game.set({"winner": winner, "inProgress": false}).save();
            console.log(updateGame);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
});

  module.exports = router;