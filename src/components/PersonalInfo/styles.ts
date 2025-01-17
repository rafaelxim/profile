import styled, { css } from 'styled-components';

import { device } from '../../styles/mediaQueries';

type DataProps = {
  isVisible?: boolean;
};

const DataModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: translateX(0);
  `,
};

export const Data = styled.div<DataProps>`
  ${({ isVisible }) => css`
    opacity: 0;
    transform: translateX(130px);
    transition: all 1s ease;
    ${isVisible && DataModifier.isVisible()}
  `}

  @media ${device.mobileL} {
    flex: 1 0 50%;
  }
  @media ${device.tablet} {
    flex: unset;
  }
`;
export const DataDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.88rem;
    color: ${theme.colors.text.grey};
    margin-right: 2rem;
  `}
`;
export const DataValue = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.24rem;
`;
