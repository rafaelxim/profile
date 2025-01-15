import styled, { css } from 'styled-components';

import { fadeInDown } from '../../styles/animations';
import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    overflow-y: hidden;

    @media ${device.mobileS} {
      padding: 2rem;
      gap: 4rem 0;
    }

    @media ${device.tablet} {
      padding: 0 13rem;
      gap: unset;
    }

    @media ${device.laptopM} {
      padding: unset;
      gap: unset;
    }

    @media ${device.laptopL} {
      padding: 0 13rem;
      gap: unset;
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media ${device.mobileS} {
    flex-direction: column;
    margin-top: 6.6rem;
    justify-content: flex-start;
    gap: 6rem 0;
  }

  @media ${device.tablet} {
    flex-direction: row;
    padding: 0 13rem;
    justify-content: center;
    gap: 0px 6rem;
  }

  @media ${device.desktop} {
    padding-top: 7rem;
  }
`;
export const DescriptionContainer = styled.div`
  .Typewriter {
    font-size: 7rem;
    font-weight: 600;
    text-transform: uppercase;

    @media ${device.mobileS} {
      font-size: 4rem;
      line-height: 5.52rem;
    }

    @media ${device.tablet} {
      font-size: 5rem;
      line-height: 13.52rem;
    }
  }

  @media ${device.mobileL} {
    text-align: center;
  }

  @media ${device.tablet} {
    text-align: left;
  }
`;

export const HeadingText = styled.h2`
  font-weight: 300;
  line-height: 1.3;
  font-size: 4.8rem;
  text-transform: uppercase;
  margin: 0;
`;

export const SubText = styled.p`
  font-size: 2.1rem;
  font-weight: 400;
  line-height: 3.78rem;
  margin-bottom: 1.6rem;
`;
export const Actions = styled.div`
  display: flex;
`;
export const ImageContaner = styled.div``;

export const RoundedBox = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: 50%;
    padding: 1.6rem;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.175) 0px 16px 48px 0px;

    @media ${device.mobileS} {
      width: 38rem;
      height: 38rem;
      padding: 0.6rem;
    }

    @media ${device.mobileL} {
      width: 40rem;
      height: 40rem;
      padding: 0.6rem;
    }

    @media ${device.tablet} {
      width: 42rem;
      height: 42rem;
      padding: 1.6rem;
    }
  `}
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

export const Link = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  padding: 1.28rem 4.16rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #333;

  :visited,
  :focus,
  :active {
    color: #333;
  }

  > svg {
    font-size: 2.5rem;
  }

  > span {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const IconContainer = styled.div`
  flex: 0;
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  > svg {
    animation: ${fadeInDown} 1s linear infinite;
    font-size: 3.5rem;
    cursor: pointer;
  }
`;
