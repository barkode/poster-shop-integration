import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyled } from './Layout.styled';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Header />
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
