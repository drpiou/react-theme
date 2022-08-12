import { darkTheme } from './dark';
import { lightTheme } from './light';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
