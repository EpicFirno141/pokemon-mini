import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPokemonInfo(action) {
  try {
    console.log('Starting API Call');

    const response = yield axios.get(`https://pokeapi.co/api/v2/pokemon/${action.payload}`);

    console.log('Response is: ' + JSON.stringify(response.data.sprites));

    yield put({ type: 'SET_POKEMON_SEARCH_INFO', payload: {
        dex_id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.front_default,
        types: response.data.types
    } });
  } catch (error) {
      console.log('PokeAPI GET request error: ', error);
  }
}

function* searchPokemonSaga() {
  yield takeLatest('SEARCH_POKEMON', fetchPokemonInfo);
}

export default searchPokemonSaga;