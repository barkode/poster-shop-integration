import styled from '@emotion/styled';

export const TopHeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    justify-content: center;
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