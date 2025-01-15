import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Button from '../../components/Button';
import * as S from './styles';

const AboutMe = () => {
  return (
    <S.Wrapper>
      <S.Grid>
        <S.CollumnLeft>
          <S.Title>Entre em contato</S.Title>
          <S.Paragraph>
            Gosto de discutir novos projetos e desafios. Por favor, compartilhe o máximo
            de informações possível para que possamos aproveitar ao máximo nossa primeira
            conversa
          </S.Paragraph>
          <S.Subtitle>Atualmente em:</S.Subtitle>
          <S.Paragraph>Recife, PE - Brasil</S.Paragraph>
          <S.Subtitle>Telefone:</S.Subtitle>
          <S.Paragraph>81 99488 3942</S.Paragraph>
        </S.CollumnLeft>
        <S.CollumnRight>
          <S.Title>Vamos Conversar</S.Title>

          <S.Form>
            <S.CustomTextField fullWidth label="Seu Nome" variant="standard" />
            <S.CustomTextField
              fullWidth
              label="Seu Endereço de email"
              variant="standard"
            />
            <S.CustomTextField
              multiline
              rows={3}
              fullWidth
              label="Como posso te ajudar?"
              variant="standard"
            />
          </S.Form>
          <S.Actions>
            <Button>
              Enviar <ArrowForwardIcon fontSize="large" />
            </Button>
          </S.Actions>
        </S.CollumnRight>
      </S.Grid>
    </S.Wrapper>
  );
};

export default AboutMe;
