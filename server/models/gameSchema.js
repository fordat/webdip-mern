import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
  title: String,
  creator: String,
  turn: {
    season: String,
    year: Number,
  },
  territories: {
    Lon: String,
    Lvp: String,
    Edi: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

const GameSchema = mongoose.model('GameSchema', gameSchema);

export default GameSchema;