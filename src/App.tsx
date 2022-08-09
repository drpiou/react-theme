import React from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './context';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Thing />
    </ThemeProvider>
  );
}

function Thing(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="card">
      <button onClick={handleClick}>{theme}</button>
    </div>
  );
}

export default App;
