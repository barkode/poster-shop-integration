import { FaEnvelope } from 'react-icons/fa';
import { TopHeaderLeftContainer, TopHeaderLeftItem } from './TopHeaderLeft.syled';

const TopHeaderLeft = () => {
  return (
    <>
      <TopHeaderLeftContainer>
        <TopHeaderLeftItem>
          <FaEnvelope />
          just-shop@gmail.com
        </TopHeaderLeftItem>
        <TopHeaderLeftItem>
          Безкоштовна доставка замовлень від 1000 грн
        </TopHeaderLeftItem>
      </TopHeaderLeftContainer>
    </>
  );
};

export default TopHeaderLeft;
