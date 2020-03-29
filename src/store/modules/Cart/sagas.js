import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../servers/api';
import history from '../../../servers/history';

import { formatPrice } from '../../../utils/format';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select((state) =>
    state.Cart.find((p) => p.id === id)
  );

  let stockAmount;
  let currentAmount;
  let amount;

  try {
    const stock = yield call(api.get, `/stock/${id}`);

    stockAmount = stock.data.amount;
    currentAmount = productExists ? productExists.amount : 0;

    amount = currentAmount + 1;
  } catch (error) {
    throw new Error(`Internal server: ${error}`);
  }

  if (amount > stockAmount) {
    toast.error(`Quantidade indisponível, apenas ${stockAmount} em estoque!`);
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    try {
      const response = yield call(api.get, `/products/${id}`);

      const data = {
        ...response.data,
        amount: 1,
        priceFormatter: formatPrice(response.data.price),
      };

      yield put(addToCartSuccess(data));

      history.push('/cart');
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
}

function* updateAmount({ id, amount }) {
  if (Number(amount) <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  // const currentAmount = amount + 1;

  if (amount > stockAmount) {
    toast.warn(`Quantidade indisponível, apenas ${stockAmount} em estoque!`);
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}
export default all([
  takeLatest('@Cart/ADD_REQUEST', addToCart),
  takeLatest('@Cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
