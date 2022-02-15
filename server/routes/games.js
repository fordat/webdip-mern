import express from 'express';

import { getGames, createGame } from '../controllers/games.js';

const router = express.Router();

router.get('/', getGames);
router.post('/', createGame);

export default router;