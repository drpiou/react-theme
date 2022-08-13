import { getComponentName, useStateSafe } from '@drpiou/react-utils';
import { withoutProperties } from '@drpiou/ts-utils';
import keys from 'lodash/keys';
import merge from 'lodash/merge';
import pick from 'lodash/pick';
import React, {
  ComponentProps,
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

export type ThemeProviderProps<K, T = unknown> = Partial<ThemeContextOptions<K>> & {
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

const createThemeContext = <T, Key extends keyof T, DefaultKey extends Key>(
  themes: T,
  contextOptions: ThemeContextOptions<DefaultKey>,
): [typeof useCtx, typeof Provider, typeof withTheme, typeof withoutTheme] => {
  const defaultThemeValues = themes[contextOptions.theme];

  const withoutThemeKeys = [...keys(defaultThemeValues), 'theme', 'setTheme'];

  const ctx = createContext<ThemeRef<Key, T[Key]>>({
    ...defaultThemeValues,
    theme: contextOptions.theme,
    setTheme: () => contextOptions.theme,
  });

  const getTheme = (themeValue: Key): T[Key] => {
    return contextOptions.theme === themeValue ? defaultThemeValues : merge({}, defaultThemeValues, themes[themeValue]);
  };

  const Provider = (props: PropsWithChildren<ThemeProviderProps<Key, T[Key]>>): JSX.Element => {
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
      return { ...getTheme(themeValue), theme: themeValue, setTheme: handleTheme };
    }, [handleTheme, themeValue]);

    useEffect(() => {
      handleChange.current?.(theme);
    }, [theme]);

    useEffect(() => {
      handleRef.current?.(ref);
    }, [ref]);

    return <ctx.Provider value={ref}>{children}</ctx.Provider>;
  };

  const useCtx = (): ContextType<typeof ctx> => {
    const c = useContext(ctx);

    if (c === undefined) {
      throw new Error("Couldn't find a context object. Is your component inside ThemeProvider?");
    }

    return c;
  };

  const withTheme = (
    options?: WithThemeOptions<Key>,
  ): (<C extends ComponentType, P extends ComponentProps<C>>(
    Component: ComponentType<P>,
  ) => (props: Omit<P, keyof WithThemeProps<Key, T[Key]>> & { theme?: Key }) => JSX.Element) => {
    return ((Component: ComponentType): ComponentType<WithThemeProps<Key, T[Key]>> => {
      const WithComponent = (props: WithThemeProps<Key, T[Key]>): JSX.Element => {
        const { theme, ...rest } = props;

        const { theme: contextTheme, setTheme } = useCtx();

        const themeValue = options?.theme || theme || contextTheme;

        const currentTheme = useMemo(() => getTheme(themeValue), [themeValue]);

        return <Component {...(rest as any)} {...currentTheme} theme={themeValue} setTheme={setTheme} />;
      };

      WithComponent.displayName = getComponentName(Component);

      return WithComponent;
    }) as never;
  };

  const withoutTheme = <O extends object, P extends WithThemeProps<Key, T[Key]>, W extends keyof P>(
    rest: O,
    without?: W[],
  ): Omit<O, keyof P> & Omit<P, W> => {
    const properties = withoutProperties(rest, withoutThemeKeys);

    return (Array.isArray(without) ? { ...properties, ...pick(rest, without) } : properties) as never;
  };

  return [useCtx, Provider, withTheme, withoutTheme];
};

export default createThemeContext;
