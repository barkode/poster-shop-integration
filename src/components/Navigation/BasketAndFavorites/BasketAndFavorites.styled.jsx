import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderCartContainer = styled.div`
  text-align: right;
  padding: 24px 0;
`;

export const CartList = styled.ul`
  display: inline-block;
  margin-right: 25px;
`;

export const CartListItem = styled.li`
  list-style: none;
  display: inline-block;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CartLink = styled(Link)`
  position: relative;
`;

export const CartItemCount = styled.span`
  height: 13px;
  width: 13px;
  background: var(--primary-color);
  font-size: 10px;
  color: var(--white-color);
  line-height: 13px;
  text-align: center;
  font-weight: 700;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  right: -12px;
  z-index: -1;
`;

export const CartPrice = styled.div`
  font-size: 14px;
  color: #6f6f6f;
  display: inline-block;
`;

export const CartPriceValue = styled.span`
  color: var(--heading-color-2);
  font-weight: 700;
`;
