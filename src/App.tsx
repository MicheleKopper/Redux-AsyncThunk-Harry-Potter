import { Provider } from "react-redux";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { store } from "./store";
import { ThemeProvider } from "@emotion/react";
import { cardTheme } from "./configs/themes/cardTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={cardTheme}>
        <GlobalStyled />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
