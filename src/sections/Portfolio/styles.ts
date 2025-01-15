import styled, { css } from 'styled-components';

import { device } from '../../styles/mediaQueries';

export const Wrapper = styled.div`
  overflow-y: hidden;
  background-color: #f8f9fa;

  @media ${device.mobileS} {
    padding: 0 2rem;
  }

  @media ${device.mobileM} {
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

export const Gallery = styled.div``;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const NavItemModifier = {
  selected: () => css`
    ::after {
      background-color: #f5df4e;
      bottom: -2px;
      content: ' ';
      display: block;
      height: 3px;
      left: 0;
      position: absolute;
      transform: translateY(-3px);
      width: 100%;
    }
  `,
};

export const NavItem = styled.div<{ selected?: boolean }>`
  color: #0006;
  padding: 0.6rem 1rem;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.5s ease;
  position: relative;

  ${({ selected }) => css`
    ${selected && NavItemModifier.selected()}
  `}

  :hover {
    color: #000;
  }
`;

// transforme os itens abaixo em elementos vazios div styled components
export const GalleryContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 3rem;

  flex-wrap: wrap;
  justify-content: center;
`;
export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  display: flex !important;
  left: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  transition: all 0.3s ease-in-out;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;

  svg {
    fill: #f5df4e;
    width: 3rem;
    height: 3rem;
  }
`;
export const ProjectBox = styled.div`
  position: relative;
  cursor: pointer;
  max-height: 30rem;
  overflow: hidden;

  :hover {
    ${Overlay} {
      opacity: 1;
    }
  }
`;

export const ProjectImage = styled.img`
  max-width: 30rem;
`;

export const Icon = styled.div``;
export const ProjectTitle = styled.h3`
  font-size: 2.1rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 0.5rem;
`;
export const Description = styled.p`
  color: #fff;
  font-size: 1.4rem;
`;
