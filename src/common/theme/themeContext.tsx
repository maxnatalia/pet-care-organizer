import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const LOCAL_STORAGE_KEY = "theme";

const getInitialTheme = () => {
  const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

  return themeFromLocalStorage ? JSON.parse(themeFromLocalStorage) : false;
};

export const ThemeSwitcherContext = createContext<ThemeContextType | null>(
  null
);

export const ThemeSwitcherProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prevState => !prevState);
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
