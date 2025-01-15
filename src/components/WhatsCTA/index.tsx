import WhatsImg from '../../assets/whats-contact.png';
import * as S from './styles';

const WhatsCTA = () => {
  return (
    <S.Wrapper>
      <S.Img
        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        src={WhatsImg}
        alt="CTA Whats"
      />
    </S.Wrapper>
  );
};

export default WhatsCTA;
