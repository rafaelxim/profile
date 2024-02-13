import { keyframes } from 'styled-components';

export const fadeInDown = keyframes`
  from {
    transform: translateY(-3rem);
    opacity: 0;
  }

  to {
    transform: translateY(0rem);
    opacity: 1;
  }
`;
