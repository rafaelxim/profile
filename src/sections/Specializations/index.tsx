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
    title: 'Landing Pages Eficientes',
    icon: <RecordVoiceOverIcon />,
    description:
      'Transforme sua ideia em uma landing page poderosa, otimizada para conversões e com design irresistível. Vamos criar a página que vai capturar a atenção de seus clientes e gerar resultados rápidos.',
  },
  {
    id: 2,
    title: 'Portfólio Profissional',
    icon: <ArchitectureIcon />,
    description:
      'Exiba seu trabalho de forma impactante com um portfólio que reflete sua expertise. Vou ajudá-lo a criar uma vitrine online única, atraente e que conquiste novos clientes de imediato.',
  },
  {
    id: 3,
    title: 'Sites Corporativos Responsivos',
    icon: <SmartphoneIcon />,
    description:
      'Transforme a presença online da sua empresa com um site corporativo elegante e funcional. Atraia clientes e parceiros com um design moderno, navegação intuitiva e informações claras.',
  },
  {
    id: 4,
    title: 'Otimização de Sites para SEO',
    icon: <TerminalIcon />,
    description:
      'Garanta que seu site seja facilmente encontrado no Google. Com uma abordagem focada em SEO, podemos aumentar sua visibilidade online e atrair mais tráfego qualificado. ',
  },
  {
    id: 5,
    title: 'Design Personalizado e Moderno',
    icon: <ColorLensIcon />,
    description:
      'Com um design criativo e totalmente personalizado, vamos garantir que seu site reflita a identidade da sua marca, proporcionando uma experiência única para seus visitantes.',
  },
  {
    id: 6,
    title: 'Suporte e Manutenção Contínuos',
    icon: <SpeedIcon />,
    description:
      'Não se preocupe com a manutenção do seu site. Ofereço suporte contínuo para garantir que seu site esteja sempre funcionando perfeitamente e atualizado com as últimas tendências.',
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
