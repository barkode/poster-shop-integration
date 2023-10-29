import styled from '@emotion/styled';


export const Container = styled.div`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  // outline: 2px solid tomato;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }    

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const HeaderStyled = styled.header`
  border-bottom-width: 1px;
  // border-bottom-style: solid;
  // border-bottom-color: red;
`;



export const LogoAccent = styled.span`
  color: var(--hover-color);
`;