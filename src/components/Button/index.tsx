import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  click?: () => void;
};

const Button = ({ children, color = 'primary', click }: Props) => {
  return (
    <S.Wrapper onClick={() => click && click()} color={color}>
      {children}
    </S.Wrapper>
  );
};

export default Button;
