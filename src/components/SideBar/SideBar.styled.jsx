import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  display: block;
  margin-bottom: 15px;
  text-decoration: none;
  color: var(--primary-text-color);
  font-size: 14px;
  font-weight: 500;
  transition: transform var(--transition);
  &:hover {
    color: var(--accent-color);
    transform: scale(1.05);
  }
  &.active {
    color: var(--accent-color);
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
