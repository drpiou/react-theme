'use strict';

const { act, renderHook } = require('@testing-library/react-hooks');
const React = require('react');
const { createThemeContext } = require('..');

test('@drpiou/react-state:createThemeContext', () => {
  const themes = {
    default: { a: 'red', b: 'pink' },
    dark: { a: 'blue', b: 'cyan' },
    other: { a: 'orange', b: 'yellow' },
  };

  const [useTheme, ThemeProvider] = createThemeContext(themes, {
    theme: 'default',
  });

  const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;

  const { result } = renderHook(() => useTheme(), { wrapper });

  expect(typeof result.current).toBe('object');
  expect(typeof result.current.theme).toBe('string');
  expect(typeof result.current.setTheme).toBe('function');
  expect(typeof result.current.a).toBe('string');
  expect(typeof result.current.b).toBe('string');

  expect(result.current.theme).toBe('default');
  expect(result.current.a).toBe('red');
  expect(result.current.b).toBe('pink');

  act(() => {
    result.current.setTheme('dark');
  });

  expect(result.current.theme).toBe('dark');
  expect(result.current.a).toBe('blue');
  expect(result.current.b).toBe('cyan');

  const { result: theme } = renderHook(() => useTheme('other'), { wrapper });

  expect(theme.current.theme).toBe('other');
  expect(theme.current.a).toBe('orange');
  expect(theme.current.b).toBe('yellow');
});
