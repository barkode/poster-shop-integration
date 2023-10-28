import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyled } from './Layout.styled';

import SearchForm from 'components/SearchForm/SearchForm';

import Header from 'components/Header/Header';
import HeaderTop from 'components/HeaderTop';

const Layout = () => {
  return (
    <>
      <HeaderTop />
      <HeaderStyled>
        <Container>
          <Header />
          <SearchForm />
        </Container>
      </HeaderStyled>
      <div className="container">
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
