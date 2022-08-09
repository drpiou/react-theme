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
