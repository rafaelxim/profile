import styled, { css } from 'styled-components';

type WrapperProps = {
  isVisible?: boolean;
};

const WrapperModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ isVisible }) => css`
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.8rem;
    margin-top: 1rem;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.5s ease;

    ${isVisible && WrapperModifier.isVisible()}
  `}
`;
