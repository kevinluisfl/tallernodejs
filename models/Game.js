const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const GameSchema = new Schema(
    {
        gamers: [
            {
                id: Schema.ObjectId,
                name: String,
                trim: true,
                required: true
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