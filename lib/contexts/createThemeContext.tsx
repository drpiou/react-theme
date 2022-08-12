import { getComponentName, useStateSafe } from '@drpiou/react-utils';
import { withoutProperties } from '@drpiou/ts-utils';
import keys from 'lodash/keys';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import React, {
  ComponentType,
  ContextType,
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';

export type ThemeContextOptions<K> = {
  theme: K;
};

export type ThemeProviderProps<K> = Partial<ThemeContextOptions<K>> & {
  defaultTheme?: K;
  onChange?: (theme: K) => void;
  onRef?: (ref: ThemeRef<K>) => void;
};

export type ThemeRef<K> = {
  theme: K;
  setTheme: SetThemeContext<K>;
};

export type WithThemeProps<K, P = unknown> = P & ThemeRef<K>;

export type WithThemeOptions<K> = {
  theme?: K;
  defaultTheme?: K;
};

type SetThemeContext<K> = (state: K | ((state: K) => K | null)) => void;

const createThemeContext = <T, Key extends keyof T, DefaultKey extends Key>(
  themes: T,
  contextOptions: ThemeContextOptions<DefaultKey>,
): [typeof useCtx, typeof Provider, typeof withTheme, typeof withoutTheme] => {
  const ctx = createContext<ThemeRef<Key>>({
    theme: contextOptions.theme,
    setTheme: () => contextOptions.theme,
  });

  const Provider = (props: PropsWithChildren<ThemeProviderProps<Key>>): JSX.Element => {
    const { theme: controlledTheme, defaultTheme, onChange, onRef, children } = props;

    const handleChange = useRef(onChange);
    const handleRef = useRef(onRef);

    const [theme, setTheme] = useStateSafe<Key>(defaultTheme || contextOptions.theme);

    handleChange.current = onChange;
    handleRef.current = onRef;

    const handleTheme: SetThemeContext<Key> = useCallback(
      (updatedState) => {
        setTheme((prevState) => {
          if (typeof updatedState === 'function') {
            const newState = updatedState(prevState);

            if (newState === null) {
              return prevState;
            }

            return newState;
          } else {
            return updatedState;
          }
        });
      },
      [setTheme],
    );

    const themeValue = controlledTheme || theme;

    const ref = useMemo(() => {
      return { theme: themeValue, setTheme: handleTheme };
    }, [handleTheme, themeValue]);

    useEffect(() => {
      handleChange.current?.(theme);
    }, [theme]);

    useEffect(() => {
      handleRef.current?.(ref);
    }, [ref]);

    return <ctx.Provider value={ref}>{children}</ctx.Provider>;
  };

  const useCtx = (currentTheme?: Key): T[Key] & ContextType<typeof ctx> => {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside ThemeProvider?");
    }

    return useMemo(() => {
      const theme = currentTheme || c.theme;

      return {
        ...(contextOptions.theme === theme ? themes[theme] : merge({}, themes[contextOptions.theme], themes[theme])),
        theme,
        setTheme: c.setTheme,
      };
    }, [c, currentTheme]);
  };

  const withTheme = (
    options?: WithThemeOptions<Key>,
  ): (<C extends ComponentType, Props = C extends ComponentType<infer I> ? I : never>(
    Component: ComponentType<Props>,
  ) => (props: Omit<Props, keyof WithThemeProps<Key, T[Key]>> & { theme?: Key }) => JSX.Element) => {
    return ((Component: ComponentType): ComponentType<WithThemeProps<Key>> => {
      const WithComponent = (props: WithThemeProps<Key>): JSX.Element => {
        const { theme, ...rest } = props;

        const useTheme = useCtx(options?.theme || theme || options?.defaultTheme);

        return <Component {...(rest as any)} {...useTheme} />;
      };

      WithComponent.displayName = getComponentName(Component);

      return WithComponent;
    }) as never;
  };

  const withoutThemeKeys = [...keys(themes[contextOptions.theme]), 'theme', 'setTheme'] as (
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
