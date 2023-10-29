import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {
  ButtonDrop,
  Span,
  DropdownMenu,
  DropdownItem,
} from './DropDownCategories.styled';

const DropDownCategories = () => {
  return (
    <div className="dropdown">
      <ButtonDrop
        className="toggle-btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="true"
      >
        <FaBars />
        <Span>Всі відділи</Span>
      </ButtonDrop>

      <DropdownMenu className="dropdown-menu">
        <DropdownItem className="dropdown-item">
          <Link to="/fresh-meat">Fresh Meat</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/vegetables">Vegetables</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/fruit-nut-gifts">Fruit & Nut Gifts</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/fresh-berries">Fresh Berries</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/ocean-foods">Ocean Foods</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/butter-eggs">Butter & Eggs</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/fastfood">Fastfood</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/fresh-onion">Fresh Onion</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/papayaya-crisps">Papayaya & Crisps</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/oatmeal">Oatmeal</Link>
        </DropdownItem>
        <DropdownItem className="dropdown-item">
          <Link to="/fresh-bananas">Fresh Bananas</Link>
        </DropdownItem>
      </DropdownMenu>
    </div>
  );
};

export default DropDownCategories;
