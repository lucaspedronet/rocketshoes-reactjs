/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {
  removeToCart,
  updateAmountRequest,
} from '../../store/modules/Cart/actions';

import { Container, ProductTable, Total } from './styles';
import { formatPrice } from '../../utils/format';

export default function Cart() {
  const dispatch = useDispatch();

  function increment(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  const cart = useSelector((state) =>
    state.Cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector((state) =>
    formatPrice(
      state.Cart.reduce((isTotal, product) => {
        return isTotal + product.price * product.amount;
      }, 0)
    )
  );

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={String(product.id)}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrement(product)}
                    disabled={product.amount <= 0}
                  >
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={20}
                    color="#7159c1"
                    onClick={() => dispatch(removeToCart(product.id))}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

Cart.propTypes = {
  cart: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number,
      // price: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      priceFormatter: PropTypes.string,
      amount: PropTypes.number,
      subtotal: PropTypes.string,
    }),
  }).isRequired,
  total: PropTypes.shape({}).isRequired,
  removeToCart: PropTypes.shape({}).isRequired,
  updateAmountRequest: PropTypes.shape({}).isRequired,
};
