import React, { ComponentProps, ComponentType, ContextType, PropsWithChildren } from 'react';
export declare type ThemeContextOptions<K> = {
    theme: K;
};
export declare type ThemeProviderProps<K, T = unknown> = Partial<ThemeContextOptions<K>> & {
    defaultTheme?: K;
    onChange?: (theme: K) => void;
    onRef?: (ref: ThemeRef<K, T>) => void;
};
export declare type ThemeRef<K, T = unknown> = T & {
    theme: K;
    setTheme: SetThemeContext<K>;
};
export declare type WithThemeProps<K, T = unknown, P = unknown> = P & ThemeRef<K, T>;
export declare type WithThemeOptions<K> = {
    theme?: K;
};
export declare type SetThemeContext<K> = (theme: K | ((theme: K) => K | null)) => void;
declare const createThemeContext: <T, Key extends keyof T, DefaultKey extends Key>(themes: T, contextOptions: ThemeContextOptions<DefaultKey>) => [() => ThemeRef<Key, T[Key]>, (props: React.PropsWithChildren<ThemeProviderProps<Key, T[Key]>>) => JSX.Element, (options?: WithThemeOptions<Key> | undefined) => <C extends React.ComponentType<{}>, P extends React.ComponentProps<C>>(Component: React.ComponentType<P>) => (props: Omit<P, keyof T[Key] | "theme" | "setTheme"> & {
    theme?: Key | undefined;
}) => JSX.Element, <O extends object, P_1 extends WithThemeProps<Key, T[Key], unknown>, W extends keyof P_1>(rest: O, without?: W[] | undefined) => Omit<O, keyof P_1> & Omit<P_1, W>];
export default createThemeContext;
