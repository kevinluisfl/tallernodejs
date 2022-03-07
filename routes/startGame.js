const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Ruta put para asignar un resultado a cada jugador
 * usando una funcion para generar valores aleatorios.
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */

router.put('/:id', async (req,res,next)=>{
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

        const gamersGame = game.gamers;
        gamersGame.forEach(gamer => {
            betGamer[gamer._id] = generateRandom(min, max);
            bets.push(betGamer);
        });

        const result = await game.set({ "gamerBet": bets[0], "inProgress": true}).save();
        res.json(result);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
})

  module.exports = router;