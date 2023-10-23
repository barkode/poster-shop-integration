import {SearchFormContainer} from "./SearchForm.styled";

const SearchForm = () => {
    return (
      <SearchFormContainer>
        <select>
          <option value="all">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <input type="text" placeholder="What do you need?" />
        <button type="submit">Пошук</button>
      </SearchFormContainer>
    );
  };
  
  export default SearchForm;
