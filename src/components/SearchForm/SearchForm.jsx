import React from 'react';
import { HeroSearchForm } from './SearchForm.styled';
import { Container } from 'components/Hero/Hero.styled';
import SelectAllCategories from './SelectAllCategories/SelectAllCategories';

const SearchForm = () => {
  return (
    <Container>
      <HeroSearchForm>
        <div className="hero__search__form">
          <form action="#">
            <SelectAllCategories />
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
