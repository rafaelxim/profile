import WhatsImg from '../../assets/whats-contact.png';
import * as S from './styles';

const WhatsCTA = () => {
  return (
    <S.Wrapper className="animate__animated animate__shakeX animate__repeat-3 animate__slower animate__delay-5s">
      <S.Img
        onClick={() => window.open('https://wa.me/5521975026768', '_blank')}
        src={WhatsImg}
        alt="CTA Whats"
      />
    </S.Wrapper>
  );
};

export default WhatsCTA;
