import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import * as S from './styles';

const AboutMe = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.4,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Wrapper ref={ref}>
      <S.Content isVisible={entry?.isIntersecting}>
        <S.Heading>
          <Badge>Sobre Mim</Badge>
          <Title>Me conheça melhor</Title>
        </S.Heading>
        <S.Experience>
          <S.Description>
            <S.DescriptionTitle>
              Olá, eu sou <strong>Rafael Herculano</strong>
            </S.DescriptionTitle>
            <S.DescriptionText>
              Sou um desenvolvedor com paixão pelo design web. Gosto de criar sites
              simples, limpos e elegantes que oferecem valor real ao usuário. Diversos
              clientes obtiveram resultados excepcionais ao trabalhar comigo. Entregar
              trabalho dentro do prazo e do orçamento, que atenda aos requisitos do
              cliente, é meu lema.
            </S.DescriptionText>
          </S.Description>
          <S.ExperienceYears>
            <S.ExperienceBox>
              <S.CircularBackground />
              <S.ExperienceNumber>10</S.ExperienceNumber>
            </S.ExperienceBox>
            <S.ExperienceText>Anos de Experiência</S.ExperienceText>
          </S.ExperienceYears>
        </S.Experience>
        <S.InfoData>
          <S.Data>
            <S.DataDescription>Nome:</S.DataDescription>
            <S.DataValue>Rafael Herculano</S.DataValue>
          </S.Data>
          <S.Data>
            <S.DataDescription>Email:</S.DataDescription>
            <S.DataValue>rafa.lj@hotmail.com</S.DataValue>
          </S.Data>
          <S.Data>
            <S.DataDescription>Nascimento:</S.DataDescription>
            <S.DataValue>29 de outubro</S.DataValue>
          </S.Data>
          <S.Data>
            <S.DataDescription>Natural de:</S.DataDescription>
            <S.DataValue>Rio de Janeiro, Brasil</S.DataValue>
          </S.Data>
        </S.InfoData>
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
