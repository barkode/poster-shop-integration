import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MobileMenuWrapper, MobileContainer } from './MobileMenu.styled';
import MobileModal from 'components/MobileModal/MobileModal';

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <MobileContainer>
      <MobileMenuWrapper>
        <Logo />
        <FaBars onClick={toggleMobileMenu} />
      </MobileMenuWrapper>
      {isMobileMenuOpen && <MobileModal />}
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
