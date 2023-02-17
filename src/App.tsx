import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import { ObjectsContextProvider } from './contexts/ObjectsContext';
import { Router } from "./Router";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <AuthProvider>
          <ObjectsContextProvider>
            <Router />
          </ObjectsContextProvider>
          </AuthProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
}


