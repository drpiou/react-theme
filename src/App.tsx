import { log, logInfo } from '@drpiou/ts-utils';
import React, { HTMLProps } from 'react';
import './App.css';
import { ThemedProps, ThemeProvider, useTheme, withoutTheme, withTheme } from './context';

const App = (): JSX.Element => {
  return (
    <ThemeProvider onChange={logInfo} onRef={log}>
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

const WithThing = withTheme()((props: ThemedProps<HTMLProps<HTMLDivElement>>): JSX.Element => {
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
