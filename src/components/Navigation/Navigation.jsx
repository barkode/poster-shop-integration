import React from 'react';
import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <Nav>
        <Link to="/">Головна</Link>
        <Link to="/products">Магазин</Link>
        <Link to="/categories">Категорії</Link>
        <Link to="/about">Про нас</Link>
        <Link to="/contact">Контакти</Link>
      </Nav>
    </>
  );
};

export default Navigation;
