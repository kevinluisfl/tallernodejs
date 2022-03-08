const express = require('express');
const router = express.Router();

const Game = require('../models/Game');

/**
 * Ruta get para mostrar la vista donde esta el formulario.
 * se renderiza la view index.pug
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
router.get('/', (req, res, next) =>{
    res.render('index', { title: 'Taller NodeJS' });
    res.end();
  });

/**
 * Ruta post para crear un juego nuevo
 * son los nombres de los jugadores.
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
router.post('/', (req,res,next)=>{
    try {
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