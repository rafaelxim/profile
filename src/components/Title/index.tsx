import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Title;
