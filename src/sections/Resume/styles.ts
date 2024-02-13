import styled, { css } from 'styled-components';

import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  background-color: #fff;

  @media ${device.mobileL} {
    padding: 0 5rem;
  }

  @media ${device.tablet} {
    padding: 0 13rem;
  }
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

export const JobGrid = styled.div`
  display: grid;
  gap: 0 5rem;
  margin-top: 2rem;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Job = styled.div`
  ${({ theme }) => css`
    border-left: 2px solid ${theme.colors.primary};
    padding: 2rem;
  `}
`;
export const JobTitle = styled.h3`
  font-size: 2.1rem;
  font-weight: 500;
  line-height: 2.52rem;
  margin-bottom: 0.8rem;
`;
export const JobSubtitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.88rem;
`;
export const JobDescription = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.88rem;
    color: ${theme.colors.text.grey};
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  `}
`;
