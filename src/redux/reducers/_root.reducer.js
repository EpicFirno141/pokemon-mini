import { combineReducers } from 'redux';
import searchPokemon from './searchPokemon.reducer';
import searchPokemonInfo from './searchPokemonInfo.reducer';
import pokedex from './pokedex.reducer';

const rootReducer = combineReducers({
  searchPokemon,
  searchPokemonInfo,
  pokedex,
});

export default rootReducer;
