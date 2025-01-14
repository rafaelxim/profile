import styled, { css } from 'styled-components';

import { device } from '../../styles/mediaQueries';

type WrapperProps = {
  isOnTop: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isOnTop }) => css`
    background-color: ${isOnTop ? 'transparent' : '#fff'};
    border-bottom: ${isOnTop ? 'none' : '1px solid #efefef'}; ;
  `}
  height: 6.6rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 3;

  transition: all 0.3s ease;

  @media ${device.mobileS} {
    padding: 1rem 2rem;
  }

  @media ${device.mobileM} {
    padding: 2rem 5rem;
  }

  @media ${device.mobileL} {
    padding: 2rem 5rem;
  }

  @media ${device.tablet} {
    padding: 1rem 13rem;
  }
`;
export const Logo = styled.div`
  flex: 1;
  font-size: 3rem;
  font-weight: 700;
`;
export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const ContactIcon = styled.div``;
export const ContactNumber = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
`;
export const Toggler = styled.div``;
export const LogoImg = styled.img`
  max-height: 5rem;
`;
