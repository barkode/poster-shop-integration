import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ButtonDrop, Span } from './DropDownCategories.styled';

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
        <Span>All departments</Span>
      </ButtonDrop>

      <ul className="dropdown-menu">
        <li className="dropdown-item">
          <Link to="/fresh-meat">Fresh Meat</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/vegetables">Vegetables</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/fruit-nut-gifts">Fruit & Nut Gifts</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/fresh-berries">Fresh Berries</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/ocean-foods">Ocean Foods</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/butter-eggs">Butter & Eggs</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/fastfood">Fastfood</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/fresh-onion">Fresh Onion</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/papayaya-crisps">Papayaya & Crisps</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/oatmeal">Oatmeal</Link>
        </li>
        <li className="dropdown-item">
          <Link to="/fresh-bananas">Fresh Bananas</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownCategories;
