import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';

import { scrollToSection } from '../../helpers';
import * as S from './styles';

const ToTopArrow: React.FC = () => {
  return (
    <S.Wrapper onClick={() => scrollToSection('heading')}>
      <ArrowUpwardIcon fontSize="large" />
    </S.Wrapper>
  );
};

export default ToTopArrow;
