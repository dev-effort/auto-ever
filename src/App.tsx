import { ThemeProvider } from "@emotion/react";
import { colorSet } from "./styles/ColorSet";
import { Routing } from "./Routing";
import { RepositoryProvider } from "./repositories/RepositoryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ colors: colorSet }}>
        <RepositoryProvider>
          <Routing />
        </RepositoryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
