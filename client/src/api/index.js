import axios from 'axios';

const url = 'http://localhost:5000/games';

export const fetchGames = () => axios.get(url);