import WhatsImg from '../../assets/whats-contact.png';
import { gtag_report_conversion } from '../../helpers';
import * as S from './styles';

const WhatsCTA = () => {
  const handleClick = () => {
    gtag_report_conversion();
    window.open('https://wa.me/5521975026768', '_blank');
  };

  return (
    <S.Wrapper className="animate__animated animate__shakeX animate__repeat-3 animate__slower animate__delay-5s">
      <S.Img onClick={() => handleClick()} src={WhatsImg} alt="CTA Whats" />
    </S.Wrapper>
  );
};

export default WhatsCTA;
