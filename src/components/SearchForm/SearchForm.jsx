import React from 'react';
import { HeroSearchForm } from './SearchForm.styled';
import { FaAngleDown } from 'react-icons/fa';
import { Container } from 'components/Hero/Hero.styled';

const SearchForm = () => {
  return (
    <Container>
      <HeroSearchForm>
        <div className="hero__search__form">
          <form action="#">
            <div className="hero__search__categories">
              Всі категорії
              <FaAngleDown
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '14px',
                }}
              />
            </div>
            <input type="text" placeholder="What do you need?" />
            <button type="submit" className="site-btn">
              Пошук
            </button>
          </form>
        </div>
      </HeroSearchForm>
    </Container>
  );
};

export default SearchForm;
