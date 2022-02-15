import GameSchema from '../models/gameSchema.js';

export const getGames = async (req, res) => {
  try {
    const games = await GameSchema.find();

    console.log(games);
    res.status(200).json(games);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createGame = async (req, res) => {
  const game = req.body;

  const newGame = new GameSchema(game);

  try {
    await newGame.save();

    res.status(201).json(newGame);
    
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}; 