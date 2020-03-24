import styled from 'styled-components';
import { darken } from 'polished'
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    /* Título */
    > strong {
      font-size: 14px;
      color: #111;
      font-family: Roboto;
    }

    /* Preço */
    > span {
      font-size: 21px;
      font-weight: bold;
      color: #111;
      margin: 5px 0 20px;
    }

    /* Butão */
    button {
      display: flex;
      flex-direction: row;
      border: 0px;
      border-radius: 4px;
      align-items: center;
      background: #7159c1;
      color: #FFF;
      margin-top: auto;
      opacity: background .2s;

      &:hover {
        background: ${darken(0.09, '#7159c1')}
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px;
        background: rgba(0,0,0, 0.1);

        > svg {
          margin-right: 5px;
        }

      }

      > span {
        flex: 1;
        text-align: center;
      }
    }


  }
`;
