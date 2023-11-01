import DropDownCategories from 'components/DropDownCategories/DropDownCategories';
import SearchForm from 'components/SearchForm/SearchForm';
import PhoneConectSupport from 'components/PhoneConectSupport/PhoneConnectSupport';
import { Container } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <Container>
        <DropDownCategories />
        <SearchForm />
        <PhoneConectSupport />
      </Container>
    </>
  );
};

export default Hero;
