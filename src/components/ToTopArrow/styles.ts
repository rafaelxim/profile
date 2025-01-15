import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background-color: rgba(0, 0, 0, 0.2);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: white;
  }
`;
