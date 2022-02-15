import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Toolbar, Grid } from '@material-ui/core'; 
import { useDispatch } from 'react-redux';

import useStyles from './styles';

import Games from './components/Games/Games';
import Form from './components/Form/Form';
import { getGames } from './actions/games'

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.margin = 0;

    dispatch(getGames());
  }, [dispatch]);

  return (
    <div>
      <AppBar disablegutters="true" className={classes.appBar} color="primary" position="static">
        <Toolbar>
          <Typography className={classes.header} variant="h5">Webdip!!</Typography>
        </Toolbar>
      </AppBar>
      <Container maxwidth="lg">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing="3">
          <Grid item xs={12} sm={7}>
            <Games />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App;