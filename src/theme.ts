import { defaultTheme } from './default';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  light: defaultTheme,
  dark: defaultTheme,
};
