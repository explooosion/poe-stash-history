import { all } from 'redux-saga/effects';

const sagas = [
  // 'example',
  'auth',
  'stash',
];

const Sagas = sagas.map(saga => require(`./${saga}`).default());

export default function* rootSaga() {
  yield all(Sagas);
}
