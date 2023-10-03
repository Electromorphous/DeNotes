import { ThirdwebProvider } from "@thirdweb-dev/react";
import ThemeProvider from "./contexts/ThemeProvider";
import Home from "./Home";

function App() {
  return (
    <ThirdwebProvider clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}

export default App;
