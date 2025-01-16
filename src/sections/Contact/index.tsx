import emailjs from '@emailjs/browser';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

import Button from '../../components/Button';
import * as S from './styles';

const AboutMe = () => {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userText, setUserText] = useState('');
  const [sent, setSent] = useState(false);

  const handleSendMail = () => {
    setSent(true);
    emailjs.send('service_gow2rzt', 'template_32wfbl9', {
      from_name: `${userName} - ${userMail}`,
      to_name: 'Rafael',
      message: userText,
    });
    setUserMail('');
    setUserName('');
    setUserText('');
    setSent(true);
  };

  return (
    <S.Wrapper id="contato">
      <S.Grid>
        <S.CollumnLeft>
          <S.Title>Entre em contato</S.Title>
          <S.Paragraph>
            Gosto de discutir novos projetos e desafios. Por favor, compartilhe o máximo
            de informações possível para que possamos aproveitar ao máximo nossa primeira
            conversa
          </S.Paragraph>
          <S.Subtitle>Atualmente em:</S.Subtitle>
          <S.Paragraph>Maricá, RJ - Brasil</S.Paragraph>
          <S.Subtitle>Telefone:</S.Subtitle>
          <S.Paragraph>21 97502 6768</S.Paragraph>
        </S.CollumnLeft>
        <S.CollumnRight>
          <S.Title>Vamos Conversar</S.Title>

          <S.Form>
            <S.CustomTextField
              value={userName}
              fullWidth
              label="Seu Nome"
              variant="standard"
              onChange={(e) => setUserName(e.target.value)}
            />
            <S.CustomTextField
              value={userMail}
              fullWidth
              label="Seu Endereço de email"
              variant="standard"
              onChange={(e) => setUserMail(e.target.value)}
            />
            <S.CustomTextField
              value={userText}
              multiline
              rows={3}
              fullWidth
              label="Como posso te ajudar?"
              variant="standard"
              onChange={(e) => setUserText(e.target.value)}
            />
          </S.Form>
          <S.Actions>
            {sent ? (
              <p>Solicitação enviada! Entrarei em contato em breve. Obrigado.</p>
            ) : (
              <Button click={() => handleSendMail()}>
                Enviar <ArrowForwardIcon fontSize="large" />
              </Button>
            )}
          </S.Actions>
        </S.CollumnRight>
      </S.Grid>
    </S.Wrapper>
  );
};

export default AboutMe;
