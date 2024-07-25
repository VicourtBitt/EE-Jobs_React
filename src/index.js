import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  :root {
    --first-color: #6C757D;
    --first-auxiliar: #343A40;
    --secondary-auxiliar: #232526;
    --button-color: #007bff;
    --button-secondary: #FFC107;
    --button-terciary: #17a2b8;
    --light: #FFF;
    --dark: #000;
    --gray: #CCC;
  }

  * {
    margin: 0px;
    padding: 0px;
    text-indent: 0px;
  }

  body {
    min-width: 420px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);