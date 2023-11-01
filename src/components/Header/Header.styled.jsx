import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  max-width: 1170px;
  padding: 0px 15px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  // border: 1px solid red;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
