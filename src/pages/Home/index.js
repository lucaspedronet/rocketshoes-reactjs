import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { MdAddShoppingCart } from 'react-icons/md';
import { addToCartResquest } from '../../store/modules/Cart/actions';

import { ProductList } from './styles';
import { formatPrice } from '../../utils/format';

import api from '../../servers/api';

export default function Home() {
  const [products, setProduct] = useState([]);

  const amount = useSelector((state) =>
    state.Cart.reduce((refAmount, product) => {
      refAmount[product.id] = product.amount;

      return refAmount;
    }, {})
  );

  useEffect(() => {
    async function loadingProducts() {
      const response = await api.get(`products`);

      // ({}) força o retorno de um objeto
      const data = response.data.map((item) => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      }));

      setProduct(data);
    }

    loadingProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addToCartResquest(id));
  }
  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button" onClick={() => handleAddToCart(product.id)}>
            <div>
              <MdAddShoppingCart color="#fff" size={16} />{' '}
              {amount[product.id] || 0}
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

Home.propTypes = {
  amount: PropTypes.shape({}).isRequired,
};
