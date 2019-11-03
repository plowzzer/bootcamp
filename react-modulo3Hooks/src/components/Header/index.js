import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          {cartSize === 0 && <span>Carrinho vazio</span>}
          {cartSize === 1 && <span>{cartSize} item</span>}
          {cartSize > 1 && <span>{cartSize} itens</span>}
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
