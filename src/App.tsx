import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

export default App;
