import { all } from 'redux-saga/effects';
import searchPokemon from './searchPokemon.saga';

export default function* rootSaga() {
  yield all([
    searchPokemon,
  ]);
}
