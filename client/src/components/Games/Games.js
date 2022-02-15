import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Game from './Game/Game';
import { mergeClasses } from '@material-ui/styles';

const Games = () => {
  const games = useSelector((state) => state.games);

  console.log(games);
  
  return (
    !games.length ? <CircularProgress /> : (
      <Grid className={mergeClasses.container} container alignItems="stretch" spacing={3}>
        {games.map((game) => (
          <Grid key={game._id} item xs={12} sm={6}>
            <Game game={game}/>
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Games