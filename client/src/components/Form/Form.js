import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createGame } from '../../actions/games';

const Form = () => {
  const [gameData, setGameData] = useState({
    creator: '',
    title: '',
    turn: {
      season: '',
      year: 0,
    },
    territories: {
      Lon: '',
      Lvp: '',
      Edi: '',
    },
  });

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('poop');

    dispatch(createGame(gameData));
  }

  return (
    <Paper>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Orders</Typography>
          
          <TextField 
            variant="outlined"
            label="Creator"
            fullWidth
            value={gameData.creator}
            onChange={(e) => setGameData({ ...gameData, creator: e.target.value })}
          />

          <TextField 
            variant="outlined"
            label="Title"
            fullWidth
            value={gameData.title}
            onChange={(e) => setGameData({ ...gameData, title: e.target.value })}
          />  

          <Button className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>
            Submit
          </Button>
          {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}

        </form>
    </Paper>  
  )
}

export default Form