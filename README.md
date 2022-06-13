# `@drpiou/react-theme`

![GitHub](https://img.shields.io/github/license/drpiou/react-theme)
![GitHub package.json version](https://img.shields.io/github/package-json/v/drpiou/react-theme)
![Jest tests](https://img.shields.io/badge/passed%20test-1-green)
![Jest tests](https://img.shields.io/badge/stage-beta-important)
![GitHub all releases](https://img.shields.io/github/downloads/drpiou/react-theme/total)

The `@drpiou/react-theme` package creates a React theme context.

> - written in TypeScript.

<!--ts-->

- [Compatibility](#compatibility)
- [Installation](#installation)
- [Example](#example)
- [Documentation](#documentation)

<!--te-->

## Compatibility

- React (17.0.2+)
- React Native (0.64.0+)
- Expo (43+)

## Installation

```shell
yarn add @drpiou/react-theme
```

## Example

### `themes/index.ts`

```typescript jsx
import { defaultTheme } from './default';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  default: defaultTheme,
  dark: defaultTheme,
};
```

### `themes/default/index.ts`

```typescript jsx
import { Theme } from '../../types/theme';

export const defaultTheme: Theme = {
  colors: {
    background: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
    },
    text: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
    },
  },
};
```

### `types/theme.ts`

```typescript jsx
export type ThemeColor = keyof ThemeColorList;

export type ThemeColorList = {
  light: string;
  dark: string;
};

export type Theme = {
  colors: {
    background: ThemeColorList;
    border?: Partial<ThemeColorList>;
    text: ThemeColorList;
  };
};
```

### `contexts/theme/index.tsx`

```typescript jsx
import { createThemeContext, WithThemeProps } from '@drpiou/react-theme';
import { ThemeKey, themes } from '../../themes/index';
import { Theme } from '../../types/theme';

export type ThemedProps<C> = C & WithThemeProps<ThemeKey, Theme>;

export const [useTheme, ThemeProvider, withTheme, withoutTheme] =
  createThemeContext(themes, {
    theme: 'default',
  });
```

### `App.tsx`

```typescript jsx
import { ThemeProvider } from './contexts/theme';

const App = (): JSX.Element => {
  return <ThemeProvider initialTheme={'default'}>{/* ... */}</ThemeProvider>;
};

export default App;
```

### `components/ThemeText/index.tsx`

```typescript jsx
import { ThemedProps, withoutTheme, withTheme } from '../../contexts/theme';

export type ThemeTextProps = ThemedProps<HTMLParagraphElement>;

const ThemeText = (props: ThemeTextProps): JSX.Element => {
  const { colors, ...textProps } = props;

  return <p {...withoutTheme(textProps)} style={{ color: colors.text.dark }} />;
};

export default withTheme()(ThemeText);
```

### `screens/Splash/index.tsx`

```typescript jsx
import { useTheme } from '../../contexts/theme';

const SplashScreen = (): JSX.Element => {
  const { colors, theme, setTheme } = useTheme();

  const handlePress = (): void => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  };

  return (
    <div style={{ backgroundColor: colors.background.light }}>
      <div onClick={handlePress} />
    </div>
  );
};

export default SplashScreen;
```

## Documentation

```typescript jsx
type createThemeContext = <T, Key extends keyof T, DefaultKey extends Key>(
  themes: T,
  contextOptions: ThemeContextOptions<DefaultKey>,
) => [
  useTheme<T, Key>,
  ThemeProvider<T>,
  withTheme<T, Key>,
  withoutTheme<T, Key, DefaultKey>,
];

type useTheme<T, Key> = (currentTheme?: Key) => T[Key] & {
  theme: Key;
  setTheme: UseThemeSet<Key>;
};

type withTheme<T, Key> = (
  options?: WithThemeOptions<Key>,
) => <
  C extends React.ComponentType,
  P = C extends React.ComponentType<infer I> ? I : never,
>(
  Component: React.ComponentType<P>,
) => (props: WithThemeHocProps<Omit<P, keyof T[Key]>, Key>) => JSX.Element;

type withoutTheme<T, Key, DefaultKey> = <O extends object>(
  rest: O,
  except?: (keyof T[DefaultKey] | keyof WithThemeProps<unknown, Key>)[],
) => Omit<O, keyof T[Key]>;

type ThemeProvider<K> = (props: ThemeProviderProps<K>) => JSX.Element;

type ThemeProviderProps<K> = {
  initialTheme?: K;
};

type ThemeContextOptions<K> = {
  theme: K;
};

type WithThemeProps<P, K> = P & {
  theme: K;
  setTheme: UseThemeSet<K>;
};

type WithThemeOptions<K> = {
  theme?: K;
  defaultTheme?: K;
};

type WithThemeHocProps<P, T, Key extends keyof T> = Omit<
  WithThemeProps<Key, Omit<P, keyof T[Key]>>,
  keyof WithThemeProps<Key>
> & {
  theme?: Key;
};

type UseThemeSet<K> = React.Dispatch<React.SetStateAction<K>>;
```
