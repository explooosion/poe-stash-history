import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import App from './App';
import store from './store';
import theme from './theme';

if (!window.chrome.cookies && window.chrome.experimental) {
  window.chrome.cookies = window.chrome.experimental.cookies;
}

const GlobalStyle = createGlobalStyle`

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${(p) => p.theme.globalFont};
    color: ${(p) => p.theme.white};
    background-color: ${(p) => p.theme.dark};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
