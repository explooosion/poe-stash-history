import { call, put, takeLatest } from 'redux-saga/effects';
import cheerio from 'cheerio';

import {
  FETCH_MY_ACCOUNT,
  FETCH_MY_ACCOUNT_SUCCESS,
  FETCH_MY_ACCOUNT_ERROR,
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,

  STORAGE_MY_ACCOUNT,
} from '../reducers/account';

import { getMyAccount, getCharacters, getItems } from '../services/Account';

import storage from '../boot/storage';

function* fetchMyAccount() {

  let flag = false;
  let payload = {};

  if (storage.hasIn(STORAGE_MY_ACCOUNT)) {
    flag = true;
    payload = storage.getItem(STORAGE_MY_ACCOUNT);
    console.log('fetchGuildProfile [Storage]', payload);
  } else {

    const responseId = yield call(getMyAccount);
    console.log('getMyAccount', responseId);

    if (responseId.status === 200) {
      const $ = cheerio.load(responseId.data);
      payload.accountName = $('.profile-details .name').text();
      flag = true;
      storage.setItem(STORAGE_MY_ACCOUNT, payload);
    }

  }

  if (flag) {
    yield put({ type: FETCH_MY_ACCOUNT_SUCCESS, payload });
  } else {
    yield put({ type: FETCH_MY_ACCOUNT_ERROR });
  }
}

function* fetchCharacters({ params }) {

  const { accountName } = params;

  let flag = false;
  let payload = {};

  const response = yield call(getCharacters, { accountName });
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

function* fetchItems({ params }) {

  const { accountName, character } = params;

  let flag = false;
  let payload = {};

  const response = yield call(getItems, { accountName, character });
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
  yield takeLatest(FETCH_MY_ACCOUNT, fetchMyAccount);
  yield takeLatest(FETCH_CHARACTERS, fetchCharacters);
  yield takeLatest(FETCH_ITEMS, fetchItems);
}
