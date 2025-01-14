import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
};

const Button = ({ children, color = 'primary' }: Props) => {
  return <S.Wrapper color={color}>{children}</S.Wrapper>;
};

export default Button;
