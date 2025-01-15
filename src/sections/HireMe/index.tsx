import { Parallax } from 'react-parallax';

import ParalaxImage from '../../assets/intro-bg-2.jpg';
import Button from '../../components/Button';
import * as S from './styles';

const HireMe = () => {
  return (
    <S.Wrapper>
      <S.Opacity />
      <Parallax bgImage={ParalaxImage} strength={500}>
        <S.Content>
          <S.Title>Ficou interessado(a) em trabalhar comigo?</S.Title>
          <Button href="https://wa.me/5521975026768" color="secondary">
            Me Contrate!
          </Button>
        </S.Content>
      </Parallax>
    </S.Wrapper>
  );
};

export default HireMe;
