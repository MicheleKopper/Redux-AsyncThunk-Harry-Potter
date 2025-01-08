import { createTheme } from "@mui/material";

export const cardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  typography: {
    fontFamily: "'Spectral', serif",

    h5: {
      fontSize: 20,
      fontWeight: 700,
      color: "black",
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
      margin: 0,
      padding: 0,
      lineHeight: 1.2,
      color: "#686D76",
    },
  },
});
