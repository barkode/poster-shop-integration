import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px 0;
`;

export const Link = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;
  text-decoration: none;
  // color: var(--heading-color-2);
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #7fad39;
  }
`;
