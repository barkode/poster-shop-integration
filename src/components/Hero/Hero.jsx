import React from 'react';
import { Aside, Container } from './Hero.styled';
import ProductList from 'components/ProductList/ProductList';

import SideBar from 'components/SideBar/SideBar';

const Hero = () => {
  return (
    <Container>
      <Aside>
        <SideBar />
      </Aside>
      <div>
        <ProductList />
      </div>
    </Container>
  );
};

export default Hero;
