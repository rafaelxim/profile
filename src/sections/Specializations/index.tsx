import ArchitectureIcon from '@mui/icons-material/Architecture';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpeedIcon from '@mui/icons-material/Speed';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import React from 'react';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import * as S from './styles';

const SERVICES = [
  {
    id: 1,
    title: 'Domínio de linguagens de marcação, estilo e programação',
    icon: <ColorLensIcon />,
    description:
      'Proficiente em HTML para estruturação, CSS para estilização e JavaScript para interatividade. Tenho um sólido entendimento dessas linguagens, e considero fundamental para criar interfaces de usuário eficazes e responsivas.',
  },
  {
    id: 2,
    title: 'Conhecimento de frameworks e bibliotecas',
    icon: <ArchitectureIcon />,
    description:
      'Tenho familiaridade com frameworks e bibliotecas populares, como React.js e Vue.js. Creio que a capacidade de trabalhar com essas ferramentas pode acelerar o desenvolvimento e melhorar a manutenibilidade do código.',
  },
  {
    id: 3,
    title: 'Experiência em design responsivo',
    icon: <SmartphoneIcon />,
    description:
      'Creio que minha capacidade de criar interfaces que se adaptem a diferentes dispositivos e resoluções é crucial para garantir uma experiência de usuário consistente.',
  },
  {
    id: 4,
    title: 'Habilidades de resolução de problemas e depuração',
    icon: <TerminalIcon />,
    description:
      'Encontrar e corrigir problemas de forma eficiente é uma habilidade essencial. Tenho habilidades sólidas de resolução de problemas e sou capaz de identificar e corrigir bugs de maneira oportuna. ',
  },
  {
    id: 5,
    title: 'Colaboração e habilidades de comunicação',
    icon: <RecordVoiceOverIcon />,
    description:
      'Trabalhar em equipe é uma parte essencial do desenvolvimento de software. Sou um desenvolvedor sênior que colabora efetivamente com outros membros da equipe, procuro me comunicar claramente e contribuir para um ambiente de trabalho positivo.',
  },
  {
    id: 6,
    title: 'Foco na otimização de desempenho e experiência do usuário',
    icon: <SpeedIcon />,
    description:
      'Estou sempre atento ao desempenho da aplicação e à experiência do usuário. Ao longo dos anos me especializei em otimizar o carregamento de páginas, minimizar o tempo de resposta e criar interfaces intuitivas que proporcionem uma experiência fluida aos usuários.',
  },
];

const Specializations = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.4,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Wrapper ref={ref}>
      {/* <S.Content isVisible={entry?.isIntersecting}> */}
      <S.Content isVisible={true}>
        <S.Heading>
          <Badge>Meus Serviços</Badge>
          <Title>Como posso ajudar em seu projeto?</Title>
        </S.Heading>
        <S.ServicesGrid>
          {SERVICES.map((s) => {
            return (
              <S.Service key={s.id}>
                {s.icon}
                <S.ServiceTitle>{s.title}</S.ServiceTitle>
                <S.ServiceDescription>{s.description}</S.ServiceDescription>
              </S.Service>
            );
          })}
        </S.ServicesGrid>
      </S.Content>
    </S.Wrapper>
  );
};

export default Specializations;
