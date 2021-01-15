import * as React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { RecoilRoot } from "recoil";
import { App } from "./components/App";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <React.StrictMode>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </React.StrictMode>
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);
