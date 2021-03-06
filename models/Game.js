const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/**
 * Schema del juego, con sus atributos correspondientes.
 *
 * @version 1.0.0 2022-03-06
 * @author Kevin Luis Florez Lozada.
 */
const GameSchema = new Schema(
    {
        type: {
            type: String
        },
        gamers: [
            {
                id: Schema.ObjectId,
                name: String,
            }
        ],
        inProgress: {
            type: Boolean,
            default: false
        },
        winner: {
            type: Object
        },
        gamerBet: {
            type: Object
        },
    },
    {timestamps: true}
);

GameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', GameSchema);