import { useIntersectionObserver } from '@uidotdev/usehooks';

import Badge from '../../components/Badge';
import PersonalInfo from '../../components/PersonalInfo';
import Title from '../../components/Title';
import * as S from './styles';

const DEFAULT_OBSERVER_OPTIONS = {
  threshold: 0.1,
  root: null,
  rootMargin: '0px',
};
const AboutMe = () => {
  const [descriptionTitleref, descriptionTitleEntry] = useIntersectionObserver(
    DEFAULT_OBSERVER_OPTIONS,
  );
  const [descriptionTextref, descriptionTextEntry] = useIntersectionObserver(
    DEFAULT_OBSERVER_OPTIONS,
  );
  const [experienceYearsref, experienceYearsEntry] = useIntersectionObserver(
    DEFAULT_OBSERVER_OPTIONS,
  );

  return (
    <S.Wrapper id="about">
      <S.Content>
        <S.Heading>
          <Badge>Sobre Mim</Badge>
          <Title>Me conheça melhor</Title>
        </S.Heading>
        <S.Experience>
          <S.Description>
            <S.DescriptionTitle
              isVisible={descriptionTitleEntry?.isIntersecting}
              ref={descriptionTitleref}
            >
              Olá, eu sou <strong>Rafael Herculano</strong>
            </S.DescriptionTitle>
            <S.DescriptionText
              isVisible={descriptionTextEntry?.isIntersecting}
              ref={descriptionTextref}
            >
              Sou um desenvolvedor com paixão pelo design web. Gosto de criar sites
              simples, limpos e elegantes que oferecem valor real ao usuário. Diversos
              clientes obtiveram resultados excepcionais ao trabalhar comigo. Entregar
              trabalho dentro do prazo e do orçamento, que atenda aos requisitos do
              cliente, é meu lema.
            </S.DescriptionText>
          </S.Description>
          <S.ExperienceYears
            isVisible={experienceYearsEntry?.isIntersecting}
            ref={experienceYearsref}
          >
            <S.ExperienceBox>
              <S.CircularBackground />
              <S.ExperienceNumber>10</S.ExperienceNumber>
            </S.ExperienceBox>
            <S.ExperienceText>Anos de Experiência</S.ExperienceText>
          </S.ExperienceYears>
        </S.Experience>
        <S.InfoData>
          <PersonalInfo description="Nome:" value="Rafael Herculano" />
          <PersonalInfo description="Email:" value="rafaelmherculano@gmail.com" />
          <PersonalInfo description="Nascimento:" value="29 de outubro" />
          <PersonalInfo description="Natural de:" value="Rio de Janeiro, Brasil" />
        </S.InfoData>
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
