import { FaAngleDown } from 'react-icons/fa';
import { SelectAllCategoriesStyled } from './SelectAllCategories.styled';

const SelectAllCategories = () => {
  return (
    <SelectAllCategoriesStyled>
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
    </SelectAllCategoriesStyled>
  );
};

export default SelectAllCategories;
