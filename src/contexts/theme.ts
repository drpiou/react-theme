import { createThemeContext, ThemeRef, WithThemeProps } from '../../lib';
import { ThemeKey, themes } from '../themes';
import { Theme } from '../themes/types';

export type ThemedProps = WithThemeProps<ThemeKey, Theme>;

export type ThemedRef = ThemeRef<ThemeKey, Theme>;

export const [useTheme, ThemeProvider, withTheme, withoutTheme] = createThemeContext(themes, {
  theme: 'dark',
});
