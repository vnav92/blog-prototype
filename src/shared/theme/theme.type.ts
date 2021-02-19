export type Theme = {
  regularMode: ThemeMode;
  darkMode: ThemeMode;
}

type ThemeMode = {
  primaryColor: string;
  primaryContrastColor: string;
}