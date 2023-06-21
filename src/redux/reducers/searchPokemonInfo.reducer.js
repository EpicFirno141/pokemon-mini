const searchPokemonInfoReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_POKEMON_SEARCH_INFO':
        return action.payload;
      default:
        return state;
    }
  };

export default searchPokemonInfoReducer;