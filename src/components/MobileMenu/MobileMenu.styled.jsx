import styled from '@emotion/styled';

export const MobileMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  padding: 10px 10px 10px 10px;
  // background-color: var(--primary-color);
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

export const NavModal = styled.nav`
  display: flex;
  flex-direction: column;

  margin: 10px 0;
  a {
    text-decoration: none;
    color: var(--black-color);
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 250ms linear;
  }
  hr {
    width: 100%;
    border: 1px solid var(--black-color);
    margin: 10px;
    margin-block-start: 0;
    margin-block-end: 1.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
`;
