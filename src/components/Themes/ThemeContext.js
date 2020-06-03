import React from "react";
import styled, { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext({
    toggle: () => {}
});

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'light'
  });

  const Wrapper = styled.div`
    /* Center Container */
    margin: 0 auto;
    max-width: 1200px;
    width: 90%;
  `;

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;