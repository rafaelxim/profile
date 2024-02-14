import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Wrapper isVisible={entry?.isIntersecting} ref={ref}>
      {children}
    </S.Wrapper>
  );
};

export default Title;
