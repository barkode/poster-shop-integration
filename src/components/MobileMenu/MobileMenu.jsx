import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileMenuWrapper, MobileContainer } from './MobileMenu.styled';

const MobileMenu = () => {
  return (
    <MobileContainer>
      <MobileMenuWrapper>
        <Logo />
        <FaBars />
      </MobileMenuWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <BasketAndFavorites />
      </div>
    </MobileContainer>
  );
};

export default MobileMenu;
