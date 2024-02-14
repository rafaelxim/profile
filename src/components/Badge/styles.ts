import styled, { css } from 'styled-components';

type WrapperProps = {
  isVisible?: boolean;
};

const WrapperModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: translateX(0);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isVisible }) => css`
    background-color: ${theme.colors.primary};
    padding: 0 0.8rem;
    font-size: 1.6rem;
    opacity: 0;
    transform: translateX(100px);
    transition: all 0.2s ease;
    ${isVisible && WrapperModifier.isVisible()}
  `}
`;
