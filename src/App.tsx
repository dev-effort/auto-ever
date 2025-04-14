import { ThemeProvider } from "@emotion/react";
import { colorSet } from "./styles/ColorSet";
import { Routing } from "./Routing";

function App() {
  return (
    <ThemeProvider theme={{ colors: colorSet }}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
