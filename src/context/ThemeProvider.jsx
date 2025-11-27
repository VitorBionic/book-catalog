import { ThemeContext } from "./ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    return saved;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", getInitialTheme());

  const toggleTheme = () => {
    setTheme(t => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
}