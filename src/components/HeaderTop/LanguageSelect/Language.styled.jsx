import styled from '@emotion/styled';
import { FiChevronDown } from 'react-icons/fi';

export const LanguageContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LanguageIcon = styled.img`
  margin-right: 5px;
`;

export const LanguageList = styled.ul`
  list-style: none;
  margin: 10;
  padding: 10px;
  background: #222222;
  width: 120px;
  text-align: left;
  position: absolute;

  li {
    list-style: none;

    a {
      font-size: 14px;
      color: #ffffff;
      padding: 5px 10px;
    }
  }
`;

export const LanguageItem = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
`;

export const LanguageLink = styled.a`
  text-decoration: none;
  &:hover {
    color: var(--primary-color);
  }
`;

export const ArrowDownIcon = styled(FiChevronDown)`
  color: #252525;
  margin-left: 5px;
  vertical-align: middle;
  font-size: 20px;
  cursor: pointer;
`;

export const TopHeaderRightLanguage = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 40px;
  cursor: pointer;

  &:after {
    position: absolute;
    right: -21px;
    top: 1px;
    height: 20px;
    width: 1px;
    background: black;
    opacity: 0.1;
    content: '';
  }

  img {
    margin-right: 6px;
  }

  div {
    font-size: 14px;
    color: #ffffff;
    display: inline-block;
    margin-right: 4px;
  }

  span {
    font-size: 14px;
    color: #ffffff;
    position: relative;
    top: 2px;
  }
`;
