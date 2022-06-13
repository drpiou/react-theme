import { getComponentName, useStateSafe } from '@drpiou/react-utils';
import { withoutProperties } from '@drpiou/ts-utils';
import keys from 'lodash/keys';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import React from 'react';

export type ThemeProviderProps<K> = {
  initialTheme?: K;
};

export type ThemeContextOptions<K> = {
  theme: K;
};

export type WithThemeProps<K, P = unknown> = P & {
  theme: K;
  setTheme: SetThemeContext<K>;
};

export type WithThemeOptions<K> = {
  theme?: K;
  defaultTheme?: K;
};

type WithThemeHocProps<P, T, Key extends keyof T> = Omit<
  WithThemeProps<Key, Omit<P, keyof T[Key]>>,
  keyof WithThemeProps<Key>
> & {
  theme?: Key;
};

type SetThemeContext<K> = React.Dispatch<React.SetStateAction<K>>;

const createThemeContext = <T, Key extends keyof T, DefaultKey extends Key>(
  themes: T,
  contextOptions: ThemeContextOptions<DefaultKey>,
): [typeof useCtx, typeof Provider, typeof withTheme, typeof withoutTheme] => {
  const ctx = React.createContext<{
    theme: Key;
    setTheme: SetThemeContext<Key>;
  }>({
    theme: contextOptions.theme,
    setTheme: () => contextOptions.theme,
  });

  const Provider = (props: React.PropsWithChildren<ThemeProviderProps<Key>>): JSX.Element => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useStateSafe<Key>(initialTheme ?? contextOptions.theme);

    return <ctx.Provider value={{ theme, setTheme }}>{children}</ctx.Provider>;
  };

  const useCtx = (currentTheme?: Key): T[Key] & React.ContextType<typeof ctx> => {
    const c = React.useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside ThemeProvider?");
    }

    return React.useMemo(() => {
      const theme = currentTheme ?? c.theme;

      return {
        ...(contextOptions.theme === theme
          ? themes[contextOptions.theme]
          : merge({}, themes[contextOptions.theme], themes[theme])),
        theme,
        setTheme: c.setTheme,
      };
    }, [c, currentTheme]);
  };

  const withTheme = (
    options?: WithThemeOptions<Key>,
  ): (<C extends React.ComponentType, P = C extends React.ComponentType<infer I> ? I : never>(
    Component: React.ComponentType<P>,
  ) => (props: WithThemeHocProps<P, T, Key>) => JSX.Element) => {
    return ((Component: React.ComponentType): React.ComponentType<WithThemeProps<Key>> => {
      const WithComponent = (props: WithThemeProps<Key>): JSX.Element => {
        const { theme: initialTheme, ...rest } = props;

        const useTheme = useCtx(options?.theme ?? initialTheme ?? options?.defaultTheme);

        return <Component {...(rest as any)} {...useTheme} />;
      };

      WithComponent.displayName = getComponentName(Component);

      return WithComponent;
    }) as never;
  };

  const withoutThemeKeys = [...keys(themes[contextOptions.theme]), 'theme'] as (
    | keyof T[DefaultKey]
    | keyof WithThemeProps<Key>
  )[];

  const withoutTheme = <O extends object>(rest: O, except?: typeof withoutThemeKeys): Omit<O, keyof T[Key]> => {
    const without = withoutProperties(rest, withoutThemeKeys as string[]);

    return (Array.isArray(except) ? { ...without, ...pick(rest, except) } : without) as never;
  };

  return [useCtx, Provider, withTheme, withoutTheme];
};

export default createThemeContext;
