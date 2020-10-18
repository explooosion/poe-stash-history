import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from '../reducers/account';

import { getCharacters, getItems } from '../services/Account';

function* fetchCharacters() {

  let flag = false;
  let payload = {};

  const response = yield call(getCharacters, { accountName: 'telluImsorry' });
  console.log('getCharacters', response);

  if (response.status === 200) {
    flag = true;
    payload = response.data;
  }

  if (flag) {
    yield put({ type: FETCH_CHARACTERS_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_CHARACTERS_ERROR, payload: response });
  }
}

function* fetchItems() {

  let flag = false;
  let payload = {};

  const response = yield call(getItems, { accountName: 'EatMyDown', character: "裸奔妹妹的肉壁黏糊" });
  console.log('getItems', response);

  if (response.status === 200) {
    flag = true;
    payload = response.data;
  }

  if (flag) {
    yield put({ type: FETCH_ITEMS_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_ITEMS_ERROR });
  }
}

export default function* () {
  yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
  yield takeLatest(FETCH_ITEMS, fetchItems);
}
