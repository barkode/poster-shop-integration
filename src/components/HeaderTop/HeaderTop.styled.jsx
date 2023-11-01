import styled from '@emotion/styled';

export const TopHeader = styled.div`
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f4f6;
  // border: 1px solid red;

  @media screen and (min-width: 992px) {
    font-size: 16px;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 1170px;
  padding: 10px 15px;
  align-items: center;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

export const TopHeaderLeftFlex = styled.div`
  flex: 1;
`;
