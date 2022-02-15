import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Toolbar, Grow, Grid } from '@material-ui/core'; 
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import Games from './components/Games/Games';
import Form from './components/Form/Form';
import { getGames } from './actions/games'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  return (
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} color="primary" position="static">
          <Toolbar>
            <Typography className={classes.header} variant="h3">Webdip!!</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Grid container justify="space between" alignItems="stretch" spacing="3">
            <Grid item xs={12} sm={7}>
              <Games />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Container>
  )
}

export default App;