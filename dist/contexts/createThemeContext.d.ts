import React, { ComponentType, ContextType, PropsWithChildren } from 'react';
export declare type ThemeContextOptions<K> = {
    theme: K;
};
export declare type ThemeProviderProps<K> = Partial<ThemeContextOptions<K>> & {
    defaultTheme?: K;
    onChange?: (theme: K) => void;
    onRef?: (ref: ThemeRef<K>) => void;
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
declare type SetThemeContext<K> = (state: K | ((state: K) => K | null)) => void;
declare const createThemeContext: <T, Key extends keyof T, DefaultKey extends Key>(themes: T, contextOptions: ThemeContextOptions<DefaultKey>) => [(currentTheme?: Key | undefined) => T[Key] & ThemeRef<Key>, (props: React.PropsWithChildren<ThemeProviderProps<Key>>) => JSX.Element, (options?: WithThemeOptions<Key> | undefined) => <C extends React.ComponentType<{}>, Props = C extends React.ComponentType<infer I> ? I : never>(Component: React.ComponentType<Props>) => (props: Omit<Props, keyof T[Key] | keyof ThemeRef<Key>> & {
    theme?: Key | undefined;
}) => JSX.Element, <O extends object>(rest: O, except?: (keyof ThemeRef<Key> | keyof T[DefaultKey])[] | undefined) => Omit<O, keyof T[Key]>];
export default createThemeContext;
