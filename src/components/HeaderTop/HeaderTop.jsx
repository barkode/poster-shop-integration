import { Link } from 'react-router-dom';
import React from 'react';

import { FaUser } from 'react-icons/fa';

import { TopHeader, Container } from './HeaderTop.styled';
import TopHeaderLeft from './TopHeaderLeft';
import TopHeaderRight from './TopHeaderRight';
import Language from './Language';

function HeaderTop() {
  return (
    <TopHeader>
      <Container>
        <TopHeaderLeft />
        <TopHeaderRight />
        <Language />
        <FaUser />
        <Link to="#">Login</Link>/<Link to="#">Register</Link>
      </Container>
    </TopHeader>
  );
}

export default HeaderTop;
