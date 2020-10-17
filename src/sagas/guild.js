import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_STASH_HISTORY, FETCH_STASH_HISTORY_SUCCESS, FETCH_STASH_HISTORY_ERROR } from '../reducers/guild';

import { getStashHistory, getGuildProfile } from '../services/Guild';

function* fetchStashHistory() {
  const response = yield call(getStashHistory, { id: 119610 });
  const gresponse = yield call(getGuildProfile, { id: 119610 });
  console.log('getStashHistory', response);
  console.log('getGuildProfile', gresponse);
  if (response.status === 200) {
    yield put({ type: FETCH_STASH_HISTORY_SUCCESS, payload: response.data });
  } else {
    yield put({ type: FETCH_STASH_HISTORY_ERROR, payload: response });
  }
}

export default function* () {
  yield takeLatest(FETCH_STASH_HISTORY, fetchStashHistory);
}
