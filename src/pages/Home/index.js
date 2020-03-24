import React, { Component } from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md'
import { formatPrice } from '../../utils/format'
import api from '../../servers/api'

export default class Home extends Component {

  state = {
    produtcs: []
  }

  async componentDidMount() {
    const response = await api.get(`products`);

    // ({}) força o retorno de um objeto
    const data = response.data.map(item => ({
      ...item,
      priceFormatted: formatPrice(item.price)
    }))

    this.setState({ produtcs: data })
  }
  render() {
    const { produtcs } = this.state;
    return (
      <ProductList>
      {
        produtcs.map(produt => (
          <li key={produt.id}>
            <img src={produt.image}
            alt={produt.title} />
            <strong>{produt.title}</strong>
            <span>{produt.priceFormatted}</span>
            <button type="button">
              <div>
                <MdAddShoppingCart color="#fff" size={16} /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))
      }
      </ProductList>
      )
  }
}
