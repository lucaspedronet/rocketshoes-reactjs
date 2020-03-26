import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../servers/api';

import { formatPrice } from '../../../utils/format';
import { addToCartSuccess, updateAmount } from './actions';

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
    yield put(updateAmount(id, amount));
  } else {
    try {
      const response = yield call(api.get, `/products/${id}`);

      const data = {
        ...response.data,
        amount: 1,
        priceFormatter: formatPrice(response.data.price),
      };

      yield put(addToCartSuccess(data));
    } catch (error) {
      throw new Error(`Error ${error}`);
    }
  }
}

export default all([takeLatest('@Cart/ADD_REQUEST', addToCart)]);
