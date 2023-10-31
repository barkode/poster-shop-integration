import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyled } from './Layout.styled';
import Header from 'components/Header/Header';
import HeaderTop from 'components/HeaderTop/HeaderTop';
import Footer from 'components/Footer/Footer';

const Layout = () => {
  return (
    <>
      <HeaderTop />
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
