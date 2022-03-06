const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

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
            type: [{}]
        },
    },
    {timestamps: true}
);

GameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', GameSchema);