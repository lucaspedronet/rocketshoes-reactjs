import React from 'react';
import { Link }from 'react-router-dom'
import { MdShoppingBasket } from 'react-icons/md'

import { Container, Cart} from './styles';
import logoRocketShoes from '../../assets/images/logRocketshoes.svg'

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoRocketShoes} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho
          </strong>
          <span>3 items</span>
        </div>
        <MdShoppingBasket color="#FFF" size={36} />
      </Cart>

    </Container>
  );
}
