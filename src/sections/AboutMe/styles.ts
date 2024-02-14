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

export const Content = styled.div`
  transition: all 0.5s ease;
  padding: 10rem 0;
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

type DescriptionTitleProps = {
  isVisible?: boolean;
};

const DescriptionTitleModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
};

export const DescriptionTitle = styled.div<DescriptionTitleProps>`
  ${({ theme, isVisible }) => css`
    opacity: 0;
    transform: translateY(100px);
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 3.84rem;
    margin-bottom: 2rem;
    transition: all 0.8s ease;

    ${isVisible && DescriptionTitleModifier.isVisible()}

    > strong {
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `}
`;

type DescriptionTextProps = {
  isVisible?: boolean;
};

const DescriptionTextModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: translateX(0);
  `,
};

export const DescriptionText = styled.div<DescriptionTextProps>`
  ${({ isVisible }) => css`
    font-size: 2.1rem;
    font-weight: 400;
    line-height: 3.78rem;
    opacity: 0;
    transform: translateX(200px);
    transition: all 1.2s ease 0.3s;

    ${isVisible && DescriptionTextModifier.isVisible()}
  `}
`;

type ExperienceYearsProps = {
  isVisible?: boolean;
};

const ExperienceYearsModifier = {
  isVisible: () => css`
    opacity: 1;
    transform: scale(1);
  `,
};

export const ExperienceYears = styled.div<ExperienceYearsProps>`
  ${({ isVisible }) => css`
    flex: 1 1 33%;
    transform: scale(0);
    opacity: 0;
    transition: all 0.8s ease 0.5s;

    ${isVisible && ExperienceYearsModifier.isVisible()}
  `}
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
