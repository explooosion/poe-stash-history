import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_AUTH, FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR } from '../reducers/auth';

import { getSessionId } from '../services/Auth';

function* fetchAuth() {
  const response = yield call(getSessionId);
  if (response) {
    yield put({ type: FETCH_AUTH_SUCCESS, payload: response });
  } else {
    yield put({ type: FETCH_AUTH_ERROR, payload: response });
  }
}

export default function* () {
  yield takeLatest(FETCH_AUTH, fetchAuth);
}
