import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MyThemeProvider } from './components/Themes/ThemeContext';
import { ModalProvider } from 'styled-react-modal';

ReactDOM.render(
  <MyThemeProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </MyThemeProvider>,
  document.getElementById('root')
);
