import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./theme";
import { RouterProvider } from "react-router-dom";
import { Router } from "./routes";
import { AppContextProvider } from "./contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
        <ToastContainer
          bodyStyle={{ fontFamily: theme.fonts.main }}
          position="bottom-left"
          theme="colored"
          autoClose={3000}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
