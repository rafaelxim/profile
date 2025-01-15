import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  href?: string;
};

const Button = ({ children, color = 'primary', href }: Props) => {
  return (
    <S.Link href={href}>
      <S.Wrapper color={color}>{children}</S.Wrapper>
    </S.Link>
  );
};

export default Button;
