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