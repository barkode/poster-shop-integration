import styled from '@emotion/styled';

export const MobileMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: var(--primary-color);
`;

export const BasketAndFavoritesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileContainer = styled.div`
  @media screen and (min-width: 992px) {
    display: none;
  }
`;
