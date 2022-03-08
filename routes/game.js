const express = require('express');
const router = express.Router();

const Game = require('../models/Game');
/**
 * Ruta get para obtener todos los juegos.
 *
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
/**TRAER TODOS LOS GAMES */
router.get('/', (req, res, next) =>{
    try {
        const data = Game.find();
        data
        .then(result => {
            res.json(result)
            /**INFORMACION A RENDERIZAR */
            const juegos = [];
            let juego = {
                idgame:"",
                progress:"",
                created:"",
                winner:"",
                jugadores:"",
                apuestas:""
            };

            // console.log(result)
            // console.log(result[0].id)
            // console.log(result[0].inProgress)
            // console.log(result[0].createdAt)
            // console.log(result[0].winner)
            // console.log(result[0].gamers[0].name)
            // console.log(result[0].gamers)
            result.forEach(item => {
                juego = {
                    idgame:item.id,
                    progress:item.inProgress,
                    created:item.createdAt,
                    winner:item.winner,
                    jugadores:item.gamers,
                    apuestas:Object.values(item.gamerBet)
                };
                juegos.push(juego);
            })
            console.log(juegos);
            // console.log(juegos[0].jugadores[1].name)
            // console.log(juegos[0].apuestas[1])
            res.render('game', { title: 'Taller NodeJS', juegos: juegos });
            // res.end();
        })
        .catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
});

/**
 * Ruta get para obtener un juego por su id.
 *
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
/**TRAER UN GAME POR SU ID */
router.get('/:id', (req, res, next) =>{
    try {
        const data = Game.find({"_id":req.params.id});
        data
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error')
    }
});

  module.exports = router;