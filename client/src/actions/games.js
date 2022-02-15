import * as api from '../api';

export const getGames = () => async (dispatch) => {
  try {
    const { data } = await api.fetchGames();
    dispatch({type: 'FETCH_ALL', payload: data });

  } catch (error) {
    console.log(error.message);
  }
}

export const createGame = (game) => async (dispatch) => {
  try {
    const { data } = await api.createGame(game);

    dispatch({ type: 'CREATE', payload: data })
  } catch (error) {
    console.log(error);
  }
}