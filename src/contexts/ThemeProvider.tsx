import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type PropsType = {
  children: ReactNode;
};

const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
  return useContext(ThemeContext);
}
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

function ThemeProvider({ children }: PropsType) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (matchMedia("(prefers-color-scheme: dark)").matches) setDark(true);
    else setDark(false);
  }, []);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={dark}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
