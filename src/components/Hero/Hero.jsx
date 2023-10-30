import React from 'react';
import { Aside, Container } from './Hero.styled';

const Hero = () => {
  return (
    <Container>
      <Aside>
        <h1
          style={{
            color: 'var(--primary-color)',
          }}
        >
          Тут може бути ваша реклама
        </h1>
      </Aside>
      <div></div>
    </Container>
  );
};

export default Hero;
