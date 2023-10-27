import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.1em;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px 0;
`;

export const Link = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;
  text-decoration: none;
//   color: var(--heading-color-2);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &:first-child {
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-right: 24px;

    @media screen and (min-width: 768px) {
      font-size: 24px;
      margin-right: 34px;
    }
  }

  &:not(:first-child) {
    transition: transform var(--transition);

    &.active {
      color: #7fad39;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;
