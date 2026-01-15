import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * PELINKS SYNERGY - THEME CONTEXT PROVIDER
 * 
 * This component manages theme switching between light and dark modes
 * and provides theme utilities to your entire app.
 * 
 * Usage in App.js:
 * import { ThemeProvider } from './ThemeProvider';
 * 
 * <ThemeProvider>
 *   <YourAppComponent />
 * </ThemeProvider>
 */

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('pelinks-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pelinks-theme', newTheme);
  };

  // Set specific theme
  const setThemeMode = (newTheme) => {
    if (newTheme === 'light' || newTheme === 'dark') {
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('pelinks-theme', newTheme);
    }
  };

  const value = {
    theme,
    toggleTheme,
    setTheme: setThemeMode,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  // Avoid hydration mismatch in Next.js
  if (!mounted) {
    return children;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook to use theme context
 * 
 * Usage:
 * const { theme, toggleTheme, isDark } = useTheme();
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

/**
 * Theme Switcher Button Component
 * 
 * Usage:
 * <ThemeSwitcher />
 */
export const ThemeSwitcher = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={`theme-switcher ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

/**
 * Conditional Renderer based on theme
 * 
 * Usage:
 * <ThemeConditional
 *   light={<LightModeContent />}
 *   dark={<DarkModeContent />}
 * />
 */
export const ThemeConditional = ({ light, dark }) => {
  const { isDark } = useTheme();
  return isDark ? dark : light;
};

/**
 * Class-based theme application component
 * 
 * Usage:
 * <ThemedDiv className="my-component">
 *   Content that responds to theme
 * </ThemedDiv>
 */
export const ThemedDiv = ({ className = '', children, ...props }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`themed-element ${className}`}
      data-theme={theme}
      {...props}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
