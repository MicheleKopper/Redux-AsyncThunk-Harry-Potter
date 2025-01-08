import { CssBaseline, CSSObject, GlobalStyles } from "@mui/material";
import "@fontsource/spectral/200.css";
import "@fontsource/spectral/300.css";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/spectral/600.css";
import "@fontsource/spectral/700.css";
import "@fontsource/spectral/800.css";

const styles: Record<string, CSSObject> = {
  body: {
    fontFamily: "Spectral",
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
}
