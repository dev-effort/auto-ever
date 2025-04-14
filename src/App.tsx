import { ThemeProvider } from "@emotion/react";
import { colorSet } from "./styles/ColorSet";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={{ colors: colorSet }}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
