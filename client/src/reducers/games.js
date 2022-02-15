const games = (games = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...games, action.payload];
    default:
      return games;
  }
}

export default games