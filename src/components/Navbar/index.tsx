import CallIcon from '@mui/icons-material/Call';
import React, { useEffect, useState } from 'react';

import * as S from './styles';

const Navbar = () => {
  const [scrollPosY, setScrollPosY] = useState<number>();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollPosY(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.Wrapper isOnTop={scrollPosY === 0 ? true : false}>
      <S.Logo>Rafael</S.Logo>
      <S.Contact>
        <CallIcon />
        <S.ContactNumber>(21) 97502-6768</S.ContactNumber>
      </S.Contact>
      <S.Toggler></S.Toggler>
    </S.Wrapper>
  );
};

export default Navbar;
