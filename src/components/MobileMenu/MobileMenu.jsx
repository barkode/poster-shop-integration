import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  BasketAndFavoritesWrapper,
  MobileContainer,
  MobileMenuWrapper,
  NavModal,
} from './MobileMenu.styled';
import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import LanguageSelect from 'components/HeaderTop/LanguageSelect';
import AuthMenu from 'components/HeaderTop/AuthMenu';
import TopHeaderRight from 'components/HeaderTop/TopHeaderRight';
import TopHeaderLeft from 'components/HeaderTop/TopHeaderLeft';

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <MobileContainer className="container">
        <MobileMenuWrapper>
          <Link to="/">
            <Logo />
          </Link>

          <FaBars
            onClick={toggleMobileMenu}
            style={{
              border: 'solid 1px var(--black-color)',
              padding: '0.3rem',
              fontSize: '2rem',
              cursor: 'pointer',
              color: 'var(--black-color)',
            }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          />
        </MobileMenuWrapper>
        <BasketAndFavoritesWrapper>
          <BasketAndFavorites />
        </BasketAndFavoritesWrapper>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header" data-bs-dismiss="offcanvas">
            <Link to="/">
              <Logo />
            </Link>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <BasketAndFavoritesWrapper>
              <BasketAndFavorites />
            </BasketAndFavoritesWrapper>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <LanguageSelect />
             <div data-bs-dismiss="offcanvas">
              
               <AuthMenu />
              </div>
            </div>
            <NavModal >
            <div data-bs-dismiss="offcanvas">
              <Link to="/" >Головна</Link>
              </div>
              <hr />
              <div data-bs-dismiss="offcanvas">
              
              <Link to="/products" >Магазин</Link>
              </div>
              <hr />
              <div data-bs-dismiss="offcanvas">
              
              <Link to="/categories" >Категорії</Link>
              </div>
              <hr />
              <div data-bs-dismiss="offcanvas">
              <Link to="/about" >Про нас</Link>
              </div>
              <hr />
              <div data-bs-dismiss="offcanvas">
              <Link to="/contact" >Контакти</Link>

              </div>
              <hr />
            </NavModal>
            <TopHeaderRight />
            <hr />
            <TopHeaderLeft />
          </div>
        </div>
      </MobileContainer>
    </>
  );
};

export default MobileMenu;
