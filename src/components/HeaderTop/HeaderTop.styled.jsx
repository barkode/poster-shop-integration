import { FiChevronDown } from 'react-icons/fi';
import styled from '@emotion/styled';

export const TopHeader = styled.div`
  background-color: #f3f4f6;
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;

export const TopHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    justify-content: center;
  }
`;

export const TopHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 991px) {
    justify-content: center;
    margin-top: 15px;
  }
`;

export const TopHeaderLeftItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    margin-right: 5px;
  }
`;

export const TopHeaderRightItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
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
  @include transition(all, .3s);

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
    opacity: .1;
    content: "";
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
