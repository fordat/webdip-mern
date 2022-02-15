import React from 'react';
import { useSelector } from 'react-redux';

import Game from './Game/Game';

const Games = () => {
  const games = useSelector((state) => state.games);

  console.log(games);
  
  return (
    <div>
      <h1>GAMES</h1>
      <Game/>
      <Game/>
    </div>
  )
}

export default Games