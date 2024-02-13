import styled, { css } from 'styled-components';

import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};

    @media ${device.mobileL} {
      padding: 0 5rem;
    }

    @media ${device.tablet} {
      padding: 0 13rem;
    }
  `}
`;

type ContentProps = {
  isVisible?: boolean;
};

const ContentModifiers = {
  isVisible: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
};

export const Content = styled.div<ContentProps>`
  opacity: 0;
  transform: translateY(100px);
  transition: all 0.5s ease;
  ${({ isVisible }) => css`
    padding: 10rem 0;
    ${isVisible && ContentModifiers.isVisible()}
  `}
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServicesGrid = styled.div`
  display: grid;
  margin-top: 6rem;
  gap: 4rem;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Service = styled.div`
  text-align: center;

  > svg {
    ${({ theme }) => css`
      color: ${theme.colors.primary};
      font-size: 4.8rem;
    `}
  }
`;
export const ServiceTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 2.88rem;
  margin: 1.5rem 0;
`;

export const ServiceDescription = styled.p`
  ${({ theme }) => css`
    font-weight: 400;
    line-height: 2.88rem;
    color: ${theme.colors.text.grey};
    font-size: 1.6rem;
  `}
`;
