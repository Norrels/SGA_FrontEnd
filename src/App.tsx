import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import { ResourcesContextProvider } from "./contexts/ResourcesContext";
import { queryClient } from "./lib/react-query";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { blue } from "./styles/themes/blue";
import { green } from "./styles/themes/green";
import { lilac } from "./styles/themes/lilac";
import { orange } from "./styles/themes/orange";
import { purple } from "./styles/themes/purple";
import { red } from "./styles/themes/red";
import { pink } from "./styles/themes/rosa";
import { white } from "./styles/themes/white";

export function App() {
  const themaStorage = localStorage.getItem("Thema");

  const [theme, setTheme] = useState(blue);

  useEffect(() => {
    changeTheme(themaStorage!);
  }, []);

  function changeTheme(theme: string) {
    switch (theme) {
      case "lilas":
        setTheme(lilac);
        break;
      case "green":
        setTheme(green);
        break;
      case "laranja":
        setTheme(orange);
        break;
      case "vermelho":
        setTheme(red);
        break;
      case "azul":
        setTheme(blue);
        break;
      case "roxo":
        setTheme(purple);
        break;
      case "rosa":
        setTheme(pink);
        break;
      case "white":
        setTheme(white);
        break;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <ResourcesContextProvider>
            <QueryClientProvider client={queryClient}>
              <Router changeTheme={changeTheme} />
            </QueryClientProvider>
          </ResourcesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
