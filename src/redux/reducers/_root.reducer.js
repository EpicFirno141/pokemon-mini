import { combineReducers } from 'redux';
import searchPokemon from './searchPokemon.reducer';
import searchPokemonInfo from './searchPokemonInfo.reducer';

const rootReducer = combineReducers({
  searchPokemon,
  searchPokemonInfo,
});

export default rootReducer;
