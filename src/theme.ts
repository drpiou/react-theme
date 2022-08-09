import { lightTheme } from './light';
import { darkTheme } from './dark';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
