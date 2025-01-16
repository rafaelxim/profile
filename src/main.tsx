import emailjs from '@emailjs/browser';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

emailjs.init({
  publicKey: 'Ow_lR2_DHB6AGumAq',
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
