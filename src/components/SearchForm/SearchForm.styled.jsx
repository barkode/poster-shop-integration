import styled from '@emotion/styled';

export const HeroSearchForm = styled.div`
  width: 610px;
  height: 50px;
  border: 1px solid var(--border);
  position: relative;
  float: left;

  form {
    .hero__search__categories {
      width: 30%;
      float: left;
      font-size: 16px;
      color: var(--normal-color);
      font-weight: 700;
      padding-left: 18px;
      padding-top: 11px;
      position: relative;

      &:after {
        position: absolute;
        right: 0;
        top: 14px;
        height: 20px;
        width: 1px;
        background: var(--black-color);
        opacity: 0.1;
        content: '';
      }

      span {
        position: absolute;
        right: 14px;
        top: 14px;
      }
      @media (max-width: 767px) {
        display: none;
      }
    }

    input {
      width: 70%;
      border: none;
      height: 48px;
      font-size: 16px;
      color: #b2b2b2;
      padding-left: 20px;

      &::placeholder {
        color: #b2b2b2;
      }
      @media (max-width: 767px) {
        width: 100%;
      }
    }

    button {
      position: absolute;
      right: 0;
      top: -1px;
      height: 50px;
    }
  }
`;
export const Container = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
`;
