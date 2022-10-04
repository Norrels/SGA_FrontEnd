import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { ObjectsContextProvider } from './Contexts/ObjectsContext';

import { Router } from "./Router";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <ObjectsContextProvider>
      <Router />
      </ObjectsContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}


