import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import Navigation from 'components/Navigation/Navigation';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites/BasketAndFavorites';
import { HeaderWrapper } from './Header.styled';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const Header = () => {
  return (
    <>
      <MobileMenu />
      
      <HeaderTop />
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <BasketAndFavorites />
      </HeaderWrapper>
      
    </>
  );
};

export default Header;
