import styled from '@emotion/styled';

export const Overlay = styled.div`
  font-size: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 40vw;
  height: 100vh;
  padding: 15px;
  border-right: 1px solid #000;
  background-color: #fff;
  opacity: 1;
  transition: all 500ms linear;
  transform: translateX(0);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
