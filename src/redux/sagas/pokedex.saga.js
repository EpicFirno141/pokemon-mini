import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchPokedex() {
  try {
    const response = yield axios.get(`/api/pokedex`);

    yield put({ type: 'SET_POKEDEX', payload: response.data });
  } catch(err){
    console.log('GET Request to pokedex table failed: ' + err);
  }
}

function* addSearchPokemon(action){
    try{
        yield axios.post('/api/pokedex', action.payload);
  
        yield put({ type: 'FETCH_POKEDEX' });
    } catch (error) {
        console.log('POST request to pokedex table error: ', error);
    }
  }

function* pokedexSaga() {
  yield takeLatest('FETCH_POKEDEX', fetchPokedex);
  yield takeLatest('ADD_TO_POKEDEX', addSearchPokemon);
}

export default pokedexSaga;