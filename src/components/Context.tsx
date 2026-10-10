import { createContext, useEffect, useState, type Context, type Dispatch, type ReactNode, type SetStateAction } from "react";

export type ThemeMode = "light" | "dark" | "system";

interface PortfolioContextType {
  isTop: boolean;
  setIsTop: Dispatch<SetStateAction<boolean>>;
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
}

export const PortfolioContext: Context<PortfolioContextType | null> = createContext<PortfolioContextType | null>(null);

type PortfolioContextProps = {
  children: ReactNode;
}

const PortfolioContextProvider = ({ children }: PortfolioContextProps) => {
  const [isTop, setIsTop] = useState<boolean>(false);
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return (localStorage.getItem("portfolio-theme") as ThemeMode) ?? "dark";
  });

  // Apply data-theme to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const setTheme = (t: ThemeMode) => setThemeState(t);

  const value = { isTop, setIsTop, theme, setTheme };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContextProvider;