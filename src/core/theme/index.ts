import { Platform } from "react-native";

export const colors = {
  background: "#0B0C0E",
  backgroundSecondary: "#121419",
  card: "#15171E",
  cardBorder: "#222733",
  cardBorderHighlight: "#FFFFFF",
  primary: "#FFFFFF",
  primaryDark: "#0B0C0E",
  text: "#FFFFFF",
  textSecondary: "#8E95A5",
  textMuted: "#525969",
  muted: "#525969",
  border: "#202530",
  borderSubtle: "#181C24",
  gridLine: "#161922",
  accent: "#FFFFFF",
  tagDark: "#1E222B",
  tagDarkText: "#D0D6E0",
  tagLight: "#FFFFFF",
  tagLightText: "#0B0C0E",
  warn: "#FF6363",
  warnSoft: "rgba(255, 99, 99, 0.15)",
  success: "#22C55E",
};

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const radius = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
};

export const typography = {
  mono: Platform.select({
    ios: "Menlo",
    android: "monospace",
    default: "monospace",
  }),
};
