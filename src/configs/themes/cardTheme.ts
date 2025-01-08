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

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          
        
          width: "370px",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
          marginTop: "20px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
          },
        },
      },
    },

    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: 150,
          height: "auto",
          objectFit: "cover", // Preenche o espaço mantendo proporção
         
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
      },
    },
  },
});
