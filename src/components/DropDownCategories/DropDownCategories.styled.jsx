import styled from '@emotion/styled';

export const ButtonDrop = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  background: var(--primary-color);
  color: var(--white-color);
  padding: 10px 25px 10px 40px;
  height: 52px;
  `;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: var(--white-color);
}
`;
export const DropdownMenu = styled.ul`
float: left;
  width: 100%;
  border: 1px solid var(--border);
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 12px;
`;

export const DropdownItem = styled.li`
  font-size: 16px;
  color: var(--normal-color);
  line-height: 39px;
  display: block;
`;
