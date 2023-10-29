import React from 'react';

import { TopHeader, Container } from './HeaderTop.styled';
import TopHeaderLeft from './TopHeaderLeft';
import TopHeaderRight from './TopHeaderRight';
import Language from './LanguageSelect';
import AuthMenu from './AuthMenu';

function HeaderTop() {
  return (
    <TopHeader>
      <Container>
        <TopHeaderLeft />
        <TopHeaderRight />
        <Language />
        <AuthMenu />
      </Container>
    </TopHeader>
  );
}

export default HeaderTop;
