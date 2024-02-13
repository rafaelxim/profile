import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import * as S from './styles';

const RESUME = [
  {
    id: 1,
    title: 'Graduação | Análise de Sistemas',
    subtitle: 'Faculdades FIJ / 2010 - 2014',
    description: 'Curso de graduação completo em Análise de Desenvolvimento de Sistemas.',
  },
  {
    id: 2,
    title: 'Analista de Suporte',
    subtitle: 'Atos / 2016',
    description: 'Atividades de suporte ao usuário e manutenção de computadores.',
  },
  {
    id: 3,
    title: 'Desenvolvedor Front-End Jr.',
    subtitle: 'F71 Tecnologia / 2016 - 2017',
    description:
      'Criação e manutenção de interfaces de usuário interativas e responsivas usando HTML, CSS e JavaScript.',
  },
  {
    id: 4,
    title: 'Desenvolvedor Front-End Pleno',
    subtitle: 'PSBI Consultoria / 2017 - 2018',
    description:
      'Responsável por projetar, implementar e otimizar interfaces de usuário complexas e dinâmicas.',
  },
  {
    id: 5,
    title: 'Desenvolvedor Front-End Pleno',
    subtitle: 'Banco do Brasil Tecnologia / 2018 - 2019',
    description:
      'Responsável por projetar, implementar e otimizar interfaces de usuário complexas e dinâmicas.',
  },
  {
    id: 6,
    title: 'Desenvolvedor Front-End Sênior',
    subtitle: 'ALLOS / 2019 - 2024',
    description:
      'Desenvolvimento de interfaces de usuário altamente sofisticadas e escaláveis, aplicando profundo conhecimento em tecnologias front-end.',
  },
];

const Resume = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.4,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Wrapper ref={ref}>
      <S.Content isVisible={entry?.isIntersecting}>
        <S.Heading>
          <Badge>Meu Currículo</Badge>
          <Title>Um resumo da minha carreira</Title>
        </S.Heading>

        <S.JobGrid>
          {RESUME.map((r) => {
            return (
              <S.Job key={r.id}>
                <S.JobTitle>{r.title}</S.JobTitle>
                <S.JobSubtitle>{r.subtitle}</S.JobSubtitle>
                <S.JobDescription>{r.description}</S.JobDescription>
              </S.Job>
            );
          })}
        </S.JobGrid>

        {/* <S.SectionSubtitle>Habilidades</S.SectionSubtitle> */}
      </S.Content>
    </S.Wrapper>
  );
};

export default Resume;
