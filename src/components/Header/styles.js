import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: .2s;

  &:hover {
    opacity: 0.7
  }

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      display: block;
      color: #FFF;
      font-size: 14px;
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
`;
