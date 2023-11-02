import React from 'react';
import logo from '../../images/logo.jpg';
import { LogoWrapper } from './Logo.styled';

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
