import React, { HTMLProps } from 'react';
import './App.css';
import { ThemedProps, ThemedRef, ThemeProvider, useTheme, withoutTheme, withTheme } from './contexts/theme';
import { ThemeKey } from './themes';

const App = (): JSX.Element => {
  const handleChange = (state: ThemeKey): void => {
    console.log('ThemeProvider@onChange: ', state);
  };

  const handleRef = (ref: ThemedRef): void => {
    console.log('ThemeProvider@onRef: ', ref);
  };

  return (
    <ThemeProvider onChange={handleChange} onRef={handleRef}>
      <Thing />
      <WithThing />
    </ThemeProvider>
  );
};

const Thing = (): JSX.Element => {
  const { colors, theme, setTheme } = useTheme();

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={'card'}>
      <button onClick={handleClick}>{theme}</button>
      <p>{`background: ${colors.background.light}`}</p>
    </div>
  );
};

const WithThing = withTheme()((props: ThemedProps & HTMLProps<HTMLDivElement>): JSX.Element => {
  const { colors, theme, setTheme, ...rest } = props;

  const handleClick = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div {...withoutTheme(rest)} className={'card'}>
      <button onClick={handleClick}>{theme}</button>
      <p>{`text: ${colors.text.light}`}</p>
    </div>
  );
});

export default App;
