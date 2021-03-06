import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import App from "./components/App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
