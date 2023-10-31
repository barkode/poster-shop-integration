import styled from '@emotion/styled';

export const TopHeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // @media (max-width: 991px) {
  //   justify-content: center;
  //   margin-top: 15px;
  // }
`;



export const TopHeaderRightItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 16px;
 
  &:last-child {
    margin-right: 0;
  }
 
`;