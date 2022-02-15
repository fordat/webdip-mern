import React from 'react';
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Game = ({ game }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div>
        <Typography variant="h6">{game.creator}</Typography>
        <Typography>{game.title}</Typography>
        <Typography variant="body2">{moment(game.createdAt).format('MM/DD/YYYY')}</Typography>
        <p>STATUS::</p>
      </div>
      {/* <div className={classes.overlay2}>
        <Button 
            style={{color: 'white'}} 
            size="small" 
            onClick={() => {console.log('poop')}}>
            <MoreHorizIcon fontSize="default" />
          </Button>        
      </div>
      <div className={classes.details}>
        <Typography variant="h5">{game.title}</Typography>
      </div> */}
    </Card>
  )
}

export default Game