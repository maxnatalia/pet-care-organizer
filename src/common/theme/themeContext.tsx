import { createContext } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeSwitcherContext = createContext<ThemeContextType | null>(
  null
);

export const ThemeSwitcherProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage("theme", false);

  const toggleTheme = () => {
    setIsDarkTheme((prevState: boolean) => !prevState);
  };

  return (
    <ThemeSwitcherContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

// const getInitialTheme = () => {
//   const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

//   return themeFromLocalStorage ? JSON.parse(themeFromLocalStorage) : false;
// };

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isDarkTheme));
// }, [isDarkTheme]);
