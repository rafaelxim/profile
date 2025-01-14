import ArchitectureIcon from '@mui/icons-material/Architecture';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpeedIcon from '@mui/icons-material/Speed';
import TerminalIcon from '@mui/icons-material/Terminal';
import { useIntersectionObserver } from '@uidotdev/usehooks';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import * as S from './styles';

const SERVICES = [
  {
    id: 1,
    title: 'Soluções Personalizadas',
    icon: <RecordVoiceOverIcon />,
    description:
      'Desenvolvimento sob medida para o seu projeto. Cada cliente é único, e cada site que criamos é feito especialmente para você, refletindo sua identidade e objetivos de forma personalizada.',
  },
  {
    id: 2,
    title: 'Design Responsivo',
    icon: <ArchitectureIcon />,
    description:
      'Seu site será totalmente otimizado para funcionar perfeitamente em desktops, tablets e smartphones, garantindo uma experiência consistente para todos os usuários.',
  },
  {
    id: 3,
    title: 'Suporte Contínuo',
    icon: <SmartphoneIcon />,
    description:
      'Oferecemos suporte pós-lançamento para resolver qualquer dúvida e garantir que seu site continue funcionando sem problemas.',
  },
  {
    id: 4,
    title: 'Alta Performance',
    icon: <TerminalIcon />,
    description:
      'Com foco na otimização de carregamento, seus visitantes terão uma experiência ágil, o que também contribui para melhores rankings de SEO. ',
  },
  {
    id: 5,
    title: 'SEO Integrado',
    icon: <ColorLensIcon />,
    description:
      'Implementamos práticas de SEO desde o início, ajudando seu site a ser encontrado facilmente por potenciais clientes no Google.',
  },
  {
    id: 6,
    title: 'Design Inovador',
    icon: <SpeedIcon />,
    description:
      'Nosso objetivo é criar sites não apenas funcionais, mas visualmente atraentes, utilizando as últimas tendências de design para impressionar seu público.',
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
          <Badge>Meus Diferenciais</Badge>
          <Title>Como vou elevar seu serviço ao próximo nível?</Title>
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
