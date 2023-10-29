import styled from '@emotion/styled';

export const ButtonDrop = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background: var(--primary-color);
  color: var(--white-color);
  padding: 10px 25px 10px 40px;
  border-radius: 0;
  border: none;
  outline: none;

  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--white-color);
}
`;
