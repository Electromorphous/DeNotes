import { ThirdwebProvider } from "@thirdweb-dev/react";
import ThemeProvider from "./contexts/ThemeProvider";
import CookieProvider from "./contexts/CookieProvider";
import Home from "./Home";

function App() {
  return (
    <ThirdwebProvider clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}>
      <CookieProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </CookieProvider>
    </ThirdwebProvider>
  );
}

export default App;
