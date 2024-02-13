import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 0 0.8rem;
    font-size: 1.6rem;
  `}
`;
