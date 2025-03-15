import { createContext, useContext } from "react";

// Modern color palette
export const theme = {
  colors: {
    primary: "#3D52A2", // Deep blue
    secondary: "#ECAF41", // Gold accent
    accent: "#F97316", // Vibrant orange for CTAs
    backgroundColor: "#F0F8FF", // Alice Blue
    card: "#FFFFFF", // Card background
    text: {
      primary: "#1F2937", // Dark text
      secondary: "#4B5563", // Medium text
      light: "#FFFFFF", // Light text
    },
  },
  fonts: {
    sans: '"Inter", system-ui, sans-serif',
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);
