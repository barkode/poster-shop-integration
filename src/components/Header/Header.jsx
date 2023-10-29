import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
// import HeaderTop from 'components/HeaderTop/HeaderTop';
import Navigation from 'components/Navigation/Navigation';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites/BasketAndFavorites';
import { HeaderWrapper } from './Header.styled';
import DropDownCategories from 'components/DropDownCategories/DropDownCategories';
import { DropDownWrapper } from './Header.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import PhoneConectSupport from 'components/PhoneConectSupport/PhoneConnectSupport';

const Header = () => {
  return (
    <>
      {/* <HeaderTop /> */}
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <BasketAndFavorites />
      </HeaderWrapper>
      <DropDownWrapper>
        <DropDownCategories />
        <SearchForm />
        <PhoneConectSupport />
      </DropDownWrapper>
    </>
  );
};

export default Header;
