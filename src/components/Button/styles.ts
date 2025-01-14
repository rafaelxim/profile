import styled, { css } from 'styled-components';

type WrapperProps = {
  color: 'primary' | 'secondary';
};

const WrapperModifiers = {
  primary: () => css`
    background-color: #333;
  `,
  secondary: () => css`
    background-color: #f5df4e;
    color: #212529;

    &:hover {
      background-color: #f3d92c !important;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors.text.primary};
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.28rem 4.16rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;

    ${WrapperModifiers[color]?.()}
  `}
  &:hover {
    background-color: rgb(66, 70, 73);
  }
`;
