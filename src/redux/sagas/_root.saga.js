import { all } from 'redux-saga/effects';
import searchPokemonSaga from './searchPokemon.saga';
import pokedexSaga from './pokedex.saga';

export default function* rootSaga() {
  yield all([
    searchPokemonSaga(),
    pokedexSaga(),
  ]);
}
