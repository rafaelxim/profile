import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import React from 'react';
import Typewriter from 'typewriter-effect';

import FaceImg from '../../assets/face.jpg';
import Button from '../../components/Button';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.DescriptionContainer>
          <S.HeadingText>Olá, sou Rafael</S.HeadingText>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Desenvolvedor')
                .pauseFor(1500)
                .deleteAll()
                .typeString('Front-End')
                .pauseFor(1500)
                .start();
            }}
            options={{ loop: true }}
          />
          <S.SubText>do Rio de Janeiro, Brasil</S.SubText>
          <S.Actions>
            <Button>Ver meus trabalhos</Button>
            <S.Link>
              <span>Contato</span>
              <ArrowCircleDownIcon />
            </S.Link>
          </S.Actions>
        </S.DescriptionContainer>
        <S.ImageContaner>
          <S.RoundedBox>
            <S.Image src={FaceImg} />
          </S.RoundedBox>
        </S.ImageContaner>
      </S.Container>
      <S.IconContainer>
        <ArrowDownwardIcon />
      </S.IconContainer>
    </S.Wrapper>
  );
};

export default Header;
