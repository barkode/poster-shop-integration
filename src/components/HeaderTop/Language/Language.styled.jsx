import { FiChevronDown } from 'react-icons/fi';
import styled from '@emotion/styled';

export const LanguageContainer = styled.div`
  position: relative;
  margin-right: 40px;
  cursor: pointer;
  display: flex;
`;

export const LanguageIcon = styled.img`
  margin-right: 5px;
`;

export const LanguageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  background: #222222;
  width: 100px;
  text-align: left;
  opacity: 0;
  visibility: hidden;
  @include transition(all, 0.3s);

  li {
    list-style: none;

    a {
      font-size: 14px;
      color: $white-color;
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

  &:hover {
    ${LanguageList} {
      top: 23px;
      opacity: 1;
      visibility: visible;
    }
  }

  &:after {
    position: absolute;
    right: -21px;
    top: 1px;
    height: 20px;
    width: 1px;
    background: $black-color;
    opacity: 0.1;
    content: '';
  }

  img {
    margin-right: 6px;
  }

  div {
    font-size: 14px;
    color: $normal-color;
    display: inline-block;
    margin-right: 4px;
  }

  span {
    font-size: 14px;
    color: $normal-color;
    position: relative;
    top: 2px;
  }
`;
