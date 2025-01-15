import { TextField } from '@mui/material';
import styled from 'styled-components';

import { device } from '../../styles/mediaQueries';

export const CustomTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    // height: '3rem',
    // padding: '2rem 0',
    fontSize: '2rem',
    '::after': {
      borderBottom: '2px solid #000',
    },
  },
  '& .MuiFormLabel-root': {
    fontSize: '2rem',

    '&.Mui-focused': {
      color: '#000',
    },
  },
}));

export const Wrapper = styled.div`
  background-color: #f5df4e;
  overflow-y: hidden;

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

export const Grid = styled.div`
  display: grid;
  padding: 5rem 0;

  @media ${device.mobileM} {
    grid-template-columns: 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const CollumnLeft = styled.div`
  padding: 0 2rem;
  margin-bottom: 5rem;

  @media ${device.tablet} {
    margin-bottom: 0;
    grid-template-columns: 1fr 1fr;
  }
`;
export const CollumnRight = styled.div`
  padding: 0 2rem;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  line-height: 4.8rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const Paragraph = styled.p`
  font-size: 2.1rem;
`;

export const Subtitle = styled.h3`
  font-size: 2.1rem;
  font-weight: bold;
  margin-top: 2rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 2rem;
`;
