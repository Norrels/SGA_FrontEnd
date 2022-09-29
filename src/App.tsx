import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { TeacherContextProvider } from './contexts/TeacherContext';
import { Router } from "./Router";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TeacherContextProvider>
          <Router />
        </TeacherContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


