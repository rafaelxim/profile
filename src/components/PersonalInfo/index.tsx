import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

import * as S from './styles';

type Props = {
  description: string;
  value: string;
};

const PersonalInfo = ({ description, value }: Props) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.01,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Data isVisible={entry?.isIntersecting} ref={ref}>
      <S.DataDescription>{description}</S.DataDescription>
      <S.DataValue>{value}</S.DataValue>
    </S.Data>
  );
};

export default PersonalInfo;
