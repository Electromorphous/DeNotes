import ThemeProvider from "./contexts/ThemeProvider";
import HeliaProvider from "./contexts/HeliaContext";
import Home from "./Home";

function App() {
  return (
    <ThemeProvider>
      <HeliaProvider>
        <Home />
      </HeliaProvider>
    </ThemeProvider>
  );
}

export default App;
