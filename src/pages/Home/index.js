import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/Cart/actions';

import { ProductList } from './styles';
import { formatPrice } from '../../utils/format';

import api from '../../servers/api';

function Home({ amount, addToCartResquest }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    console.tron.log(typeof amount);
    console.tron.log(typeof addToCartResquest);
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

  function handleAddToCart(id) {
    addToCartResquest(id);
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
  addToCartResquest: PropTypes.func.isRequired,
  amount: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  amount: state.Cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

/**
 *
 * @param {*} dispatch: responsável por dispara as actions
 * @function bindActionCreators: faz a combinação de todas as action de Cart para dispatch
 */
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
