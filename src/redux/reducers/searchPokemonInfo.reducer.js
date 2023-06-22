const searchPokemonInfoReducer = (state = {
  dex_id: 0,
  name: '',
  image: '',
  types: []
}, action) => {
    switch (action.type) {
      case 'SET_POKEMON_SEARCH_INFO':
        return action.payload;
      default:
        return state;
    }
  };

export default searchPokemonInfoReducer;