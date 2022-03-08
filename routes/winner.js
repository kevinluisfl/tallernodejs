const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 *Ruta get para obtener la información del jugador ganador
 * con base en el resultado aleatorio más alto.
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
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
            res.render('winner', {title: 'Winner', winner: winner})
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