import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: auto;

    button {
      display: flex;
      border: 0px;
      border-radius: 4px;
      padding: 12px 20px;
      color: #fff;
      background: #7159c1;
      text-transform: uppercase;
      opacity: background 0.2s;

      &:hover {
        background: ${darken(0.09, '#7159c1')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;
  margin-bottom: 10px;

  thead th {
    text-align: left;
    color: #999;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
    max-height: 100px;
    flex: 1;

    &:hover {
      border: 1px solid #7159c1;
    }
  }

  strong {
    font-size: 14px;
    color: #333;
    text-align: left;
    display: block;
  }

  span {
    font-size: 16px;
    font-weight: bolder;
    color: #111;
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: row;
    padding: 12px;
  }

  button {
    background: none;
    border: 0px;
    padding: 6px;
  }

  input {
    border: 1px solid #eee;
    padding: 6px;
    width: 50px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
