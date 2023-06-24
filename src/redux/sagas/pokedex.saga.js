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

function* pokedexSaga() {
  yield takeLatest('FETCH_POKEDEX', fetchPokedex);
}

export default pokedexSaga;