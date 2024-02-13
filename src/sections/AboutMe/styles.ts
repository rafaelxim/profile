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
  margin-bottom: 5rem;
`;
export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.8rem;
  margin-top: 1rem;
`;

export const Experience = styled.div`
  display: flex;

  @media ${device.mobileL} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
export const Description = styled.div`
  flex: 1 1 66%;
`;
export const DescriptionTitle = styled.div`
  ${({ theme }) => css`
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 3.84rem;
    margin-bottom: 2rem;

    > strong {
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `}
`;
export const DescriptionText = styled.div`
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 3.78rem;
`;
export const ExperienceYears = styled.div`
  flex: 1 1 33%;
`;
export const ExperienceNumber = styled.div`
  color: #4c4d4d;
  font-size: 14.4rem;
  font-weight: 500;
  line-height: 18.72rem;
  position: relative;
  text-align: center;
`;
export const ExperienceText = styled.div`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: 3.36rem;
`;
export const ExperienceBox = styled.div`
  position: relative;
`;

export const CircularBackground = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;

export const InfoData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;

  @media ${device.mobileL} {
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    flex-wrap: nowrap;
  }
`;
export const Data = styled.div`
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
  `}
`;
export const DataValue = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 3.24rem;
`;
