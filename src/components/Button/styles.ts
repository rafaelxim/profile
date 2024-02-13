import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.text.primary};
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
    padding: 1.28rem 4.16rem;
    text-align: center;
    cursor: pointer;
  `}
  &:hover {
    background-color: rgb(66, 70, 73);
  }
`;
