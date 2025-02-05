import PropsType from 'prop-types';
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    // <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
    <ThemeContext.Provider value="dark">
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
    children: PropsType.node.isRequired,
};

export default ThemeContext;
