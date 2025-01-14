import { useIntersectionObserver } from '@uidotdev/usehooks';

import Badge from '../../components/Badge';
import Title from '../../components/Title';
import * as S from './styles';

const RESUME = [
  {
    id: 1,
    title: '1. Briefing e Planejamento',
    subtitle: 'Entendimento da sua necessidade e definição de objetivos',
    description:
      'Conversamos sobre suas ideias, analisamos suas necessidades e definimos os objetivos do site. Também alinhamos o público-alvo e as funcionalidades essenciais.',
  },
  {
    id: 2,
    title: '2. Wireframe e Protótipo',
    subtitle: 'Criação do layout e estrutura inicial do site',
    description:
      'Desenvolvemos um esboço visual (wireframe) para definir a organização das páginas, garantindo uma navegação intuitiva e um design alinhado à sua marca.',
  },
  {
    id: 3,
    title: '3. Design e Identidade Visual',
    subtitle: 'Transformamos o layout em uma experiência envolvente.',
    description:
      'Aplicamos cores, tipografias e elementos gráficos que representam sua identidade visual, criando um site moderno e atrativo para o seu público.',
  },
  {
    id: 4,
    title: '4. Desenvolvimento e Funcionalidades',
    subtitle: 'Codificação do site para torná-lo funcional',
    description:
      'Agora é hora de transformar o design em um site real! Implementamos tudo com código limpo, responsivo e otimizado para garantir performance e usabilidade.',
  },
  {
    id: 5,
    title: '5. Testes e Ajustes',
    subtitle: 'Garantimos que tudo funcione perfeitamente',
    description:
      'Realizamos testes rigorosos para corrigir possíveis erros, garantir compatibilidade com diferentes dispositivos e otimizar a velocidade do site.',
  },
  {
    id: 6,
    title: '6. Publicação e Suporte',
    subtitle: 'Lançamos o site e garantimos seu bom funcionamento',
    description:
      'Seu site está pronto para o mundo! Fazemos a publicação no domínio desejado e oferecemos suporte inicial para garantir uma transição tranquila.',
  },
];

const Resume = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
  });

  return (
    <S.Wrapper ref={ref}>
      <S.Content isVisible={entry?.isIntersecting}>
        <S.Heading>
          <Badge>Passo a passo</Badge>
          <Title>Veja as principais etapas do nosso projeto</Title>
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
