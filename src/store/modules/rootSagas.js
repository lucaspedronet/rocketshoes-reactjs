import { all } from 'redux-saga/effects';

import cart from './Cart/sagas';

export default function* rootSagas() {
  return yield all([cart]);
}
