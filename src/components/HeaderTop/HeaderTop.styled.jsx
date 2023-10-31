import styled from '@emotion/styled';

export const TopHeader = styled.div`
  font-size: 14px;
  justify-content: space-between;
  background-color: #f3f4f6;
  // border: 1px solid red;
  @media (max-width: 991px) {
    display: none;
  }
  `;
  
  export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  gap: 40px;
  justify-content: space-between;
`;

export const TopHeaderLeftFlex = styled.div`
  flex: 1;
`;
