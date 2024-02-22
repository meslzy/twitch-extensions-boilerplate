import React from "react";

import {createTheme, ThemeProvider, CssBaseline} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
          ["#app"]: {
            height: "100%",
            width: "100%",
          },
        },
      },
    },
  },
});

const MuiProvider = (props: React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {props.children}
      </CssBaseline>
    </ThemeProvider>
  );
};

export default MuiProvider;