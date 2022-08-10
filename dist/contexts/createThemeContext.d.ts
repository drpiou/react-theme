import React, { ComponentType, ContextType, PropsWithChildren } from 'react';
export declare type ThemeProviderProps<K> = {
    theme?: K;
    defaultTheme?: K;
    onChange?: (theme: K) => void;
    onRef?: (ref: ThemeRef<K>) => void;
};
export declare type ThemeContextOptions<K> = {
    theme: K;
};
export declare type ThemeRef<K> = {
    theme: K;
    setTheme: SetThemeContext<K>;
};
export declare type WithThemeProps<K, P = unknown> = P & ThemeRef<K>;
export declare type WithThemeOptions<K> = {
    theme?: K;
    defaultTheme?: K;
};
declare type WithThemeHocProps<P, T, Key extends keyof T> = Omit<WithThemeProps<Key, Omit<P, keyof T[Key]>>, keyof WithThemeProps<Key>> & {
    theme?: Key;
};
declare type SetThemeContext<K> = (state: K | ((state: K) => K | null)) => void;
declare const createThemeContext: <T, Key extends keyof T, DefaultKey extends Key>(themes: T, contextOptions: ThemeContextOptions<DefaultKey>) => [(currentTheme?: Key | undefined) => T[Key] & ThemeRef<Key>, (props: React.PropsWithChildren<ThemeProviderProps<Key>>) => JSX.Element, (options?: WithThemeOptions<Key> | undefined) => <C extends React.ComponentType<{}>, P = C extends React.ComponentType<infer I> ? I : never>(Component: React.ComponentType<P>) => (props: WithThemeHocProps<P, T, Key>) => JSX.Element, <O extends object>(rest: O, except?: (keyof T[DefaultKey] | keyof ThemeRef<Key>)[] | undefined) => Omit<O, keyof T[Key]>];
export default createThemeContext;
