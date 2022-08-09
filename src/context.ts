import { createThemeContext, WithThemeProps } from '../lib';
import { ThemeKey, themes } from './theme';
import { Theme } from './types';

export type ThemedProps<C> = C & WithThemeProps<ThemeKey, Theme>;

export const [useTheme, ThemeProvider, withTheme, withoutTheme] = createThemeContext(themes, {
  theme: 'dark',
});
