# `@drpiou/react-theme`

![Licence](https://img.shields.io/github/license/drpiou/react-theme)
![Package.json version](https://img.shields.io/github/package-json/v/drpiou/react-theme)
![Stage](https://img.shields.io/badge/stage-experimental-important)

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

```typescript
import { darkTheme } from './dark';
import { lightTheme } from './light';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
```

### `themes/light.ts`

```typescript
import { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    background: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
    },
    text: {
      light: 'rgb(28, 28, 30)',
      dark: 'rgb(255, 255, 255)',
    },
  },
};
```

### `themes/dark.ts`

```typescript
import { Theme } from './types';

export const darkTheme: Theme = {
  colors: {
    background: {
      light: 'rgb(28, 28, 30)',
      dark: 'rgb(255, 255, 255)',
    },
    text: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
    },
  },
};
```

### `themes/types.ts`

```typescript
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

### `contexts/theme.ts`

```typescript
import {
  createThemeContext,
  ThemeRef,
  WithThemeProps,
} from '@drpiou/react-theme';
import { ThemeKey, themes } from '../themes';
import { Theme } from '../themes/types';

export type ThemedProps = WithThemeProps<ThemeKey, Theme>;

export type ThemedRef = ThemeRef<ThemeKey, Theme>;

export const [useTheme, ThemeProvider, withTheme, withoutTheme] =
  createThemeContext(themes, {
    theme: 'dark',
  });
```

### `App.tsx`

```typescript jsx
import MyComponent from './components/MyComponent';
import MyComponentWithTheme from './components/MyComponentWithTheme';
import { ThemeProvider } from './contexts/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider onChange={console.log} onRef={console.log}>
      <MyComponent />
      <MyComponentWithTheme />
    </ThemeProvider>
  );
};

export default App;
```

### `components/MyComponent/index.tsx`

```typescript jsx
import { useTheme } from '../../contexts/theme';

const MyComponent = (): JSX.Element => {
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

export default MyComponent;
```

### `components/MyComponentWithTheme/index.tsx`

```typescript jsx
import { ThemedProps, withoutTheme, withTheme } from '../../contexts/theme';

const MyComponentWithTheme = withTheme()(
  (props: ThemedProps & HTMLProps<HTMLDivElement>): JSX.Element => {
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
  },
);

export default MyComponentWithTheme;
```

## Documentation

```typescript
export type createThemeContext = <T, Key extends keyof T, DefaultKey extends Key>(
  themes: T,
  contextOptions: ThemeContextOptions<DefaultKey>,
) => [
  useTheme<T, Key>,
  React.ComponentType<ThemeProviderProps<Key, T[Key]>>,
  withTheme<T, Key>,
  withoutTheme<T, Key>,
];

export type useTheme<T, Key> = () => ThemeRef<Key, T>;

export type withTheme<T, Key> = (
  options?: WithThemeOptions<Key>,
) => <C extends React.ComponentType, P extends React.ComponentProps<C>>(
  Component: React.ComponentType<P>,
) => (
  props: Omit<P, keyof WithThemeProps<Key, T[Key]>> & { theme?: Key },
) => JSX.Element;

export type withoutTheme<T, Key> = <
  O extends object,
  P extends WithThemeProps<Key, T[Key]>,
  W extends keyof P,
>(
  rest: O,
  without?: W[],
) => Omit<O, keyof P> & Omit<P, W>;

export type ThemeContextOptions<K> = {
  theme: K;
};

export type ThemeProviderProps<K, T = unknown> = Partial<
  ThemeContextOptions<K>
> & {
  defaultTheme?: K;
  onChange?: (theme: K) => void;
  onRef?: (ref: ThemeRef<K, T>) => void;
};

export type ThemeRef<K, T = unknown> = T & {
  theme: K;
  setTheme: SetThemeContext<K>;
};

export type WithThemeProps<K, T = unknown, P = unknown> = P & ThemeRef<K, T>;

export type WithThemeOptions<K> = {
  theme?: K;
};

export type SetThemeContext<K> = (theme: K | ((theme: K) => K | null)) => void;
```
