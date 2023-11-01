import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  MobileMenuWrapper,
  MobileContainer,
  BasketAndFavoritesWrapper,
} from './MobileMenu.styled';
import MobileModal from 'components/MobileModal/MobileModal';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <MobileContainer>
      <MobileMenuWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <FaBars
          onClick={toggleMobileMenu}
          style={{
            border: 'solid 1px var(--black-color)',
            padding: '0.3rem',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'var(--black-color)',
          }}
        />
      </MobileMenuWrapper>
      {isMobileMenuOpen && <MobileModal />}
      <BasketAndFavoritesWrapper>
        <BasketAndFavorites />
      </BasketAndFavoritesWrapper>
    </MobileContainer>
  );
};

export default MobileMenu;
