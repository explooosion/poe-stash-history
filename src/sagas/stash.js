import { call, put, delay, takeLatest } from 'redux-saga/effects';

import { FETCH_STASH_HISTORY, FETCH_STASH_HISTORY_SUCCESS, FETCH_STASH_HISTORY_ERROR } from '../reducers/stash';

import { getStash } from '../services/Stash';

function* fetchStash() {
  while (true) {
    yield delay(5000);
    const response = yield call(getStash);
    if (response.status === 200) {
      yield put({ type: FETCH_STASH_HISTORY_SUCCESS, payload: response.data });
    } else {
      yield put({ type: FETCH_STASH_HISTORY_ERROR, payload: response });
    }
  }
}

export default function* () {
  yield takeLatest(FETCH_STASH_HISTORY, fetchStash);
}
