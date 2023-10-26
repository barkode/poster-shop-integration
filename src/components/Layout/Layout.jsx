import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderStyled, Link, Nav } from './Layout.styled';
import Logo from '../Logo/Logo';
import SearchForm from 'components/SearchForm/SearchForm';
import HeaderTop from 'components/HeaderTop/HeaderTop';

const Layout = () => {
  return (
    <>
      <HeaderTop />
      <HeaderStyled>
        <Container>
          <Nav>
            <Link to="/">
              <Logo />
            </Link>
            <SearchForm />
            <Link to="/">Головна</Link>
            <Link to="/categories">Категорії</Link>
            <Link to="/favorites">Улюблені</Link>
            <Link to="/shopping-card">Корзина</Link>
          </Nav>
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
