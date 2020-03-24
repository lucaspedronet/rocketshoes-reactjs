import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
            <tr>
              <td>
                <img src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-masculino/10/NQQ-0375-010/NQQ-0375-010_zoom2.jpg?ts=1578564938&ims=326x" alt="Tênis"/>
              </td>
              <td>
                <strong>Tênis muito massa</strong>
                <span>R$ 129,00</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={2}/>
                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 258,00</strong>
              </td>
              <td>
                <button type="button" >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$ 1920,80</strong>
        </Total>
      </footer>
    </Container>
  );
}
