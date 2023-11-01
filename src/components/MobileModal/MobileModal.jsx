import { createPortal } from 'react-dom';
import { Overlay,NavModal } from './MobileModal.styled';
import { Link } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import LanguageSelect from 'components/HeaderTop/LanguageSelect';
import AuthMenu from 'components/HeaderTop/AuthMenu';
import TopHeaderRight from 'components/HeaderTop/TopHeaderRight';
import TopHeaderLeft from 'components/HeaderTop/TopHeaderLeft';

const modalRoot = document.getElementById('modal-root');

export const MobileModal = () => {
  return createPortal(
    <Overlay>
      {/* <p>Тут буде модалка для мобілки і планшета</p> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          // height: '100%',
        }}
      >
        <Logo />
        <BasketAndFavorites />
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <LanguageSelect />
          <AuthMenu />
        </div>
        <NavModal>
          <Link to="/">Головна</Link>
          <hr />
          <Link to="/products">Магазин</Link>
          <hr />
          <Link to="/categories">Категорії</Link>
          <hr />
          <Link to="/about">Про нас</Link>
          <hr />
          <Link to="/contact">Контакти</Link>
          <hr />
        </NavModal>
        <TopHeaderRight />
        <hr />
        <TopHeaderLeft />
      </div>
    </Overlay>,
    modalRoot
  );
};

export default MobileModal;
