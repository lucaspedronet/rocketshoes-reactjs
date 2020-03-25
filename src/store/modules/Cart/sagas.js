import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../servers/api';

import { addToCartSuccess } from './actions';

/**
 *
 * @generator* addToCart : generator é uma alternativa para async/await só que com mais poderes.
 */
function* addToCart({ id }) {
  /**
   * @function call: Uma maneira de realizar requisições, 1ª params ele recebe o tipo de request (GET, PUT..)
   * 2ª params passmos a URL.
   */
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
