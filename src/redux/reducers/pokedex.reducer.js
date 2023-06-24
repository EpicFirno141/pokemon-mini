const pokedexReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_POKEDEX':
        return action.payload;
      default:
        return state;
    }
  };

export default pokedexReducer;