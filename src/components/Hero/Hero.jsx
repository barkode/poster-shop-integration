import React from 'react';

import DropDownCategories from 'components/DropDownCategories/DropDownCategories';
import SearchForm from 'components/SearchForm/SearchForm';
import PhoneConectSupport from 'components/PhoneConectSupport/PhoneConnectSupport';
import { Container } from './Hero.styled';

const Hero = () => {
  return (
    <div className="row">
      <Container>
        <DropDownCategories />
        <SearchForm />
        <PhoneConectSupport />
      </Container>
    </div>
  );
};

export default Hero;
