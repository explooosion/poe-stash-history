import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR } from '../reducers/account';

import { getCharacterByName, getCharacters } from '../services/Account';

function* fetchCharacters() {
  const response = yield call(getCharacterByName, { accountName: 'telluImsorry', character: '三月九日' });
  const nresponse = yield call(getCharacters, { accountName: 'telluImsorry' });
  console.log('getCharacterByName', response);
  console.log('getCharacters', nresponse);
  if (response.status === 200) {
    yield put({ type: FETCH_CHARACTERS_SUCCESS, payload: response });
  } else {
    yield put({ type: FETCH_CHARACTERS_ERROR, payload: response });
  }
}

export default function* () {
  yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
}
