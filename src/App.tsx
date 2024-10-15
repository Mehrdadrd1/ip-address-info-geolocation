import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";
import { AppContextProvider } from "./contexts";

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
