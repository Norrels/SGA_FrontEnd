import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import { ResourcesContextProvider } from "./contexts/ResourcesContext";
import { queryClient } from "./lib/react-query";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthProvider>
          <ResourcesContextProvider>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </ResourcesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
