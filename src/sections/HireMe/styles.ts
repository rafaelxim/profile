import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const Content = styled.div`
  padding: 0 2rem;
  min-height: 40rem;
  z-index: 2;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.8rem;
  margin-top: 1rem;
  color: #fff;
  margin-bottom: 4rem;
  text-align: center;
`;

export const Opacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #111418;
  opacity: 0.8;
  z-index: 1;
`;
