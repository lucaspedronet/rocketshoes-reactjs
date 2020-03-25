import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';

import logoRocketShoes from '../../assets/images/logRocketshoes.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logoRocketShoes} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} items</span>
        </div>
        <MdShoppingBasket color="#FFF" size={36} />
      </Cart>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartSize: state.Cart.length,
});

export default connect(mapStateToProps)(Header);
