import { ThemeProvider } from "@emotion/react";
import { colorSet } from "./styles/ColorSet";

function App() {
  return (
    <ThemeProvider theme={{ colors: colorSet }}>
      <div>fd</div>
    </ThemeProvider>
  );
}

export default App;
