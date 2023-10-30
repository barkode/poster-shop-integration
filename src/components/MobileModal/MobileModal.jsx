import { createPortal } from 'react-dom';
import { Overlay } from './MobileModal.styled';
import Logo from 'components/Logo/Logo';
import BasketAndFavorites from 'components/Navigation/BasketAndFavorites';
import LanguageSelect from 'components/HeaderTop/LanguageSelect';
import AuthMenu from 'components/HeaderTop/AuthMenu';
import Navigation from 'components/Navigation/Navigation';
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
        }}
      >
        <Logo />
        <BasketAndFavorites />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <LanguageSelect />
          <AuthMenu />
        </div>

        <Navigation />
        <TopHeaderRight />
        <TopHeaderLeft />
      </div>
    </Overlay>,
    modalRoot
  );
};

export default MobileModal;
